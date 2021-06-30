import { ref, Ref } from 'vue'

import { SectionWord } from '@/types/SectionWord'

export const useSectionWords = (sectionWords: Ref<SectionWord[]>) => {
  return {
    sectionWords: ref(sectionWords.value.map(sectionWord => {
      const delay = (4 + Math.floor(Math.random() * 4)) / 10

      return {
        ...sectionWord,
        additionalStyles: {
          ...sectionWord.additionalStyles,
          transitionDelay: `${delay}s`
        }
      }
    }))
  }
}
