<template>
  <transition name="sp-nav-overlay-fade" @after-leave="$emit('on-left')" appear>
    <div
      v-if="isVisible"
      class="sp-nav-overlay"
      @touchmove.prevent
    >
      <transition name="sp-nav-overlay_bg-fade" appear>
        <div class="sp-nav-overlay_bg" />
      </transition>
      <div class="sp-nav-overlay_main">
        <div @click="isVisible = false" class="sp-nav-overlay_main_arrow">
          <div class="sp-nav-overlay_main_arrow_item top">
            <div class="sp-nav-overlay_main_arrow_item_line" />
          </div>
          <div class="sp-nav-overlay_main_arrow_item middle">
            <div class="sp-nav-overlay_main_arrow_item_line" />
          </div>
          <div class="sp-nav-overlay_main_arrow_item bottom">
            <div class="sp-nav-overlay_main_arrow_item_line" />
          </div>
        </div>
        <section-words
          v-for="sectionWords in sectionWordsList"
          :key="sectionWords.id"
          :section-words="sectionWords.sectionWords.value"
          @on-click="isVisible = false, $emit('on-section-click', sectionWords.id)"
        />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from 'vue'

import { SectionWords as SectionWordsT } from '@/composables/useSpNavOverlay'

import SectionWords from '@/components/SectionWords.vue'

export default defineComponent({
  name: 'SpNavOverlay',
  components: {
    SectionWords
  },
  props: {
    sectionWordsList: {
      required: true,
      type: Array as PropType<SectionWordsT[]>
    }
  },
  setup () {
    const isVisible = ref(false) // Handle visiblity inside component to tell it's transition event to parent

    onMounted(() => {
      isVisible.value = true
    })

    return {
      isVisible
    }
  }
})
</script>

<style lang="scss" scoped>
.sp-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 199;
  &_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #7C21D7;
    opacity: .4;
  }
  &_main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &_arrow {
      position: absolute;
      top: 2rem;
      left: 2rem;
      width: 5.6rem;
      height: 5.6rem;
      overflow: hidden;
      opacity: .8;
      &_item {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        $this: &;
        &_line {
          position: absolute;
          top: 2.4rem;
          left: 0;
          width: 64%;
          height: .4rem;
          border-radius: 20rem;
          background-color: #fff;

          animation-name: arrow-fade;
          animation-fill-mode: both;
          animation-duration: .2s;
          animation-delay: .6s;
        }
        &.top {
          #{$this}_line {
            transform: rotate(-45deg);
            top: .6rem;
            left: -.8rem;
          }
        }
        &.middle {
          #{$this}_line {
            width: 80%;
            animation-delay: .4s;
          }
        }
        &.bottom {
          #{$this}_line {
            transform: rotate(45deg);
            top: 4.4rem;
            left: -.8rem;
          }
        }
      }
    }
    ::v-deep(.section-words) {
      padding: 3.2rem 0 7.2rem;
      .section-words_word {
        color: #fff;
      }
    }
  }
}

.sp-nav-overlay-fade-enter-from,
.sp-nav-overlay-fade-leave-to {
  transform: translateX(-100%);
}
.sp-nav-overlay-fade-enter-active,
.sp-nav-overlay-fade-leave-active {
  transition: transform .4s ease;
}

.sp-nav-overlay_bg-fade-enter-from {
  opacity: 0;
}
.sp-nav-overlay_bg-fade-enter-active {
  transition: opacity .4s ease;
}
.sp-nav-overlay_bg-fade-enter-to {
  opacity: .4;
}

@keyframes arrow-fade {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>