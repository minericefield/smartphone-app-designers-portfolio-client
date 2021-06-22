<template>
  <div
    class="left-nav"
  >
    <section-words
      v-for="sectionWords in sectionWordsList"
      :key="sectionWords.routeName"
      :section-words="sectionWords.sectionWords.value"
      @on-click="$emit('on-section-click', sectionWords.routeName)"
    />

    <teleport to="#overlay-1">
      <transition
        name="left-nav_transition-overlay-fade"
        @enter="$emit('on-transition-overlay-enter')"
        @after-enter="$emit('on-transition-overlay-after-enter')"
      >
        <div
          v-if="isTransitionOverlayVisible"
          class="left-nav_transition-overlay"
          :style="{ backgroundColor: transitionOverlayBaseColor.replace('.5', '1') }"
        />
      </transition>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { SectionWords as SectionWordsT } from '@/composables/useLeftNav'

import SectionWords from '@/components/SectionWords.vue'

export default defineComponent({
  name: 'LeftNav',
  components: {
    SectionWords
  },
  props: {
    sectionWordsList: {
      required: true,
      type: Array as PropType<SectionWordsT[]>
    },
    transitionOverlayBaseColor: {
      required: true,
      type: String
    },
    isTransitionOverlayVisible: {
      required: true,
      type: Boolean
    }
  }
})
</script>

<style lang="scss" scoped>
.left-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;
  ::v-deep(.section-words) {
    margin-bottom: 8rem;
    justify-content: flex-start;
    cursor: pointer;
  }
  &_transition-overlay {
    position: fixed;
    top: -160%;
    left: 0;
    width: 100%;
    height: 160%;
  }
}
.left-nav_transition-overlay-fade-enter-from {
  opacity: .4;
  transform: translateY(320%);
}
.left-nav_transition-overlay-fade-leave-to {
  opacity: 0;
}
.left-nav_transition-overlay-fade-enter-active {
  transition: transform ease .8s 0s, opacity ease-in .4s 0s;
}
.left-nav_transition-overlay-fade-leave-active {
  transition: opacity ease .4s 0s;
}
</style>
