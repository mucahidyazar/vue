import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import AuthModule from './modules/auth/index';
import CoachModule from './modules/coaches/index';
import RequestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    coach: CoachModule,
    request: RequestsModule,
    auth: AuthModule
  },
  state() {
    return {};
  },
  actions,
  mutations,
  getters
});

export default store;
