import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import PostPage from '@/pages/post/PostPage.vue'
import HomePage from '@/pages/home/HomePage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/post',
    component: PostPage,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
