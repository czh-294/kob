import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/error/NotFound.vue'
import RankListIndexView from '../views/ranklist/RankListIndexView.vue'
import RecordIndexView from '../views/record/RecordIndexView.vue'
import UserBotIndexView from '../views/user/bot/UserBotIndexView.vue'
import PkIndexView from '../views/pk/PkIndexView.vue'
import UserAccountLoginView from '@/views/user/account/UserAccountLoginView.vue'
import UserAccountRegisterVier from '@/views/user/account/UserAccountRegisterVier.vue'
import store from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/pk',
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/404/',
    name: '404',
    component: NotFound,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: '/ranklist/',
    name: 'ranklist_index',
    component: RankListIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/pk/',
    name: 'pk_index',
    component: PkIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/record/',
    name: 'record_index',
    component: RecordIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/user/bot/',
    name: 'user_bot_index',
    component: UserBotIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/user/account/register/',
    name: 'user_account_register',
    component: UserAccountRegisterVier,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: '/user/account/login/',
    name: 'user_account_login',
    component: UserAccountLoginView,
    meta: {
      requestAuth: false,
    }
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

// 全局路由守卫, 前端页面路由跳转前进行拦截, 进行权限校验
router.beforeEach((to, from, next) => {
  if (to.meta.requestAuth && !store.state.user.is_login) {
    next({name: 'user_account_login'})
  }
  else{
    next();
  }
})

export default router
