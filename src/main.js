import Vue from "vue";
import App from "./App.vue";
import routersCombine from "./routers";
import store from "./store";
import filter from "./filter";
import "./common";
import "./assets/styles/media10px.css";
import "./assets/styles/rem-base.css";
import "./assets/styles/iconfont/iconfont.css";
import "./assets/styles/index.css";

import VueRouter from "vue-router";

Vue.use(VueRouter);

var router = routersCombine(VueRouter)
const app = new Vue({
    router,
    store,
    filter,
    el: '#app',
    render: h => h(App)
});

//app.$mount('#app');

