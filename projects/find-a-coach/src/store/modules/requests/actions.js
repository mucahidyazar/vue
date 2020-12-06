import axios from 'axios';

export default {
  async contactCoach(context, payload) {
    const newRequest = {
      email: payload.email,
      message: payload.message
    };

    const res = await axios.post(
      `https://find-a-coach-ef88a.firebaseio.com/requests/${payload.coachId}.json`,
      newRequest
    );

    if (res.status !== 200) {
      const error = new Error(res.data.message || 'Failed to send request.');
      throw error;
    }

    newRequest.id = res.data.name;
    newRequest.coachId = payload.coachId;
    console.log(newRequest);

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const res = await axios.get(
      `https://find-a-coach-ef88a.firebaseio.com/requests/${coachId}.json?auth=${token}`
    );

    if (res.status !== 200) {
      const error = new Error(res.data.message || 'Failed to send request.');
      throw error;
    }

    const requests = [];

    for (const key in res.data) {
      const coach = {
        id: key,
        coachId,
        email: res.data[key].email,
        message: res.data[key].message
      };
      requests.push(coach);
    }

    context.commit('setRequests', requests);
  }
};
