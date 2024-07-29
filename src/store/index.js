import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: false, // 这里假设你有一个状态来存储用户是否登录
    user: null,
  },
  mutations: {
    login(state, user) {
      state.isLoggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    }
  },
  actions: {
    login({ commit }, user) {
      // 模拟登录操作 ==> 后端环境，登录成功后commit
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('login', user);
          resolve();
        }, 1000);
      });
    },
    logout({ commit }) {
      commit('logout');
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    user: state => state.user
  }
});
