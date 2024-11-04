import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)

app.mount('#app');
