import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/cars'
  },
  {
    path: '/cars',
    name: 'Cars',
    component: () => import( '../views/Cars.vue')
  }, 
  {
    path: '/add',
    name: 'AddCar',
    component: () => import('../views/AddCar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
