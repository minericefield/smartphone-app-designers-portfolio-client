import {
  DefaultApi,
  Configuration,
  Design
} from 'smartphone-app-designers-portfolio-api-docs/client'
import { ref, computed } from 'vue'

import { changeOpacity } from '@/helpers/colorOpacity'
import { CategoriesValue } from '@/helpers/constants'
import { preloadImage } from '@/helpers/preload'

export const useDesigns = () => {
  const designs = ref<Design[]>([]);
  const isAvailable = computed(() => !!designs.value.length)

  const fetch = async (category: CategoriesValue) => {
    const { designs: designsResponse } = (
      await new DefaultApi(
        new Configuration({ basePath: process.env.VUE_APP_SERVER_HOST }),
      ).fetchDesigns(category)
    ).data
    designsResponse.forEach(design => {
      preloadImage(design.file)
    })
    designs.value = designsResponse.map(design => {
      return {
        ...design,
        baseColor: changeOpacity(design.baseColor)
      }
    })
  }

  return {
    designs,
    isAvailable,

    fetch
  }
}
