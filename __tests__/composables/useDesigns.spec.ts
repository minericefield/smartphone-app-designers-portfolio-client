import axios from 'axios'
import { mount, MountResult } from 'vue-composable-tester'

import { designs as designsMock } from '../../test/mocks/designs'

import { CATEGORIES } from '@/helpers/constants'

import { useDesigns } from '../../src/composables/useDesigns'

jest.mock('axios');

(axios.request as any).mockResolvedValue({ data: { designs: designsMock } })

describe('Use Designs', () => {
  let designs: MountResult<ReturnType<typeof useDesigns>>

  beforeEach(() => {
    designs = mount(() => useDesigns())
  })

  describe('before fetch', () => {
    it('designs should be empty', () => {
      expect(designs.result.designs.value).toHaveLength(0)
    })
    it('isAvailable should be falsy', () => {
      expect(designs.result.isAvailable.value).toBeFalsy()
    })
  })

  describe('after fetch', () => {
    it('designs should have the same length as mock', async () => {
      await designs.result.fetch(CATEGORIES['UI DESIGN'])
      expect(designs.result.designs.value).toHaveLength(designsMock.length)
    })
    it('isAvailable should be truthy', async () => {
      await designs.result.fetch(CATEGORIES['UI DESIGN'])
      expect(designs.result.isAvailable.value).toBeTruthy()
    })
  })
})
