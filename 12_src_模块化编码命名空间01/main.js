import Vue from 'vue'
import App from './App.vue'

// 引入vuex
// import Vuex from 'vuex'
// 引入store
import store from './store'

// 使用插件
// Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,  
  beforeCreate() {
    // 使用全局事件总线进行创建
    Vue.prototype.$bus = this
  }
}).$mount('#app')
