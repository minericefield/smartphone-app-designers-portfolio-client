<template>
  <div class="sp-designer">
    <section-words
      :section-words="sectionWords"
    />
    <sp-designer-slick
      :designer="designer"
      :id="slickId"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Designer } from 'smartphone-app-designers-portfolio-api-docs/client'

import { SectionWord } from '@/types/SectionWord'

import SectionWords from '@/components/SectionWords.vue'
import SpDesignerSlick from '@/components/SpDesignerSlick.vue'

export default defineComponent({
  name: 'SpDesigner',
  components: {
    SectionWords,
    SpDesignerSlick
  },
  props: {
    sectionWords: {
      type: Array as PropType<SectionWord[]>,
      required: true
    },
    designer: {
      type: Object as PropType<Designer>,
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
.sp-designer {
  ::v-deep(.section-words) {
    padding: 3.2rem 0 7.2rem;
  }
}
</style>
