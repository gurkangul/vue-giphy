import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import './assets/stylesheet/base.scss';
import '../src/assets/loading.css';

import Client from './services/client';
import Scroll from './directives/scroll';

Vue.use(Client);
Vue.directive('scroll', Scroll);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
