import Vue from 'vue';

let query = {
  api_key: process.env.VUE_APP_GIPHY_API_KEY
};

export const getTrending = async data => {
  let { limit, offset } = data;
  return await Vue.$api.get('/trending', {
    params: { ...query, limit, offset }
  });
};

export const getSearchGif = async data => {
  let { limit, offset, q } = data;
  return await Vue.$api.get('/search', {
    params: { ...query, q, limit, offset }
  });
};
