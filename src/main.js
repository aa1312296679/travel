import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入单页应用的公共样式
// reset样式使单页应用的CSS兼容各种浏览器
import 'styles/reset.css'
// border样式使单页应用的CSS的border在各种浏览器中呈现真实的1px物理像素
import 'styles/border.css'
// 导入fastclick模块
// 处理单页应用的元素点击延迟
import fastClick from 'fastclick'
import 'styles/iconfont.css'

fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
