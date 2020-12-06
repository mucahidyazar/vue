export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoSignout = false;
  },
  didAutoSignout(state) {
    state.didAutoSignout = true;
  }
};
