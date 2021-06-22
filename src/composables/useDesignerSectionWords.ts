import { ref } from 'vue'

import { SectionWord } from '@/types/SectionWord'

import { useSectionWords } from '@/composables/useSectionWords'

export const useDesignerSectionWords = () => {
  const sectionWords = ref<SectionWord[]>([
    {
      word: 'D',
      additionalStyles: {}
    },
    {
      word: 'e',
      additionalStyles: {}
    },
    {
      word: 's',
      additionalStyles: {}
    },
    {
      word: 'i',
      additionalStyles: {}
    },
    {
      word: 'g',
      additionalStyles: {}
    },
    {
      word: 'n',
      additionalStyles: {}
    },
    {
      word: 'e',
      additionalStyles: {}
    },
    {
      word: 'r',
      additionalStyles: {}
    }
  ])

  return {
    ...useSectionWords(sectionWords)
  }
}
