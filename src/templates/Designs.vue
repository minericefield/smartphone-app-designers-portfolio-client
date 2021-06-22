<template>
  <div
    class="designs"
    @wheel="slideWheel"
  >
    <bg-behind :content="displayedDesign" />
    <div class="designs_image_wrap">
      <transition :name="`designs_image_wrap-fade-${slideDirection}`">
        <img
          :src="displayedDesign.file"
          :key="'image_' + displayedDesign._id"
          class="designs_image_wrap_image"
        />
      </transition>
    </div>
    <img @click="slide('left')" src="../assets/left.png" class="designs_slide left" />
    <mobile :content="displayedDesign" />
    <img @click="slide('right')" src="../assets/right.png" class="designs_slide right" />
    <design-info
      :design="displayedDesign"
      :slide-direction="slideDirection"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useRoute } from 'vue-router'

import { CATEGORIES } from '@/helpers/constants'

import { graphicDesignsDefault, GRAPHIC_DESIGNS_KEY } from '@/composables/useGraphicDesigns'
import { uiDesignsDefault, UI_DESIGNS_KEY } from '@/composables/useUiDesigns'

import BgBehind from '@/components/BgBehind.vue'
import DesignInfo from '@/components/DesignInfo.vue'
import Mobile from '@/components/Mobile.vue'

export default defineComponent({
  name: 'Designs',
  components: {
    BgBehind,
    DesignInfo,
    Mobile
  },
  setup () {
    const { designs, displayedDesign, slideDirection, slide, slideWheel } = useRoute().meta.category === CATEGORIES['UI DESIGN'] ?
      inject(UI_DESIGNS_KEY, uiDesignsDefault) : 
      inject(GRAPHIC_DESIGNS_KEY, graphicDesignsDefault)

    return {
      designs,
      displayedDesign,
      slideDirection,

      slide,
      slideWheel
    }
  }
})
</script>

<style lang="scss" scoped>
.designs {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ::v-deep(.bg-behind) {
    position: absolute;
    top: 0;
    left: 0;
  }
  &_image_wrap {
    position: absolute;
    top: 17%;
    width: 35vh;
    height: 61.3%;
    overflow: hidden;
    &_image {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      transition: transform .8s ease 0s;
    }
  }
  &_slide {
    height: 5.6%;
    cursor: pointer;
    &.left {
      margin-right: 4.4vh;
    }
    &.right {
      margin-left: 4.4vh;
    }
  }
  ::v-deep(.mobile) {
    height: 78%;
    border-radius: 5vh;
  }
  ::v-deep(.design-info) {
    position: fixed;
    top: 72%;
    left: calc(50vw + 24vh);
    width: 24%;
    max-width: 32%;
    max-height: 18%;
    overflow: auto;
  }
}

.designs_image_wrap-fade-left-enter-from,
.designs_image_wrap-fade-right-leave-to {
  transform: translateX(100%);
}
.designs_image_wrap-fade-right-enter-from,
.designs_image_wrap-fade-left-leave-to {
  transform: translateX(-100%);
}
</style>
