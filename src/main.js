import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
// 导入单页应用的公共样式
// reset样式使单页应用的CSS兼容各种浏览器
import 'styles/reset.css'
// border样式使单页应用的CSS的border在各种浏览器中呈现真实的1px物理像素
import 'styles/border.css'
// 导入fastclick模块
// 处理单页应用的元素点击延迟
import fastClick from 'fastclick'
import 'styles/iconfont.css'
// 导入vue版的swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 导入better-scroll滚动插件
import Bscroll from 'better-scroll'
import Axios from 'axios'
// 将插件挂载到vue类的原型中
Vue.prototype.$Bscroll = Bscroll
Vue.prototype.$axios = Axios
// 将swiper组件包的所有组件全局注册
Vue.use(VueAwesomeSwiper)

fastClick.attach(document.body)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
