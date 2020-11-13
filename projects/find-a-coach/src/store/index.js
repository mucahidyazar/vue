import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import CoachModule from './modules/coaches/index';
import RequestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    coach: CoachModule,
    request: RequestsModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  actions,
  mutations,
  getters
});

export default store;
