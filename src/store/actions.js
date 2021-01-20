export default {
  updateNavigationData({ commit }, payload) {
    commit("updateNavigation", payload);
  },
  updateHomeData({ commit }, payload) {
    commit("updateHome", payload);
  }
};
