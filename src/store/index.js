import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  // vuex的数据源
  state,
  // vuex的非异步写入方法
  mutations,
  // vuex的异步写入方法
  actions
})
