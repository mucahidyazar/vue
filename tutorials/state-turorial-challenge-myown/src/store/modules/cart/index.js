import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const cartModule = {
  namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 }
    };
  },
  getters,
  mutations,
  actions
};

export default cartModule;
