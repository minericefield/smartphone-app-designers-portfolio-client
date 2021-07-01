<template>
  <section class="sp-designs">
    <section-words
      :section-words="sectionWords"
    />
    <sp-designs-slick
      :designs="designs"
      :id="slickId"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Design } from 'smartphone-app-designers-portfolio-api-docs/client'

import { SectionWord } from '@/types/SectionWord'

import SectionWords from '@/components/SectionWords.vue'
import SpDesignsSlick from '@/components/SpDesignsSlick.vue'

export default defineComponent({
  name: 'SpDesigns',
  components: {
    SectionWords,
    SpDesignsSlick
  },
  props: {
    sectionWords: {
      type: Array as PropType< SectionWord[]>,
      required: true
    },
    designs: {
      type: Array as PropType<Design[]>,
      required: true
    },
    slickId: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.sp-designs {
  ::v-deep(.section-words) {
    padding: 3.2rem 0 7.2rem;
  }
}
</style>
