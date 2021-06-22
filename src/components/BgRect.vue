<template>
  <canvas
    ref="canvas"
    :width="windowsInnerWidth"
    :height="windowsInnerHeight"
    class="bg-rect"
  />
</template>


<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  nextTick,
  inject,
  watch
} from 'vue'

import { GENERALS_KEY, generalsDefault } from '@/composables/useGenerals'

export default defineComponent({
  name: 'BgRect',
  setup () {
    const canvas = ref<HTMLCanvasElement | null>(null)
    const { windowsInnerWidth, windowsInnerHeight } = inject(GENERALS_KEY, generalsDefault)

    const draw = async () => {
      await nextTick()
      const dpr = window.devicePixelRatio || 1
      if (canvas.value) {
        canvas.value.width *= dpr
        canvas.value.height *= dpr
        const ctx = canvas.value.getContext('2d')
        if (!ctx) return
        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.lineTo(canvas.value.width, 0)
        ctx.lineTo(canvas.value.width, canvas.value.height * 0.75)
        ctx.lineTo(0, canvas.value.height)
        ctx.closePath()
        ctx.fillStyle = "#eee"
        ctx.fill()
      }
    }
    
    onMounted(draw)

    // TODO: Insert call back to generals instead of watch
    watch([windowsInnerWidth, windowsInnerHeight], draw)

    return {
      canvas,
      windowsInnerWidth,
      windowsInnerHeight
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
