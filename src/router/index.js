import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat/:chat_id/',
    name: 'ChatDetails',   
    props: router => ({chatId: parseInt(router.params.chat_id)}), 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "chatdetails" */ '../views/ChatDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
