import Vue from 'vue'
import moment from 'moment'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$moment = moment

new Vue({
  render: h => h(App)
}).$mount('#app')
