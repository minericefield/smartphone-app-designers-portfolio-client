<template>
  <nav
    class="left-nav"
  >
    <div
      v-for="sectionWords in sectionWordsList"
      :key="sectionWords.routeName"
      class="left-nav_sections"
      @click="$emit('on-section-click', sectionWords.routeName)"
    >
      <section-words
        :section-words="sectionWords.sectionWords"
        :class="{ current: sectionWords.isCurrentPage }"
      />
      <transition name="left-nav_sections_line-fade" appear>
        <div
          v-show="sectionWords.isCurrentPage"
          class="left-nav_sections_line"
        />
      </transition>
    </div>

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
  </nav>
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

  &_sections {
    align-self: flex-start;
    margin-bottom: 8rem;

    ::v-deep(.section-words) {
      padding: 0 1rem;

      &.current {
        cursor: initial;
      }
    }

    &_line {
      position: absolute;
      top: 50%;
      width: 100%;
      height: 3px;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 100%;
    }
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
  opacity: 0.4;
  transform: translateY(320%);
}

.left-nav_transition-overlay-fade-leave-to {
  opacity: 0;
}

.left-nav_transition-overlay-fade-enter-active {
  transition: transform 0.8s ease, opacity 0.4s ease-in;
}

.left-nav_transition-overlay-fade-leave-active {
  transition: opacity 0.4s ease;
}

.left-nav_sections_line-fade-enter-from,
.left-nav_sections_line-fade-leave-to {
  transform: scaleX(0);
}

.left-nav_sections_line-fade-enter-active,
.left-nav_sections_line-fade-leave-active {
  transition: transform 0.4s ease 0.8s;
}

.left-nav_sections_line-fade-leave-active {
  transition-delay: 0s;
}
</style>
