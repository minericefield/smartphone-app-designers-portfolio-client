<template>
  <div
    class="bg-behind"
  >
    <bg-behind-image :content="content" />
    <bg-rect />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Design, Designer } from 'smartphone-app-designers-portfolio-api-docs/client'

import BgBehindImage from '@/components/BgBehindImage.vue'
import BgRect from '@/components/BgRect.vue'

export default defineComponent({
  name: 'BgBehind',
  components: {
    BgBehindImage,
    BgRect
  },
  props: {
    content: {
      type: Object as PropType<Design | Designer>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.bg-behind {
  width: 100%;
  height: 100%;

  ::v-deep(.bg-rect) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 64%;
  }

  ::v-deep(.bg-behind-image) {
    width: 100%;
    height: 100%;
  }
}
</style>
