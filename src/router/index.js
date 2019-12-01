import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: () => import('../containers/Container.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: 'theme',
        redirect: '/theme/colors',
        name: 'Theme',
        component: {
          render(c) { return c('router-view') }
        },
        children: [
          {
            path: 'colors',
            name: 'Colors',
            component: () => import('../views/theme/Colors.vue')
          },
          {
            path: 'typography',
            name: 'Typography',
            component: () => import('../views/theme/Typography.vue')
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
