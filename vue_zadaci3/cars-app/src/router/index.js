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
    component: () => import( '../components/AppCars.vue')
  }, 
  {
    path: '/add',
    name: 'AddCar',
    props: true,
    component: () => import('../components/AppAddCar.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    props: true,
    component: () => import('../components/AppAddCar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
