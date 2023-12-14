import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { customFilters, customComponents } from '@/plugins'

import 'bulma/css/bulma.css'

const app = createApp(App)
    .use(router)
    .use(customFilters)
    .use(customComponents)

app.mount('#app')
