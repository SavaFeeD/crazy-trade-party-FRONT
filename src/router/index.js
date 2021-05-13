import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    component: () => import('../views/error.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/new_dataset',
    name: 'New_dataset',
    component: () => import('../views/New_dataset.vue')
  },
  {
    path: '/market',
    name: 'Market',
    component: () => import('../views/Market.vue'),
    children: [
      {
        path: 'all',
        name: 'All',
        component: () => import('../views/Market_all.vue')
      },
      {
        path: 'category/:id',
        name: 'Category',
        component: () => import('../views/Market_category.vue')
      }
    ]
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
  },
  {
    path: '/product/:id',
    name: 'OneProduct',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('../views/Analytics.vue'),
    children: [
      {
        path: 'sendfile',
        name: 'SendFile',
        component: () => import('../views/Analytics_sendFile.vue')
      },
      {
        path: 'selectparams',
        name: 'SelectParams',
        component: () => import('../views/Analytics_selectParams.vue')
      },
      {
        path: 'viewstatistic',
        name: 'ViewStatistic',
        component: () => import('../views/Analytics_viewStatistic.vue')
      }
    ]
  },
  {
    path: '/rating',
    name: 'Rating',
    component: () => import('../views/Rating.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
