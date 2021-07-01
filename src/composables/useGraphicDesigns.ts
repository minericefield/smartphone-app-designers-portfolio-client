import { InjectionKey } from 'vue';

import { CATEGORIES } from '@/helpers/constants'

import { useDesigns } from '@/composables/useDesigns'
import { useDesignsControl } from '@/composables/useDesignsControl'
import { useGraphicDesignsSectionWords } from '@/composables/useGraphicDesignsSectionWords'

export const useGraphicDesigns = () => {
  const { designs, isAvailable, fetch: fetchDesigns } = useDesigns()
  const designsControl = useDesignsControl(designs)
  const { sectionWords } = useGraphicDesignsSectionWords()

  const fetch = () => fetchDesigns(CATEGORIES['GRAPHIC DESIGN'])

  return {
    designs,
    isAvailable,
    sectionWords,

    fetch,

    ...designsControl
  };
};

export type GraphicDesigns = ReturnType<typeof useGraphicDesigns>;

export const GRAPHIC_DESIGNS_KEY: InjectionKey<GraphicDesigns> = Symbol('GraphicDesigns');

export const graphicDesignsDefault = useGraphicDesigns();
