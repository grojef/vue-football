import Vue from 'vue'
import App from './App.vue'
import routersCombine from './routers'
import store from './store'

import filter from './filter'

import './common'

var VueRouter = require('vue-router')
Vue.use(VueRouter);
/*var VueResource = require('vue-resource');
Vue.use(VueResource);*/

var router = routersCombine(VueRouter)
const app = new Vue({
  router,
  store,
  filter,
  el: '#app',
  render: h => h(App)
});

//app.$mount('#app');

