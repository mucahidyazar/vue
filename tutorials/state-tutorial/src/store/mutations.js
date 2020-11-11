export default {
  setAuth(state, payload) {
    console.log(state);
    state.isLoggedIn = payload.isAuth;
  }
};
