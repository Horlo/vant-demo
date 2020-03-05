import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import FastClick from 'fastclick'

import 'normalize.css/normalize.css'

FastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')