import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/market',
    name: 'Market',
    component: () => import('../views/Market.vue')
  },
  {
    path: '/wishlist/:slug',
    name: 'Wishlist',
    component: () => import('../views/Wishlist.vue')
  },
  {
    path: '/profile/:slug',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    children: [
      {
        path: 'info',
        name: 'My_profile',
        component: () => import('../views/My_profile.vue')
      },
      {
        path: 'settings',
        component: () => import('../views/Settings.vue')
      },
      {
        path: 'exit',
        component: () => import('../views/Exit.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
