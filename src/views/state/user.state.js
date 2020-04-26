const initialState = function() {
  return {
    user: 'me',
    password: 'pass'
  };
};

export default {
  state: initialState(),
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setPassword(state, payload) {
      state.password = payload;
    }
  }
};
