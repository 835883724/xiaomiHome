import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('@/views/myHome/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/myHome/index.vue')
  },
  {
    path: '/myCenter',
    name: 'myCenter',
    component: () => import('@/views/myCenter/index.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
