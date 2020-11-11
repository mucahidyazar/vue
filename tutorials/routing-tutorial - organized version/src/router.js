import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersList from './pages/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-member',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, //teams/t1
      ],
    }, // our-domains.com/temas
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        next();
      },
    },
    { path: '/teams/new' },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'router-link-exact-active',
  scrollBehavior(_, _2, savePosition) {
    if (savePosition) {
      return savePosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  }
  console.log('Global beforeEach');
  console.log(to, from, next);
  if (to.name === 'team-member') {
    next();
  } else {
    next({ name: 'team-member', params: { teamId: 't2' } });
  }
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from, next);
  if (to.name === 'team-member') {
    next(true);
  } else {
    next({ name: 'team-member', params: { teamId: 't2' } });
  }
});

router.afterEach(function (to, from) {
  console.log('Global afterEach');
  console.log(to, from);
  //sending analytics data
  //logs every navigation action
  //logs when user changes pages
});

export default router;
