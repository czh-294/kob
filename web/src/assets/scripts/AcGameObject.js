const AC_GAME_OBJECTS = [];

// 解释下面这段代码

// 1. 定义了一个空数组 AC_GAME_OBJECTS
// 2. 定义了一个类 AcGameObject
// 3. 在 AcGameObject 类的构造函数中，将当前实例添加到 AC_GAME_OBJECTS 数组中
 
export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0; // 帧与帧之间间隔的距离
        this.has_called_start = false;
    }

    start() { // 只执行一次

    }

    update() { // 出了第一帧之外，每一帧执行一次，用于更新游戏对象的状态
        
    }
    
    on_destroy(){ // 删除之前执行

    }

    destroyed() {
        this.on_destroy();

        for (let i in AC_GAME_OBJECTS){
            const obj = AC_GAME_OBJECTS[i];
            if (obj === this){
                AC_GAME_OBJECTS.splice(i); // 在js中删除一个数组使用splice
                break;
            }
        }
    }
}
// 这段代码的作用是创建一个无限循环的动画帧更新机制。1s刷新60次，即每次刷新间隔为16.67ms。
// 每次浏览器准备重绘时，都会调用step函数，从而实现持续的动画更新。
let last_timestamp;
const step = timestamp => {
    for (let obj of AC_GAME_OBJECTS){
        if (!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start(); // 调用 start 方法
        }
        else{
            obj.timedelta = timestamp - last_timestamp; // 计算时间间隔
            obj.update(); // 调用 update 方法
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step); // 请求下一帧
}

requestAnimationFrame(step); // 开始动画帧更新


