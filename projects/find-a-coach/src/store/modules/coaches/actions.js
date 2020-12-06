import axios from 'axios';

export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const token = context.getters.token;
    const res = await axios.put(
      `https://find-a-coach-ef88a.firebaseio.com/coaches/${userId}.json?auth=${token}`,
      coachData
    );

    if (!res.ok) {
      //error
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const res = await axios.get(
      `https://find-a-coach-ef88a.firebaseio.com/coaches.json`
    );

    if (res.status !== 200) {
      const error = new Error(res.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in res.data) {
      const coach = {
        id: key,
        firstName: res.data[key].firstName,
        lastName: res.data[key].lastName,
        description: res.data[key].description,
        hourlyRate: res.data[key].rate,
        areas: res.data[key].areas
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
