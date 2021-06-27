<template>
  <div
    class="design-info"
    @wheel.stop
  >
    <transition
      :name="`design-info_item-fade-${slideDirection}`"
      mode="out-in"
    >
      <div
        :key="`title-heading_${design._id}`"
        :style="{ transitionDelay: '.1s' }"
        class="design-info_item title-heading"
      >
        {{ design.titleHeading }}
      </div>
    </transition>
    <transition
      :name="`design-info_item-fade-${slideDirection}`"
      mode="out-in"
    >
      <div
        :key="`title_${design._id}`"
        :style="{ transitionDelay: '.2s' }"
        class="design-info_item title"
      >
        {{ design.title }}
      </div>
    </transition>
    <transition
      :name="`design-info_item-fade-${slideDirection}`"
      mode="out-in"
    >
      <div
        :key="`description-heading_${design._id}`"
        :style="{ transitionDelay: '.3s'}"
        class="design-info_item description-heading"
      >
        {{ design.descriptionHeading }}
      </div>
    </transition>
    <transition
      :name="`design-info_item-fade-${slideDirection}`"
      mode="out-in"
    >
      <div
        :key="'description_'  + design._id"
        :style="{ transitionDelay: '.4s' }"
        class="design-info_item description"
      >
        {{ design.description }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Design } from 'smartphone-app-designers-portfolio-api-docs/client'

export default defineComponent({
  name: 'DesignInfo',
  props: {
    design: {
      type: Object as PropType<Design>,
      required: true
    },
    slideDirection: {
      type: String,
      required: true
    }
  }
})
</script>


<style lang="scss" scoped>
.design-info {
  overflow: auto;
  &_item {
    width: 100%;
    margin-bottom: .4rem;
    color: #fff;
    font-size: 1.8rem;
    transition: all .4s ease;
    &.title {
      font-size: 2.8rem;
      font-weight: bold;
    }
    &.description {
      margin-bottom: 0;
    }
  }
}

.design-info_item-fade-left-enter-from {
  transform: translateX(-2.4rem);
  opacity: 0;
}
.design-info_item-fade-right-enter-from {
  transform: translateX(2.4rem);
  opacity: 0;
}
.design-info_item-fade-left-leave-to,
.design-info_item-fade-right-leave-to {
  transform: translateY(.4rem);
  opacity: 0;
}
</style>
