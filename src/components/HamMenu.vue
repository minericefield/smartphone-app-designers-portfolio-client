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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 4rem;
    height: 3.2rem;
    cursor: pointer;

    &_item {
      width: 100%;
      height: 0.4rem;
      background-color: #9864f6;
      border-radius: 2rem;
      animation-fill-mode: both;

      &.first {
        animation-name: first-fade;
        animation-duration: 0.4s;
        animation-delay: 0.3s;
      }

      &.second {
        animation-name: second-fade;
        animation-duration: 0.4s;
        animation-delay: 0.4s;
      }

      &.third {
        animation-name: third-fade;
        animation-duration: 0.6s;
        animation-delay: 0.3s;
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