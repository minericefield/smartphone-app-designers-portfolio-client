import {
  DefaultApi,
  Configuration,
  Design
} from 'smartphone-app-designers-portfolio-api-docs/client'
import { ref, computed } from 'vue'

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
      const red = parseInt(design.baseColor.substring(1, 3), 16)
      const green = parseInt(design.baseColor.substring(3, 5), 16)
      const blue = parseInt(design.baseColor.substring(5, 7), 16)
      const alpha = '.5'
      return {
        ...design,
        baseColor: 'rgba(' + Object.values([red, green, blue, alpha]).join(',') +')'
      }
    })
  }

  return {
    designs,
    isAvailable,

    fetch
  }
}
