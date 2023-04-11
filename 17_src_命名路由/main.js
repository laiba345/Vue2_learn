import Vue from 'vue'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap-vue/dist/bootstrap-vue'
// 引入
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// Vue.use(BootstrapVue)
// 应用插件
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, // 路由器
}).$mount('#app')
