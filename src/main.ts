import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { toast, Toaster } from 'vue-sonner';

const app = createApp(App);
app.use(toast);
app.component('Toaster', Toaster);

app.mount('#app');
