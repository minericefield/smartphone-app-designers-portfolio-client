import { Design } from 'smartphone-app-designers-portfolio-api-docs/client'
import { ref, computed, Ref } from 'vue'

export const useDesignsControl = (designs: Ref<Design[]>) => {
  const slideDirection = ref('')
  const displayedDesignIndex = ref(0)
  const displayedDesign =  computed(() => designs.value[displayedDesignIndex.value])

  let lastSlideMoment = 0 // Fow wheeling. May be better to prevent multiple firing with lodash debounce
  const interval = 1280
  const slide = (direction: 'left' | 'right') => {
    const now = new Date().getTime()
    if (now - lastSlideMoment < interval) return

    slideDirection.value = direction

    if (direction === 'left') {
      if (displayedDesignIndex.value === 0) {
        displayedDesignIndex.value = designs.value.length - 1
      } else {
        displayedDesignIndex.value--
      }
    }

    if (direction === 'right') {
      if (displayedDesignIndex.value === designs.value.length - 1) {
        displayedDesignIndex.value = 0
      } else {
        displayedDesignIndex.value++
      }
    }

    lastSlideMoment = now
  }

  const slideWheel = (event: WheelEvent) => {
    if (event.deltaX > 0) {
      slide('right')
    } else {
      slide('left')
    }
  }


  return {
    slideDirection,
    displayedDesignIndex,
    displayedDesign,

    slide,
    slideWheel
  }
}
