<template>
  <div
    class="maintenance"
  >
    {{ maintenanceMessage }}
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

import { generalsDefault, GENERALS_KEY } from '@/composables/useGenerals'

export default defineComponent({
  name: 'Maintenance',
  setup () {
    const { maintenanceMessage } = inject(GENERALS_KEY, generalsDefault)

    return {
      maintenanceMessage
    }
  }
})
</script>

<style lang="scss" scoped>
.maintenance {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 4rem;
}
</style>
