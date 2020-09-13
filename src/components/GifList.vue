<template>
  <div>
    <div v-scroll="handleScroll" class="gif-container">
      <div
        v-for="(gif, index) in getGifList"
        :key="index + '-gif-item'"
        class="gif-container__gif-card"
      >
        <div class="gif-container__gif-card--hover">
          <div class="hover-card">
            <p>{{ gif.title }}</p>
            <div v-if="gif.userAvatar" class="profile">
              <img :src="gif.userAvatar" />
              <p>{{ gif.username }}</p>
            </div>
          </div>
        </div>
        <img :src="gif.url" @loaded="isImageLoading = false" />
        <div
          v-if="isImageLoading"
          :style="{ backgroundColor: gif.backgroundColor }"
          class="gif-container__gif-card--placeholder"
        >
          Loading...
        </div>
      </div>
    </div>
    <div class="loading" :style="$store.getters.isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div @click="loadMore" class="gif-container__button">
      Load More Gift (20+)
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'GifList',
  computed: {
    ...mapState(['colors']),
    getGifList() {
      return this.$store.getters.getGifList;
    }
  },
  data() {
    return {
      isImageLoading: true,
      options: {
        limit: 20,
        offset: 0
      }
    };
  },
  methods: {
    ...mapActions(['getLoading', 'getTrendGifs']),
    loadMore() {
      this.getLoading(true);

      this.options.offset += 20;

      this.getTrendGifs(this.options).then(() => {
        this.getLoading(false);
      });
    },
    handleScroll: function() {
      if (window.scrollY > 100) {
        this.options.offset = 20;
        this.getLoading(true);

        this.getTrendGifs(this.options).then(() => {
          this.getLoading(false);
        });
      }

      return window.scrollY > 100;
    }
  },
  created() {
    this.getLoading(true);

    this.getTrendGifs(this.options).then(() => {
      this.getLoading(false);
    });
  }
};
</script>
