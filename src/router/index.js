import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/donate',
    name: 'Donate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "donate" */ '../views/Donate.vue')
  },
  {
    path: '/updates',
    name: 'Updates',
    component: () => import(/* webpackChunkName: "updates" */ '../views/Updates.vue')
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: () => import(/* webpackChunkName: "recipes" */ '../views/Recipes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router