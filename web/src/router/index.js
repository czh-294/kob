import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/error/NotFound.vue'
import RankListIndexView from '../views/ranklist/RankListIndexView.vue'
import RecordIndexView from '../views/record/RecordIndexView.vue'
import UserBotIndexView from '../views/user/bot/UserBotIndexView.vue'
import PkIndexView from '../views/pk/PkIndexView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/pk',
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '/ranklist',
    name: 'ranklist_index',
    component: RankListIndexView
  },
  {
    path: '/pk',
    name: 'pk_index',
    component: PkIndexView
  },
  {
    path: '/record',
    name: 'record_index',
    component: RecordIndexView
  },
  {
    path: '/user/bot',
    name: 'user_bot_index',
    component: UserBotIndexView
  },
  // 当没有匹配到合适的路由时，重定向到 404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
