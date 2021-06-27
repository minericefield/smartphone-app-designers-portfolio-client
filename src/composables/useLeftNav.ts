import { computed, ref, Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { SectionWord } from '@/types/SectionWord'

import { MAIN_ROUTE_NAMES } from '@/helpers/constants'

import { GraphicDesigns } from '@/composables/useGraphicDesigns'
import { UiDesigns } from '@/composables/useUiDesigns'
import { Designer } from '@/composables/useDesigner'

export type SectionWords = {
  routeName: MAIN_ROUTE_NAMES,
  sectionWords: Ref<SectionWord[]>,
  baseColor: string,
  isCurrentPage: boolean
}

export const useLeftNav = (
  graphicDesigns: GraphicDesigns,
  uiDesigns: UiDesigns,
  designer: Designer,
  routeNames: {
    graphicDesigns: MAIN_ROUTE_NAMES,
    uiDesigns: MAIN_ROUTE_NAMES,
    designer: MAIN_ROUTE_NAMES
  }
) => {
  const router = useRouter()
  const route = useRoute()
  const sectionWordsList = computed<SectionWords[]>(() => {
    return [
      {
        routeName: routeNames.graphicDesigns,
        sectionWords: graphicDesigns.sectionWords,
        baseColor: graphicDesigns.displayedDesign.value.baseColor,
        isCurrentPage: route.name === routeNames.graphicDesigns
      },
      {
        routeName: routeNames.uiDesigns,
        sectionWords: uiDesigns.sectionWords,
        baseColor: uiDesigns.displayedDesign.value.baseColor,
        isCurrentPage: route.name === routeNames.uiDesigns
      },
      {
        routeName: routeNames.designer,
        sectionWords: designer.sectionWords,
        baseColor: designer.designer.baseColor,
        isCurrentPage: route.name === routeNames.designer
      }
    ]
  })

  const isTransitionOverlayVisible = ref(false)
  const transitTo = ref('')
  const transitionOverlayBaseColor = computed(() => {
    const target = sectionWordsList.value.find(sectionWords => sectionWords.routeName === transitTo.value)
    return target?.baseColor || ''
  })
  const prepareTransition = (routeName: MAIN_ROUTE_NAMES) => {
    if (route.name === routeName || isTransitionOverlayVisible.value) return
    isTransitionOverlayVisible.value = true
    transitTo.value = routeName
  }
  const transit = async () => {
    try {
      await router.push({ name: transitTo.value })
    } catch(_) {
      // Do nothing
    } finally {
      // isTransitionOverlayVisible.value = false
    }
  }

  return {
    sectionWordsList,
    isTransitionOverlayVisible,
    transitionOverlayBaseColor,

    prepareTransition,
    transit
  }
}
