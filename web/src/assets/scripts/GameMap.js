import { AcGameObject } from "./AcGameObject";
import { Wall } from "./Wall";


export class GameMap extends AcGameObject {
    constructor(ctx, parent){
        super(); // 执行地图的构造函数之前先执行父类的构造函数

        this.ctx = ctx;
        this.parent = parent; 
        this.L = 0;
        
        this.rows = 13;
        this.cols = 13;

        this.walls = [];
        this.inner_walls_count = 30;
    }

    // 使用flood fill算法计算地图中两名玩家的是否是联通的
    check_connectivity(g, sx, sy, tx, ty){
        if (sx ==tx && sy == ty) return true;
        g[sx][sy] = true;

        let dx = [-1, 0, 1, 0], dy= [0,1,0,-1];
        for(let i = 0; i< 4 ;i++){
            let x = sx +dx[i], y = sy + dy[i];
            if(!g[x][y] && this.check_connectivity(g,x,y,tx,ty))
                return true;
        }
        return false;
    }


    create_walls() {
        const g = [];
        for (let r = 0; r < this.rows; r++) {
            g[r] = [];
            for (let c = 0; c < this.cols; c++) {
                g[r][c] = false; 
            }
        }
        // 给四周加上障碍物
        for (let r = 0; r < this.rows; r++) {
            g[r][0] = g[r][this.cols - 1] = true;
        }
        
        for (let c = 0; c < this.cols; c++) {
            g[0][c] = g[this.rows - 1][c] = true;
        }


        // 创建随机障碍物
        for (let i = 0; i < this.inner_walls_count /2; i++){
            for (let j =0; j<1000; j++){
                let r = parseInt(Math.random() * this.rows);
                let c = parseInt(Math.random() * this.cols);
                if (g[r][c] || g[c][r]) continue;
                if (r == this.rows -2 && c==1 || r==1 && c == this.cols -2)
                    continue;
                g[r][c]=g[c][r]=true;
                break;
            }
        }

        // 复制地图
        const copy_g = JSON.parse(JSON.stringify(g));

        if (!this.check_connectivity(copy_g, this.rows - 2, 1, 1, this.cols - 2)) return false;

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (g[r][c]) {
                    this.walls.push(new Wall(r, c, this));
                }
            }
        }

        return true;
    }

    // 这是一个游戏对象
    start(){
        for (let i = 0; i < 1000; i ++) {
            if (this.create_walls())
                break;
        }
        
    }

    update_size() {
        this.L = parseInt(Math.min(this.parent.clientWidth / this.cols, this.parent.clientHeight / this.rows));
        this.ctx.canvas.width = this.cols * this.L;
        this.ctx.canvas.height = this.rows * this.L;
    }

    update(){
        this.update_size(); // 出了第一��之外，每一��执行一次
        this.render(); // 每一帧执行一次
    }

    render() { // 渲染
        // 假设地图是用 Canvas 画的，并且每一格用一个方格表示
        const color_even = "#AAD751", color_odd = "#A2D048";
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.ctx.fillStyle = (i + j) % 2 === 0? color_even : color_odd;
                this.ctx.fillRect(j * this.L, i * this.L, this.L, this.L);
            }
        }
    }

}



