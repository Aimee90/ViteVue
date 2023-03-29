import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Main from '../components/layout/main.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '_Home',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页',
          notCache: true,
          icon: 'md-home',
        },
        component: () => import('../pages/home.vue'),
      },
    ],
  },
  {
    path: '/temp',
    component: Main,
    redirect: '/temp/list',
    children: [
      {
        path: 'list',
        name: 'TempList',
        component: () => import('../pages/template.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
