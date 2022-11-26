import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import imported from "./modules/imported";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  modules: {
    imported,
  },
  plugins: [createPersistedState()],
});

export default store;
