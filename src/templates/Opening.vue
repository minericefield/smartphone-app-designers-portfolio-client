<template>
  <div class="opening">
    <lottie :options="options" @anim-created="animCreated" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Lottie from 'vue-lottie/src/lottie.vue'
import Promise from 'bluebird'

import opening from '@/assets/opening.json'

export default defineComponent({
  name: 'Opening',
  components: {
    Lottie
  },
  emits: ['on-complete'],
  setup (_, ctx) {
    const options = reactive({
      animationData: opening,
      loop: false
    })

    // No way to catch up the momoent of animation's completion
    const animCreated = async () => {
      await Promise.delay(4900)
      ctx.emit('on-complete')
    }

    return {
      options,

      animCreated
    }
  }
})
</script>

<style lang="scss" scoped>
.opening {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #eee;
}
</style>
