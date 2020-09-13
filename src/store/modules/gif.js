import { getTrending, getSearchGif } from '../../services/api';
import { randomItem } from '../../utils/helpers';

const state = {
  gifList: [],
  isSearch: false,
  options: {
    limit: 20,
    offset: 0,
    q: ''
  }
};

const getters = {
  getGifList(state) {
    return state.gifList;
  }
};

const mutations = {
  SET_GIFS(state, data) {
    state.gifList = data;
  },
  SET_SEARCH(state, data) {
    state.isSearch = data;
  },
  SET_OPTIONS(state, data) {
    state.options = data;
  },
  SET_RESETLIST(state) {
    state.gifList = [];
  }
};

const actions = {
  async getTrendGifs({ commit, state, dispatch, rootState }, payload) {
    if (state.isSearch) {
      state.options.offset = payload.offset;
      dispatch('getSearchGifs', state.options);
    } else {
      commit('SET_OPTIONS', payload);
      let { data, status } = await getTrending(payload);
      if (status == 200) {
        let gifs = data.data.map(item => {
          return {
            id: item.id,
            url: item.images.fixed_width.url,
            title: item.title,
            backgroundColor: randomItem(rootState.colors),
            userAvatar: item.user == undefined ? '' : item.user.avatar_url,
            username: item.user == undefined ? '' : item.user.username
          };
        });
        commit('SET_GIFS', [...state.gifList, ...gifs]);
      }
    }
  },
  async getSearchGifs({ commit, state, dispatch, rootState }, payload) {
    if (payload && payload.q) {
      commit('SET_SEARCH', true);
    } else {
      commit('SET_SEARCH', false);
      dispatch('getTrendGifs', payload);
    }
    commit('SET_OPTIONS', payload);

    let { data, status } = await getSearchGif(state.options);

    if (status == 200) {
      var gifs = data.data.map(item => {
        return {
          id: item.id,
          url: item.images.fixed_width.url,
          title: item.title,
          backgroundColor: randomItem(rootState.colors),
          userAvatar: item.user == undefined ? '' : item.user.avatar_url,
          username: item.user == undefined ? '' : item.user.username
        };
      });
      commit('SET_GIFS', [...state.gifList, ...gifs]);
    }
  },
  getResetList({ commit }) {
    commit('SET_RESETLIST');
  }
};

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
};
