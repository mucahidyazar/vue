import axios from 'axios';

export default {
  async contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      email: payload.email,
      message: payload.message
    };

    const res = await axios.post(
      `https://find-a-coach-ef88a.firebaseio.com/requests/${payload.coachId}.json`
    );

    context.commit('addRequest', newRequest);
  }
};
