import { createStore } from 'vuex';
import counterModule from './modules/counter/index.js';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations,
  actions,
  getters
});

export default store;
