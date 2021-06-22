<template>
  <div class="ham-menu">
    <div @click="$emit('on-click')" class="ham-menu_content">
      <div class="ham-menu_content_item first" />
      <div class="ham-menu_content_item second" />
      <div class="ham-menu_content_item third" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ham-menu {
  &_content {
    height: 3.2rem;
    width: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    &_item {
      height: .4rem;
      width: 100%;
      background-color: #9864f6;
      animation-fill-mode: both;
      border-radius: 2rem;
      &.first {
        animation-name: first-fade;
        animation-duration: .4s;
        animation-delay: .3s;
      }
      &.second {
        animation-name: second-fade;
        animation-duration: .4s;
        animation-delay: .4s;
      }
      &.third {
        animation-name: third-fade;
        animation-duration: .6s;
        animation-delay: .3s;
      }
    }
  }
}

@keyframes first-fade {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes second-fade {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 75%;
  }
}
@keyframes third-fade {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 50%;
  }
}
</style>