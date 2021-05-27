import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/posts'
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../components/AppPosts.vue')
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: () => import ('../components/AppSinglePost.vue')
  },
  {
    path: '/add',
    component: () => import ('../components/AppAddPost.vue')
  },
  {
    path: '/edit/:id',
    component: () => import ('../components/AppAddPost.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
