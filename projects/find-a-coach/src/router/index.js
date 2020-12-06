import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

//PAGES
import NotFound from '../pages/NotFound.vue';
import CoachesList from '../pages/coaches/CoachesList.vue';
import store from '../store/index';

const CoachDetail = defineAsyncComponent(() =>
  import('../pages/coaches/CoachDetail.vue')
);
const CoachRegistration = defineAsyncComponent(() =>
  import('../pages/coaches/CoachRegistration.vue')
);
const ContactCoach = defineAsyncComponent(() =>
  import('../pages/requests/ContactCoach.vue')
);
const RequestReceived = defineAsyncComponent(() =>
  import('../pages/requests/RequestReceived.vue')
);
const UserAuth = defineAsyncComponent(() =>
  import('../pages/auth/UserAuth.vue')
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } //
      ]
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    {
      path: '/requests',
      component: RequestReceived,
      meta: { requiresAuth: true }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
