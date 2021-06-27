import { ref } from 'vue'
import { mount, MountResult } from 'vue-composable-tester'

import { useSectionWords } from '@/composables/useSectionWords'

describe('Use Designs', () => {
  let sectionWords: MountResult<ReturnType<typeof useSectionWords>>

  beforeEach(() => {
    sectionWords = mount(() => useSectionWords(ref([])))
  })

  describe('section words', () => {
    it('all words should have "transitionDelay" for additionalStyles', () => {
      const example = ref([
        {
          word: 'a',
          additionalStyles: {}
        },
        {
          word: 'b',
          additionalStyles: {}
        }
      ])
      sectionWords = mount(() => useSectionWords(example))

      expect(
        sectionWords.result.sectionWords.value.every(
          sectionWord => sectionWord.additionalStyles.transitionDelay
        )
      ).toBeTruthy()
    })
  })
})
