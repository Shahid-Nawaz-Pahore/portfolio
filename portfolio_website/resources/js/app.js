import './bootstrap';
import router from './router/index.js'
import {createApp} from 'vue'
import app from './components/app.vue'
createApp(app).use(router).mount("#app")
