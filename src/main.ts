import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: makeElem => makeElem(App),
}).$mount('#app')
