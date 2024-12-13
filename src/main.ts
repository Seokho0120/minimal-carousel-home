import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { toast, Toaster } from 'vue-sonner';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(toast);
app.component('Toaster', Toaster);

app.mount('#app');
