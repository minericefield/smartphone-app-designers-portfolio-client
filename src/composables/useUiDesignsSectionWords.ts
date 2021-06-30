import { ref } from 'vue'

import { SectionWord } from '@/types/SectionWord'

import { useSectionWords } from '@/composables/useSectionWords'

export const useUiDesignsSectionWords = () => {
  const sectionWords = ref<SectionWord[]>([
    {
      word: 'U',
      additionalStyles: {}
    },
    {
      word: 'I',
      additionalStyles: { marginRight: '16px' }
    },
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
    }
  ])

  return {
    ...useSectionWords(sectionWords)
  }
}
