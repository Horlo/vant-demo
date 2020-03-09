import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import FastClick from 'fastclick'
import VuePageStack from 'vue-page-stack';
import { Lazyload } from 'vant';
import store from "@/store/index.js";

import 'normalize.css/normalize.css'

FastClick.attach(document.body);

Vue.use(Lazyload);

Vue.use(VuePageStack, {
  router
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')