import { MAIN_ROUTE_NAMES } from '../../src/helpers/constants'

import { SectionWords } from '../../src/composables/useLeftNav'

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