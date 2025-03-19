import { createStore } from 'vuex'
import MoudleUser from './user'


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: MoudleUser, // 引入 User 模块
  }
})
