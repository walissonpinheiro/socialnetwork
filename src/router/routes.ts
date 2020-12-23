import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '',
    redirect: 'signin'
  },

  {
    path: '',
    component: () => import('layouts/MyAccountLayout.vue'),
    children: [
      { name: 'signin', path: 'signin', component: () => import('pages/MyAccount.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'index', path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
