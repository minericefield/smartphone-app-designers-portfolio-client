<template>
  <div
    class="designer"
  >
    <bg-behind :content="designer" />
    <mobile :content="designer" />
    <div class="designer_content">
      <img
        class="designer_content_item file"
        :src="designer.file"
      />
      <p class="designer_content_item name">
        {{ designer.name }}
      </p>
      <p class="designer_content_item email">
        <a
          :href="`mailto:${designer.email}`"
          :style="{ color: designer.baseColor }"
        >
          <mail :color="designer.baseColor" />
          {{ designer.email }}
        </a>
      </p>
      <p class="designer_content_item description-heading">
        {{ designer.descriptionHeading }}
      </p>
      <p class="designer_content_item description">
        {{ designer.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

import { designerDefault, DESIGNER_KEY } from '@/composables/useDesigner'

import BgBehind from '@/components/BgBehind.vue'
import Mobile from '@/components/Mobile.vue'
import Mail from '@/components/Mail.vue'

export default defineComponent({
  name: 'Designs',
  components: {
    BgBehind,
    Mobile,
    Mail
  },
  setup () {
    const { designer } = inject(DESIGNER_KEY, designerDefault)

    return {
      designer
    }
  }
})
</script>

<style lang="scss" scoped>
.designer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ::v-deep(.bg-behind) {
    position: absolute;
    top: 0;
    left: 0;
  }
  &_content {
    position: absolute;
    top: 17%;
    width: 35vh;
    height: 61.3%;
    padding: 2rem;
    overflow: auto;
    &_item {
      margin-bottom: 1rem;
      text-align: center;
      font-size: 2rem;
      &.file {
        display: block;
        width: 64%;
        margin: 0 auto;
        margin-bottom: 2rem;
        border-radius: 100%;
      }
      &.name {
        font-size: 3.2rem;
        color: rgba(0, 0, 0, .8);
        word-break: break-word;
      }
      &.email {
        ::v-deep(.mail) {
          margin-top: .4rem; // TODO: Fix svg
          vertical-align: middle;
        }
      }
      &.description-heading,
      &.description {
        text-align: left;
        word-break: break-word;
        color: rgba(0, 0, 0, .6);
      }
      &.description {
        font-size: 1.4rem;
        color: rgba(0, 0, 0, .6);
      }
    }
  }
  ::v-deep(.mobile) {
    height: 78%;
    border-radius: 5vh;
  }
}
</style>
