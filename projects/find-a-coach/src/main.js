import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

//GLOBAL COMPONENTS
import BaseCard from './views/ui/BaseCard.vue';
import BaseButton from './views/ui/BaseButton.vue';
import BaseBadge from './views/ui/BaseBadge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
