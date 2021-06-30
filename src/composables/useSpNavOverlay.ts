import { computed, ref, Ref } from 'vue'
import $ from 'jquery'

import { SectionWord } from '@/types/SectionWord'

import { GraphicDesigns } from '@/composables/useGraphicDesigns'
import { UiDesigns } from '@/composables/useUiDesigns'
import { Designer } from '@/composables/useDesigner'

export type SectionWords = { id: string, sectionWords: Ref<SectionWord[]> }

export const useSpNavOverlay = (
  graphicDesigns: GraphicDesigns,
  uiDesigns: UiDesigns,
  designer: Designer,
  ids: { graphicDesigns: string, uiDesigns: string, designer: string }
) => {
  const sectionWordsList = computed<SectionWords[]>(() => {
    return [
      {
        id: ids.graphicDesigns,
        sectionWords: graphicDesigns.sectionWords
      },
      {
        id: ids.uiDesigns,
        sectionWords: uiDesigns.sectionWords
      },
      {
        id: ids.designer,
        sectionWords: designer.sectionWords
      }
    ]
  })

  const isNavVisible = ref(false)
  const didNavLeave = ref(false)
  const openNav = () => {
    isNavVisible.value = true
  }
  const scrollToTheSection = (scrollTo: string) => {
    const position = $(scrollTo).offset()?.top;
    $('html, body').animate({ scrollTop: position}, 600)
  }

  return {
    sectionWordsList,
    isNavVisible,
    didNavLeave,

    openNav,
    scrollToTheSection
  }
}
