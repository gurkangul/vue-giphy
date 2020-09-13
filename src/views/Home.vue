<template>
  <div class="container">
    <Header></Header>
    <GifList></GifList>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '../components/Header';
import GifList from '../components/GifList';

export default {
  name: 'Home',

  components: { Header, GifList }
};
</script>
