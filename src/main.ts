import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './plugins/styles'
import { preventHorizontallyWheeling } from './plugins/preventHorizontallyWheeling'

createApp(App).use(store).use(router).use(preventHorizontallyWheeling).mount('#app')
