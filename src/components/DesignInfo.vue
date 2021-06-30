<template>
  <div
    class="design-info"
    v-prevent-horizontally-wheeling
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
        :style="{ transitionDelay: '.3s' }"
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
        :style="{ transitionDelay: '.5s'}"
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
        :style="{ transitionDelay: '.7s' }"
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
    margin-bottom: 0.4rem;
    font-size: 1.8rem;
    color: #fff;
    transition: all 0.4s ease;

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
  opacity: 0;
  transform: translateX(-2.4rem);
}

.design-info_item-fade-right-enter-from {
  opacity: 0;
  transform: translateX(2.4rem);
}

.design-info_item-fade-left-leave-to,
.design-info_item-fade-right-leave-to {
  opacity: 0;
  transform: translateY(0.8rem);
}

.design-info_item-fade-left-leave-active,
.design-info_item-fade-right-leave-active {
  transition-delay: 0s !important;
}
</style>
