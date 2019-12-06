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
      },
      {
        path: 'base',
        redirect: '/base/breadcrumbs',
        name: 'Base',
        component: {
          render(c) { return c('router-view') }
        },
        children: [
          {
            path: 'breadcrumbs',
            name: 'Breadcrumbs',
            component: () => import('../views/base/Breadcrumbs.vue')
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
})

export default router
