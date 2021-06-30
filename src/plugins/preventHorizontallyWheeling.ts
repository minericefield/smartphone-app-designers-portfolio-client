import { App } from 'vue'

export const preventHorizontallyWheeling = (app: App) => {
  app.directive('preventHorizontallyWheeling', {
    beforeMount(element, binding) {
      element.addEventListener('wheel', (event: WheelEvent) => {
        event.stopPropagation()
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
          if (binding.value?.horizontalCallback) {
            binding.value.horizontalCallback(event)
          }
          return event.preventDefault()
        }
        if (binding.value?.verticalCallback) {
          binding.value.verticalCallback(event)
        }
      })
    }
  })

  return app
}
