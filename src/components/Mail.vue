<template>
  <svg class="mail-icon" width="15" height="11" viewBox="0 0 15 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>icn_mail</title>
    <desc>Created with Sketch.</desc>
    <g id="【デザイン】これ使ってください" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-643.000000, -391.000000)" :stroke="color">
            <g transform="translate(520.000000, 120.000000)">
                <g id="画面" transform="translate(30.000000, 60.000000)">
                    <g id="mail" transform="translate(94.000000, 210.000000)">
                        <g id="icn_mail" transform="translate(0.000000, 2.000000)">
                            <path d="M11.5151,8.508 L1.2891,8.508 C0.7151,8.508 0.2501,8.043 0.2501,7.469 L0.2501,1.289 C0.2501,0.715 0.7151,0.25 1.2891,0.25 L11.5151,0.25 C12.0891,0.25 12.5541,0.715 12.5541,1.289 L12.5541,7.469 C12.5541,8.043 12.0891,8.508 11.5151,8.508 Z" id="Stroke-1"></path>
                            <path d="M12.254,0.4003 L6.967,5.6873 C6.655,5.9993 6.149,5.9993 5.837,5.6873 L0.654,0.5043" id="Stroke-3"></path>
                            <path d="M8.34665,4.33975 L12.30965,8.30225" id="Stroke-5"></path>
                            <path d="M0.6817,8.1154 L4.3812,4.4159" id="Stroke-7"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Mail',
  props: {
    color: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
