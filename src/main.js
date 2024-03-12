import Vue from 'vue'
import App from './App.vue'
import Router from '@/router/index.js'
import Store from "@/store/store.js"

Vue.config.productionTip = false

new Vue({
  router : Router, 
  store : Store, 
  render: h => h(App),
}).$mount('#app')
