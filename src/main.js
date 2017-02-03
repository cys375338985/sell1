// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods.vue';
import seller from './components/seller/seller.vue';
import retings from './components/retings/retings.vue';
import VueRouter from 'vue-router';
import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */
const routes = [
  {path: '/goods', component: goods},
  {path: '/seller', component: seller},
  {path: '/retings', component: retings}
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
router.push('/goods');
