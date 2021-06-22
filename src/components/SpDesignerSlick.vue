<template>
  <transition name="sp-designer-slick-fade" appear>
    <div class="sp-designer-slick" :id="id">
      <div
        class="sp-designer-slick_item"
        :style="{
          boxShadow : `.4rem .4rem .8rem 0 ${designer.baseColor}`
        }"
      >
        <img
          :src="designer.file"
          class="sp-designer-slick_item_content file"
        />
        <p class="sp-designer-slick_item_content name">
          {{ designer.name }}
        </p>
        <p class="sp-designer-slick_item_content email">
          <a
            :href="`mailto:${designer.email}`"
            :style="{ color: designer.baseColor }"
          >
            <mail :color="designer.baseColor" />
            {{ designer.email }}
          </a>
        </p>
        <p class="sp-designer-slick_item_content description-heading">
          {{ designer.descriptionHeading }}
        </p>
        <p class="sp-designer-slick_item_content description">
          {{ designer.description }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script lang="js">
// ----- vue-slick not available in vue3 -----
// TODO: change to vue3-carousel when the problem of wrap-around solved or vue-slick when it'll be available in vue3
import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
// ----- vue-slick not available in vue3 -----

import Mail from '@/components/Mail.vue'

import { defineComponent, onMounted, nextTick } from 'vue'

export default defineComponent({
  name: 'SpDesignerSlick',
  components: {
    Mail
  },
  props: {
    designer: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  setup (props) {
    onMounted(async () => {
      await nextTick()

      const slick = $(`#${props.id}`)

      slick.slick({
        arrows: false,
        centerMode: true,
        centerPadding: '6rem',
        slidesToShow: 1,
        autoplay: false,
        pauseonhover: true,
        responsive: [
          {
            breakpoint: 420,
            settings: {
              centerPadding: '6.4rem'
            }
          },
          {
            breakpoint: 500,
            settings: {
              centerPadding: '12rem'
            }
          },
          {
            breakpoint: 721,
            settings: {
              centerPadding: '16rem'
            }
          },
          {
            breakpoint: 800,
            settings: {
              centerPadding: '12rem'
            }
          },
          {
            breakpoint: 900,
            settings: {
              centerPadding: '16rem'
            }
          },
          {
            breakpoint: 1025,
            settings: {
              centerPadding: '20rem'
            }
          }
        ]
      });
    })
  }
})
</script>

<style lang="scss" scoped>
.sp-designer-slick {
  transition: all 1.2s ease .1s;
  &_item {
    position: relative;
    padding: 1.6rem;
    border-radius: 2rem;
    background-color: #fff;
    &_content {
      margin-bottom: .4rem;
      text-align: center;
      font-size: 1.4rem;
      &.file {
        width: 64%;
        margin: 0 auto;
        margin-bottom: 1.6rem;
        border-radius: 100%;
      }
      &.name {
        font-size: 2rem;
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
        font-size: 1.2rem;
        color: rgba(0, 0, 0, .6);
      }
    }
  }
  ::v-deep(.slick-track) {
    transform: translate3d(0, 0, 0) !important;
  }
}

.sp-designer-slick-fade-enter-from {
  opacity: 0;
}
</style>
