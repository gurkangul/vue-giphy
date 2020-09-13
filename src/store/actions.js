export const getLoading = ({ commit }, payload) => {
  if (payload) {
    commit('SET_LOADING', 'block');
  } else {
    commit('SET_LOADING', 'none');
  }
};
