import { ref } from 'vue'

import { SectionWord } from '@/types/SectionWord'

import { useSectionWords } from '@/composables/useSectionWords'

export const useGraphicDesignsSectionWords = () => {
  const sectionWords = ref<SectionWord[]>([
    {
      word: 'G',
      additionalStyles: {}
    },
    {
      word: 'r',
      additionalStyles: {}
    },
    {
      word: 'a',
      additionalStyles: {}
    },
    {
      word: 'p',
      additionalStyles: {}
    },
    {
      word: 'h',
      additionalStyles: {}
    },
    {
      word: 'i',
      additionalStyles: {}
    },
    {
      word: 'c',
      additionalStyles: { marginRight: '1.6rem' }
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
