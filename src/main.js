// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import goods from './components/goods/goods.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
/* eslint-disable no-new */
const routes = [
  {path: '/goods', component: goods}
];
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router: router
});

