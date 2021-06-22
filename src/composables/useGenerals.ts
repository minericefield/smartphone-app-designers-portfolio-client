import { reactive, computed, toRefs, InjectionKey, nextTick } from 'vue'
import { Router } from 'vue-router'
import {
  DefaultApi,
  Configuration
} from 'smartphone-app-designers-portfolio-api-docs/client'

import { getOs, getBrowser, getDeviceType } from '@/helpers/generals'

export const useGenerals = () => {
  const generals = reactive({
    os: '',
    browser: '',
    deviceType: '',
    windowsInnerWidth: 0,
    windowsInnerHeight: 0
  })
  const settings = reactive({
    maintenanceMessage: ''
  })
  const shouldHandleAsSp = computed(
    () => generals.deviceType === 'mobile' || generals.deviceType === 'tablet' || generals.windowsInnerWidth <= 1025
  )

  const initialize = () => {
    const userAgent = window.navigator.userAgent

    generals.os = getOs(userAgent)
    generals.browser = getBrowser(userAgent)
    generals.deviceType = getDeviceType(userAgent)

    updateWindowsInnerSize()
  }

  const updateWindowsInnerSize = async () => {
    await nextTick()
    generals.windowsInnerWidth = window.innerWidth
    generals.windowsInnerHeight = window.innerHeight
  }

  
  const handleRouteNav = (router: Router) => {
    return new DefaultApi(
      new Configuration({ basePath: process.env.VUE_APP_SERVER_HOST }),
    ).fetchSettings().then(({ data }) => {
      if (data.settings.isUnderMaintenance) {
        settings.maintenanceMessage = data.settings.maintenanceMessage
        router.push({ name: 'maintenance' })
      }
    })
  }

  const registerRouteNav = (router: Router) => {
    handleRouteNav(router)

    router.beforeEach((to, _, next) => {
      if (to.name !== 'maintenance') {
        // No await
        handleRouteNav(router)
      }

      next()
    })
  }

  return {
    ...toRefs(generals),
    ...toRefs(settings),
    shouldHandleAsSp,

    initialize,
    updateWindowsInnerSize,
    registerRouteNav
  }
}

export type Generals = ReturnType<typeof useGenerals>

export const GENERALS_KEY: InjectionKey<Generals> = Symbol('Generals')

export const generalsDefault = useGenerals()
