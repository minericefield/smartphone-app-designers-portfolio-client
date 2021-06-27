<template>
  <div
    class="section-words"
    @click="$emit('on-click')"
  >
    <transition-group name="section-words_word-fade" appear>
      <p
        v-for="(sectionWord, index) in sectionWords"
        :key="`${sectionWord.word}_${index}`"
        :style="sectionWord.additionalStyles"
        class="section-words_word"
      >
        {{ sectionWord.word }}
      </p>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { SectionWord } from '@/types/SectionWord'

export default defineComponent({
  name: 'SectionWords',
  props: {
    sectionWords: {
      type: Array as PropType<SectionWord[]>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.section-words {
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  &_word {
    color: rgba(0, 0, 0, .7);
    font-size: 3.2rem;
  }
}

.section-words_word-fade-enter-from {
  opacity: 0;
  transform: translateY(-1.2rem)
}
.section-words_word-fade-enter-active {
  transition: opacity .4s ease .1s, transform .4s ease .1s;
}
</style>
