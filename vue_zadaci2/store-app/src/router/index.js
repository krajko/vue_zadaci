import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/customers',
    component: () => import('../views/Customers.vue')
  },
  {
    path:'/customers/:id',
    name:'latest-purchases',
    props: true,
    component: () => import('../views/LatestPurchases.vue')
  },
  {
    path: '/products',
    component: () => import('../views/Products.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
