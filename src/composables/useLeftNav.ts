import { computed, ref, unref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { SectionWord } from '@/types/SectionWord'

import { MAIN_ROUTE_NAMES } from '@/helpers/constants'

import { GraphicDesigns } from '@/composables/useGraphicDesigns'
import { UiDesigns } from '@/composables/useUiDesigns'
import { Designer } from '@/composables/useDesigner'

export type SectionWords = {
  routeName: MAIN_ROUTE_NAMES,
  sectionWords: SectionWord[],
  baseColor: string,
  isCurrentPage: boolean
}

export const useLeftNav = (
  graphicDesigns: GraphicDesigns,
  uiDesigns: UiDesigns,
  designer: Designer
) => {
  const router = useRouter()
  const route = useRoute()
  const sectionWordsList = computed<SectionWords[]>(() => {
    return [
      {
        routeName: MAIN_ROUTE_NAMES['graphic-designs'],
        sectionWords: unref(graphicDesigns.sectionWords),
        baseColor: graphicDesigns.displayedDesign.value.baseColor,
        isCurrentPage: route.name === MAIN_ROUTE_NAMES['graphic-designs']
      },
      {
        routeName: MAIN_ROUTE_NAMES['ui-designs'],
        sectionWords: unref(uiDesigns.sectionWords),
        baseColor: uiDesigns.displayedDesign.value.baseColor,
        isCurrentPage: route.name === MAIN_ROUTE_NAMES['ui-designs']
      },
      {
        routeName: MAIN_ROUTE_NAMES['designer'],
        sectionWords: unref(designer.sectionWords),
        baseColor: designer.designer.baseColor,
        isCurrentPage: route.name === MAIN_ROUTE_NAMES['designer']
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
