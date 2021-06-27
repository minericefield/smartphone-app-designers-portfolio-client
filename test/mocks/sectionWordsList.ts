import { MAIN_ROUTE_NAMES } from '@/helpers/constants'

import { SectionWords } from '@/composables/useLeftNav'

export const sectionWordsList: SectionWords[] = [
  {
    routeName: MAIN_ROUTE_NAMES['graphic-designs'],
    sectionWords: [
      {
        word: '',
        additionalStyles: {}
      }
    ],
    baseColor: '',
    isCurrentPage: true
  },
  {
    routeName: MAIN_ROUTE_NAMES['ui-designs'],
    sectionWords: [
      {
        word: '',
        additionalStyles: {}
      }
    ],
    baseColor: '',
    isCurrentPage: false
  }
]