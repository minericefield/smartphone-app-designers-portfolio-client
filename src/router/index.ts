import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { CATEGORIES } from '@/helpers/constants'

import Main from '@/views/Main.vue'
import Maintenance from '@/views/Maintenance.vue'
import Designs from '@/templates/Designs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: 'ui-designs',
        name: 'ui-designs',
        component: Designs,
        meta: {
          category: CATEGORIES['UI DESIGN']
        }
      },
      {
        path: 'graphic-designs',
        name: 'graphic-designs',
        component: Designs,
        meta: {
          category: CATEGORIES['GRAPHIC DESIGN']
        }
      }
    ]
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    component: Maintenance
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
