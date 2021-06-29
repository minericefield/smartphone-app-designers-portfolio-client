<template>
  <div class="sp-heading">
    <ham-menu @on-click="$emit('on-ham-menu-click')" />
    <img src="../assets/logo.svg" class="sp-heading_logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HamMenu from '@/components/HamMenu.vue'

export default defineComponent({
  name: 'SpHeading',
  components: {
    HamMenu
  }
})
</script>

<style lang="scss" scoped>
.sp-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  // height: 7rem;
  padding: 1.6rem;

  &_logo {
    height: 4rem;
    animation-name: fade;
    animation-duration: 0.6s;
    animation-fill-mode: both;
    animation-delay: 0.2s;
  }
}

@keyframes fade {
  0% {
    height: 4rem;
    opacity: 0;
  }

  50% {
    height: 4.6rem;
    opacity: 1;
  }

  100% {
    height: 4rem;
    opacity: 1;
  }
}
</style>
