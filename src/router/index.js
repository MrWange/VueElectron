import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/task',
    name: 'task',
    component: () => import(/* webpackChunkName: "about" */ '../views/TaskView.vue')
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import(/* webpackChunkName: "about" */ '../views/ResourcesView.vue')
  },
  {
    path: '/exam',
    name: 'exam',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExamView.vue')
  },
  {
    path: '/secret',
    name: 'secret',
    component: () => import(/* webpackChunkName: "about" */ '../views/SecretView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
