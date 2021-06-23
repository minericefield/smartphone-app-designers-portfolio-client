<template>
  <transition name="sp-designs-slick-fade" appear>
    <div class="sp-designs-slick" :id="id">
      <div
        v-for="design in designs"
        :key="design._id"
        class="sp-designs-slick_item"
      >
        <img
          :src="design.file"
          :style="{
            boxShadow : `.4rem .4rem .8rem 0 ${design.baseColor}`
          }"
          class="sp-designs-slick_item_file"
        />
        <div
          class="sp-designs-slick_item_info"
          :style="{ backgroundColor: design.baseColor }"
        >
          <div
            :key="`info_${design._id}`"
            class="sp-designs-slick_item_info_texts"
          >
            <div class="sp-designs-slick_item_info_texts_item title-heading">
              {{ design.titleHeading }}
            </div>
            <div class="sp-designs-slick_item_info_texts_item title">
              {{ design.title }}
            </div>
          </div>
        </div>
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

import { defineComponent, onMounted, nextTick } from 'vue'

export default defineComponent({
  name: 'SpDesignsSlick',
  props: {
    designs: {
      type: Array,
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
        centerPadding: '6.4rem',
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
.sp-designs-slick {
  transition: all 1.2s ease .1s;
  &_item {
    position: relative;
    border-radius: 2rem;
    &_file {
      width: 100%;
      border-radius: 2rem;
    }
    &_info {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 32%;
      border-radius: 0 0 2rem 2rem;
      overflow: auto;
      opacity: 0;
      transform: translateY(.8rem);
      transition: opacity .4s ease .2s, transform .4s ease .1s;
      &_texts {
        padding: .4rem;
        &_item {
          color: #fff;
          &.title-heading {
            font-size: 1.4rem;
          }
          &.title {
            font-size: 2rem;
          }
        }
      }
    }
  }
}

.sp-designs-slick-fade-enter-from {
  opacity: 0;
}
</style>
