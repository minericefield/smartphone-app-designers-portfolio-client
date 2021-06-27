<template>
  <div class="mobile">
    <img src="../assets/mobile.png" class="mobile_image" />
    <transition name="mobile_shadow-fade">
      <div
        class="mobile_shadow"
        :key="`mobile_shadow_${content._id}`"
        :style="style"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'

import { Design, Designer } from 'smartphone-app-designers-portfolio-api-docs/client'

export default defineComponent({
  name: 'Mobile',
  props: {
    content: {
      type: Object as PropType<Design | Designer>,
      required: true
    }
  },
  setup (props) {
    const style = computed(() => {
      return {
        boxShadow : '0 2.4rem 3.2rem .4rem ' + props.content.baseColor
      }
    })

    return {
      style
    }
  }
})
</script>

<style lang="scss" scoped>
.mobile {
  &_image {
    height: 100%;
    border-radius: inherit;
  }
  &_shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
}

.mobile_shadow-fade-enter-from,
.mobile_shadow-fade-leave-to {
  opacity: .1;
}
.mobile_shadow-fade-enter-active,
.mobile_shadow-fade-leave-active {
  transition: opacity .4s ease;
}
</style>