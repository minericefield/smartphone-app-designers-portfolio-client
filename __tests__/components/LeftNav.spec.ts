
import { shallowMount } from '@vue/test-utils'

import { sectionWordsList as sectionWordsListMock } from '../../test/mocks/sectionWordsList'

import LeftNav from '../../src/components/LeftNav.vue'

describe('LeftNav', () => {
  // https://www.reddit.com/r/vuejs/comments/k9d4zv/is_the_type_of_the_argument_to_vuewrapper_a/
  // let wrapper: VueWrapper<any>

  describe('section words list', () => {
    it('section words list should be rendered correctly', () => {
      const wrapper = shallowMount(LeftNav, {
        props: {
          sectionWordsList: sectionWordsListMock,
          transitionOverlayBaseColor: '',
          isTransitionOverlayVisible: false
        }
      })

      expect(wrapper.findAll('section-words-stub')).toHaveLength(sectionWordsListMock.length)
    })
  })
})
