import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const CoachesModule = {
  state() {
    return {
      userId: null,
      token: null,
      didAutoSignout: false
    };
  },
  actions,
  mutations,
  getters
};

export default CoachesModule;
