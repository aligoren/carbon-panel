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
          },
          {
            path: 'cards',
            name: 'Cards',
            component: () => import('../views/base/Cards.vue')
          },
          {
            path: 'carousels',
            name: 'Carousels',
            component: () => import('../views/base/Carousels.vue')
          },
          {
            path: 'collapses',
            name: 'Collapses',
            component: () => import('../views/base/Collapses.vue')
          },
          {
            path: 'header',
            name: 'Header',
            component: () => import('../views/base/Header.vue')
          },
          {
            path: 'list-groups',
            name: 'List Groups',
            component: () => import('../views/base/ListGroups.vue')
          },
          {
            path: 'navs',
            name: 'Navs',
            component: () => import('../views/base/Navs.vue')
          },
          {
            path: 'navbars',
            name: 'Navbars',
            component: () => import('../views/base/Navbars.vue')
          },
          {
            path: 'paginations',
            name: 'Paginations',
            component: () => import('../views/base/Paginations.vue')
          },
          {
            path: 'popovers',
            name: 'Popovers',
            component: () => import('../views/base/Popovers.vue')
          },
          {
            path: 'progress-bars',
            name: 'Progress Bars',
            component: () => import('../views/base/ProgressBars.vue')
          },
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
})

export default router
