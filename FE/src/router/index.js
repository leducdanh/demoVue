import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cat/:catID/product',
    name: 'productbycat',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsByCat.vue')
  },
  {
    path: '/product/insert',
    name: 'insertProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/inseartPro.vue')
  },
  {
    path: '/product/:id',
    name: 'editProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/editPro.vue')
  },
  {
    path: '/cat/insert',
    name: 'editProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/insertCat.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
