<template>
  <div class="app">
    <opening
      v-if="isOpeningVisible"
      @on-complete="onOpeningComplete"
    />

    <template
      v-else-if="[graphicDesigns, uiDesigns, designer].every(content => content.isAvailable.value)"
    >
      <router-view v-if="!generals.shouldHandleAsSp.value" key="main" />
      <sp v-else key="sp" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useGenerals, GENERALS_KEY } from '@/composables/useGenerals'
import { useGraphicDesigns, GRAPHIC_DESIGNS_KEY } from '@/composables/useGraphicDesigns'
import { useUiDesigns, UI_DESIGNS_KEY } from '@/composables/useUiDesigns'
import { useDesigner, DESIGNER_KEY } from '@/composables/useDesigner'
import { useOpening } from '@/composables/useOpening'

import Opening from '@/templates/Opening.vue'
import Sp from '@/views/Sp.vue'

export default defineComponent({
  name: 'App',
  components: {
    Opening,
    Sp
  },
  setup () {
    const generals = useGenerals()
    generals.registerRouteNav(useRouter())
    provide(GENERALS_KEY, generals)
    const graphicDesigns = useGraphicDesigns()
    provide(GRAPHIC_DESIGNS_KEY, graphicDesigns)
    const uiDesigns = useUiDesigns()
    provide(UI_DESIGNS_KEY, uiDesigns)
    const designer = useDesigner()
    provide(DESIGNER_KEY, designer)
    const { isOpeningVisible, onOpeningComplete } = useOpening(generals)

    // Prefetch for smooth transition
    graphicDesigns.fetch()
    uiDesigns.fetch()
    designer.fetch()

    onMounted(() => {
      generals.initialize()
      window.addEventListener('resize', generals.initialize) // For browser debugger, changing userAgent. Actually updateWindowsInnerSize is enough
    })

    return {
      generals,
      graphicDesigns,
      uiDesigns,
      designer,
      isOpeningVisible,

      onOpeningComplete
    }
  }
})
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>
