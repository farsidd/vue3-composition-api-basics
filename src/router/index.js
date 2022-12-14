import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Posts from '../views/Posts.vue'
import HomeViewWithComposable from '../views/HomeViewWithComposable.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home-2',
      name: 'home-2',
      component: HomeViewWithComposable
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/postDetails/:id',
      name: 'postDetails',
      component: () => import('../views/PostDetails.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/modal',
      name: 'modal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ModalView.vue')
    }
  ]
})

export default router
