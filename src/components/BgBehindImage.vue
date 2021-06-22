<template>
  <div
    class="bg-behind-image"
  >
    <transition
      name="bg-behind-image-fade"
      appear
    >
      <img
        :src="content.file"
        :key="`file_${content._id}`"
        class="bg-behind-image_file"
      />
    </transition>
    <transition
      name="bg-behind-image-fade"
    >
      <div
        class="bg-behind-image_screen"
        :style="{ backgroundColor: content.baseColor }"
        :key="`screen_${content._id}`"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Design, Designer } from 'smartphone-app-designers-portfolio-api-docs/client'

export default defineComponent({
  name: 'BgBehindImage',
  props: {
    content: {
      type: Object as PropType<Design | Designer>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.bg-behind-image {
  &_file {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 100%;
    filter: blur(.2rem);
    transform: scale(4);
  }
  &_screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.bg-behind-image-fade-enter-from,
.bg-behind-image-fade-leave-to {
  opacity: 0;
}
.bg-behind-image-fade-enter-active,
.bg-behind-image-fade-leave-active {
  transition: opacity .8s ease 0s;
}
</style>
