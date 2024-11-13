<template>
  <div v-if="isLoading" class="loading-spinner fadeOut">
    <SvgLoader></SvgLoader>
  </div>
  <div v-else class="home fadeIn">
  <router-view />
</div>
</template>

<script>
import SvgLoader from './components/Loader/SvgLoader.vue';
export default {
  name: 'App',

  components: {
    SvgLoader,
  },

  data(){
    return {
      isLoading: true,
    }
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  },
}
</script>

