import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import testTwo from'../views/testTwo.vue'
import testThree from'../views/testThree.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/testOne',
    name: 'testOne',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/testOne.vue')
  },
  {
    path:'/testTwo',
    name:'testTwo',
    component: () => import(/* webpackChunkName: "about" */ '../views/testTwo.vue')
  },
  {
    path: '/testThree',
    name: 'testThree',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/testThree.vue')
  }
  

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
