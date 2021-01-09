export default {
  updateNavigationData({ commit }, payload) {
    commit("updateNavigation", payload);
  },
  updateWrapperData({ commit }, payload) {
    commit("updateWrapper", payload);
  }
};