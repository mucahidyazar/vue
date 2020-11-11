export default {
  finalCounter(state, getters, rootState, rootGetters) {
    console.log(rootState);
    console.log(rootGetters);
    return state.counter * 3;
  },
  noramalizedCounter(_, getters) {
    console.log(getters);
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  }
};
