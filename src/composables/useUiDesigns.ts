import { InjectionKey } from 'vue'

import { CATEGORIES } from '@/helpers/constants'

import { useDesigns } from '@/composables/useDesigns'
import { useDesignsControl } from '@/composables/useDesignsControl'
import { useUiDesignsSectionWords } from '@/composables/useUiDesignsSectionWords'

export const useUiDesigns = () => {
  const { designs, isAvailable, fetch: fetchDesigns } = useDesigns()
  const designsControl = useDesignsControl(designs)
  const { sectionWords } = useUiDesignsSectionWords()

  const fetch = () => fetchDesigns(CATEGORIES['UI DESIGN'])

  return {
    designs,
    isAvailable,
    sectionWords,

    fetch,

    ...designsControl
  };
};

export type UiDesigns = ReturnType<typeof useUiDesigns>;

export const UI_DESIGNS_KEY: InjectionKey<UiDesigns> = Symbol('UiDesigns');

export const uiDesignsDefault = useUiDesigns();
