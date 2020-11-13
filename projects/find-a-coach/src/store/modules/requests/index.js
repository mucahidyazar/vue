import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const RequestsModule = {
  namespaced: true,
  state() {
    return {};
  },
  actions,
  mutations,
  getters
};

export default RequestsModule;
