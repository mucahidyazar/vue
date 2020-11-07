import { createApp } from 'vue';
import App from './App.vue';

import BaseCard from './views/ui/BaseCard';
import BaseButton from './views/ui/BaseButton';
import BaseDialog from './views/ui/BaseDialog';
import TheHeader from './views/layouts/TheHeader';

const app = createApp(App);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-dialog', BaseDialog);
app.component('the-header', TheHeader);

app.mount('#app');
