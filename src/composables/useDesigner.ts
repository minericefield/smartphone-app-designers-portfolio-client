import {
  DefaultApi,
  Configuration,
  Designer as DesignerResponse
} from 'smartphone-app-designers-portfolio-api-docs/client'
import { reactive, computed, InjectionKey } from 'vue'

import { preloadImage } from '@/helpers/preload'
import { useDesignerSectionWords } from '@/composables/useDesignerSectionWords'

export const useDesigner = () => {
  const designer = reactive<DesignerResponse>({
    _id: '',
    name: '',
    email: '',
    descriptionHeading: '',
    description: '',
    file: '',
    baseColor: ''
  })
  const isAvailable = computed(() => !!designer.file)
  const { sectionWords } = useDesignerSectionWords()

  const fetch = async () => {
    const { designer: designerResponse } = (
      await new DefaultApi(
        new Configuration({ basePath: process.env.VUE_APP_SERVER_HOST }),
      ).fetchDesigner()
    ).data;
    preloadImage(designer.file);

    (Object.keys(designerResponse) as (keyof DesignerResponse)[]).forEach((key) => {
      designer[key] = designerResponse[key]
    })
  } 

  return {
    designer,
    isAvailable,
    sectionWords,

    fetch
  }
}

export type Designer = ReturnType<typeof useDesigner>;

export const DESIGNER_KEY: InjectionKey<Designer> = Symbol('Designer');

export const designerDefault = useDesigner();
