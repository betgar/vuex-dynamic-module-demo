import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list',
    name: 'DemoList',
    component: () => import(/* webpackChunkName: "DemoList" */ '../views/DemoList.vue')
  },
  {
    path: '/form',
    name: 'DemoForm',
    component: () => import(/* webpackChunkName: "DemoList" */ '../views/DemoForm.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
