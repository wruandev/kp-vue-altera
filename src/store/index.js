import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as newsStore from "./news";

Vue.use(Vuex);

const persistedsDataState = createPersistedState({
  key: "newsvuex",
  paths: ["news"],
});

export default new Vuex.Store({
  plugins: [persistedsDataState],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    news: {
      namespaced: true,
      ...newsStore,
    },
  },
});
