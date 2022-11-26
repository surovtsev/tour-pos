import * as types from "../../mutation-types";
import * as getters from "./getters";
import { getPrintDepartures } from "../../../helpers/import-csv";

// Set Messages refx
const initState = {
  tourists: null,
  printDepartures: [],
  UI: {
    loading: false,
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  [types.SET_IMPORT_CONTENT](state, tourists) {
    state.tourists = tourists;
    state.printDepartures = getPrintDepartures(tourists);
  },
  [types.SET_IMPORT_LOADING](state, isLoading) {
    state.UI.loading = isLoading;
  },
};

const actions = {
  setImportContent({ commit, dispatch }, tourists) {
    commit(types.SET_IMPORT_CONTENT, tourists);
    dispatch("isLoading");
  },
  isLoading({ commit, state }) {
    const touristsInStore = state.tourists;
    if (touristsInStore === undefined || touristsInStore.length === 0) {
      commit(types.SET_IMPORT_LOADING, true);
    } else {
      commit(types.SET_IMPORT_LOADING, false);
    }
  },
};

export default {
  state: initState,
  mutations,
  actions,
  getters,
};
