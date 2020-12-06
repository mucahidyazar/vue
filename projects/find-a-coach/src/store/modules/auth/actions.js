import axios from 'axios';
let timer;

export default {
  async signin(context, payload) {
    context.dispatch('auth', {
      ...payload,
      mode: 'signin'
    });
  },
  async signup(context, payload) {
    context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },
  signout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    clearTimeout(timer);
    localStorage.removeItem('tokenExpiration');

    context.commit('setUser', {
      token: null,
      userId: null
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${
      mode === 'signup' ? 'signUp' : 'signInWithPassword'
    }?key=AIzaSyDJgveMP11F-Q6racDV8Md70AwGhaaPPhU`;

    const res = await axios.post(url, {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    });

    if (res.status !== 200) {
      console.log(res.data);
      const error = new Error(res.data.message || 'Failed to authenticate.');
      throw error;
    }

    const expiresIn = +res.data.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', res.data.idToken);
    localStorage.setItem('userId', res.data.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(() => {
      context.dispatch('autoSignout');
    }, expiresIn);

    console.log(res.data);
    context.commit('setUser', {
      token: res.data.idToken,
      userId: res.data.localId
    });
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();
    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch('autoSignout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token,
        userId
      });
    }
  },
  autoSignout(context) {
    context.dispatch('signout');
    context.commit('didAutoSignout');
  }
};
