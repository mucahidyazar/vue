export default {
  registerCoach(state, data) {
    state.coaches.push(data);
  },
  setCoaches(state, data) {
    state.coaches = data;
  }
};
