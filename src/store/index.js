import Vue from 'vue';
import Vuex from 'vuex';
import gif from './modules/gif';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: { display: 'none' },
    searchText: '',
    colors: ['red', 'magenta', 'orange', 'cyan', 'royalblue', 'hotpink']
  },
  getters,
  mutations,
  actions,
  modules: { gif }
});
