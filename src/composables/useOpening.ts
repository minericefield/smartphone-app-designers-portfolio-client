import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { MAIN_ROUTE_NAMES } from '@/helpers/constants'

import { Generals } from '@/composables/useGenerals'

export const useOpening = (generals: Generals) => {
  const isOpeningVisible = ref(true)
  const router = useRouter()
  const route = useRoute()

  const onOpeningComplete = () => {
    if (
      !generals.shouldHandleAsSp.value &&
      route.path === '/'
    ) {
      router.push({ name: MAIN_ROUTE_NAMES['graphic-designs'] })
    }
    isOpeningVisible.value = false
  }

  return {
    isOpeningVisible,

    onOpeningComplete
  }
}

