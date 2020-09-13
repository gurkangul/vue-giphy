<template>
  <div>
    <div class="container__top">
      <h1>{{ title }}</h1>
      <div>
        <input
          class="container__top--search-box"
          type="search"
          @keyup="changeText"
          v-model="searchText"
          :placeholder="placeholder"
        />
      </div>
    </div>
    <div>
      <hr style="opacity:0.4" />
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Header',
  data() {
    return {
      title: 'Giphy',
      placeholder: 'search gif',
      searchText: '',
      options: {
        limit: 20,
        offset: 0,
        q: this.searchText
      }
    };
  },
  methods: {
    ...mapActions(['getLoading', 'getResetList', 'getSearchGifs']),
    changeText() {
      this.options.q = this.searchText;
      this.getLoading(true);
      this.getResetList();
      this.getSearchGifs(this.options).then(res => {
        console.log(res);
        this.getLoading(false);
      });
    }
  }
};
</script>
