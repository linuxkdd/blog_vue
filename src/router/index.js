import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/home',//首页
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/login',//登录页
    name: 'login',
    component: () => import('../views/home/login/index.vue')
  },
  {
    path: '/register',//注册页
    name: 'register',
    component: () => import('../views/home/register/index.vue')
  },
  {
    path: '/nav',//导航页
    name: 'nav',
    component: () => import('../views/home/nav/index.vue')
  },
  {
    path: '/search',//搜索页
    name: 'search',
    component: () => import('../views/home/search/index.vue')
  },
  {
    path: '/window',//窗口
    name: 'window',
    component: () => import('../views/home/window/index.vue')
  },
  {
    path: '/text',//正文
    name: 'text',
    component: () => import('../views/home/text/index.vue')
  },
  {
    path: '/p',//文章页
    name: 'p',
    component: () => import('../views/home/p/index.vue')
  },
  {
    path: '/test',//测试
    name: 'test',
    component: () => import('../views/home/test/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
