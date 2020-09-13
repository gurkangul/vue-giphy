import Vue from 'vue';
import axios from 'axios';
// import store from '../store'

const createAxiosInstance = baseURL =>
  axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

const api = createAxiosInstance(process.env.VUE_APP_GIPHY_BASE_URL);

api.interceptors.request.use(config => config);

api.interceptors.response.use(
  response => response,
  error => error
);

export default {
  install() {
    Vue.prototype.$api = api;
    Vue['$api'] = api;
  }
};
