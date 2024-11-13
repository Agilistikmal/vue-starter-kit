import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import PostPage from '@/pages/post/PostPage.vue'
import HomePage from '@/pages/home/HomePage.vue'
import FeedbackPage from './pages/feedback/FeedbackPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/post',
    component: PostPage,
  },
  {
    path: '/feedback',
    component: FeedbackPage,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
