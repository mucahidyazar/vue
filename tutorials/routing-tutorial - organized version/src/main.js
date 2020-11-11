import { createApp } from 'vue';

import App from './App.vue';
import rotuer from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
