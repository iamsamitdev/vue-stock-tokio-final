import { createApp } from 'vue'
// Router
import router from './router/index'

// Tailwind CSS
import './tailwind/app.css'
import './style.css'

// Vue Sweetalert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import App from './App.vue'

const app = createApp(App)
app.use(VueSweetalert2)
app.use(router)
app.mount('#app')
