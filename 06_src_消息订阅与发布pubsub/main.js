import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 使用全局事件总线进行创建
    Vue.prototype.$bus = this
  }
}).$mount('#app')
