<template>
  <main
    class="main"
    v-prevent-horizontally-wheeling
  >
    <router-view v-slot="{ Component }">
      <transition name="main_content-fade" appear>
        <component :is="Component" :key="route.name" />
      </transition>
    </router-view>
    <left-nav
      :section-words-list="sectionWordsList"
      :transition-overlay-base-color="transitionOverlayBaseColor"
      :is-transition-overlay-visible="isTransitionOverlayVisible"
      @on-section-click="prepareTransition"
      @on-transition-overlay-enter="transit"
      @on-transition-overlay-after-enter="isTransitionOverlayVisible = false"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useRoute } from 'vue-router'

import { graphicDesignsDefault, GRAPHIC_DESIGNS_KEY } from '@/composables/useGraphicDesigns'
import { uiDesignsDefault, UI_DESIGNS_KEY } from '@/composables/useUiDesigns'
import { designerDefault, DESIGNER_KEY } from '@/composables/useDesigner'
import { useLeftNav } from '@/composables/useLeftNav'

import LeftNav from '@/components/LeftNav.vue'

export default defineComponent({
  name: 'Main',
  components: {
    LeftNav
  },
  setup () {
    const graphicDesigns = inject(GRAPHIC_DESIGNS_KEY, graphicDesignsDefault)
    const uiDesigns = inject(UI_DESIGNS_KEY, uiDesignsDefault)
    const designer = inject(DESIGNER_KEY, designerDefault)
    const {
      sectionWordsList,
      isTransitionOverlayVisible,
      transitionOverlayBaseColor,
      prepareTransition,
      transit
    } = useLeftNav(
      graphicDesigns,
      uiDesigns,
      designer
    )
    const route = useRoute()

    return {
      sectionWordsList,
      isTransitionOverlayVisible,
      transitionOverlayBaseColor,
      route,

      prepareTransition,
      transit
    }
  }
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;

  ::v-deep(.left-nav) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
}

.main_content-fade-enter-from {
  opacity: 0;
}

.main_content-fade-enter-active {
  transition: opacity 0.4s ease 0.4s;
}

.main_content-fade-leave-active {
  transition-delay: 0.4s;
}
</style>
