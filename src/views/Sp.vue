<template>
  <transition name="sp-fade" appear>
    <div class="sp">
      <sp-heading
        @on-ham-menu-click="openNav"
        :class="{
          'blured': isNavVisible,
          'blur-released': (didNavLeave && !isNavVisible)
        }"
      />
      <div
        class="sp_contents"
        :class="{
          'blured': isNavVisible,
          'blur-released': (didNavLeave && !isNavVisible)
        }"
      >
        <div class="sp_contents_main" id="sp_contents_main">
          <sp-designs
            :section-words="graphicDesigns.sectionWords.value"
            :designs="graphicDesigns.designs.value"
            slick-id="sp-designs-slick_graphic"
            :id="ids.graphicDesigns"
          />
          <sp-designs
            :section-words="uiDesigns.sectionWords.value"
            :designs="uiDesigns.designs.value"
            slick-id="sp-designs-slick_ui"
            :id="ids.uiDesigns"
          />
          <sp-designer
            :section-words="designer.sectionWords.value"
            :designer="designer.designer"
            slick-id="sp-designer-slick_graphic"
            :id="ids.designer"
          />
        </div>
      </div>

      <teleport to="#overlay-1">
        <sp-nav-overlay
          v-if="isNavVisible"
          :section-words-list="sectionWordsList"
          @on-left="isNavVisible = false, didNavLeave = true"
          @on-section-click="scrollToTheSection(`#${$event}`)"
        />
      </teleport>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue'

import { graphicDesignsDefault, GRAPHIC_DESIGNS_KEY } from '@/composables/useGraphicDesigns'
import { uiDesignsDefault, UI_DESIGNS_KEY } from '@/composables/useUiDesigns'
import { designerDefault, DESIGNER_KEY } from '@/composables/useDesigner'
import { useSpNavOverlay } from '@/composables/useSpNavOverlay'

import SpHeading from '@/components/SpHeading.vue'
import SpDesigns from '@/components/SpDesigns.vue'
import SpDesigner from '@/components/SpDesigner.vue'
import SpNavOverlay from '@/components/SpNavOverlay.vue'

export default defineComponent({
  name: 'Sp',
  components: {
    SpHeading,
    SpDesigns,
    SpDesigner,
    SpNavOverlay
  },
  setup () {
    const graphicDesigns = inject(GRAPHIC_DESIGNS_KEY, graphicDesignsDefault)
    const uiDesigns = inject(UI_DESIGNS_KEY, uiDesignsDefault)
    const designer = inject(DESIGNER_KEY, designerDefault)
    const ids = reactive({
      graphicDesigns: 'sp-designer_graphic-designs',
      uiDesigns: 'sp-designer_ui-designs',
      designer: 'sp-designer_designer'
    })
    const { sectionWordsList, isNavVisible, didNavLeave, openNav, scrollToTheSection } = useSpNavOverlay(
      graphicDesigns,
      uiDesigns,
      designer,
      ids
    )
    

    return {
      graphicDesigns,
      uiDesigns,
      designer,
      isNavVisible,
      didNavLeave,
      sectionWordsList,
      ids,

      openNav,
      scrollToTheSection
    }
  }
})
</script>

<style lang="scss" scoped>
@mixin blured() {
  animation-name: blured;
  animation-fill-mode: forwards;
  animation-duration: .6s;
  animation-delay: .1s;
}
@mixin blur-released() {
  animation-name: blur-released;
  animation-fill-mode: backwards;
  animation-duration: .2s;
}

.sp {
  ::v-deep(.sp-heading) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    overflow-x: hidden;
    &.blured {
      .ham-menu {
        @include blured(); 
      }
    }
    &.blur-released {
      .ham-menu {
        @include blur-released(); 
      }
    }
  }
  &_contents {
    &.blured {
      @include blured(); 
      overflow: hidden;
    }
    &.blur-released {
      @include blur-released(); 
    }
    &_main {
      margin-top: 7.2rem;
      padding-bottom: 7.2rem;
      overflow-x: hidden;
      ::v-deep(.sp-designs, .sp-designer) {
        margin-bottom: 4rem;
      }
    }
  }
}

.sp-fade-enter-from {
  opacity: 0;
  // transform: scale(.9);
}
.sp-fade-enter-active {
  transition: opacity .6s ease 0s;
}

@keyframes blured {
  100% {
    filter: blur(.8rem);
  }
}
@keyframes blur-released {
  0% {
    filter: blur(.8rem);
  }
  100% {
    filter: blur(0);
  }
}
</style>
