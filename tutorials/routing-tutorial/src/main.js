import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList }, // our-domains.com/temas
    { path: '/users', component: UsersList },
    { path: '/teams/new' },
    { path: '/teams/:teamId', component: TeamMembers }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'router-link-exact-active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
