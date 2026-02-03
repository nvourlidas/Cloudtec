<template>
  <div v-if="isLoading" class="loading-spinner fadeOut">
    <SvgLoader></SvgLoader>
  </div>
  <div v-else class="home fadeIn">
    <Navbar></Navbar> 
  <router-view />
  <ConsentBanner />
  <FooterMain></FooterMain>
  <BackToTop></BackToTop>
</div>
</template>

<script>
import SvgLoader from './components/Loader/SvgLoader.vue';
import Navbar from './components/Header/NavBar.vue';
import FooterMain from './components/Footer/FooterMain.vue';
import BackToTop from './components/Main/BackToTop.vue';
import ConsentBanner from './ConsentBanner.vue'
export default {
  name: 'App',

  components: {
    SvgLoader,
    Navbar,
    FooterMain,
    BackToTop,
    ConsentBanner,
  },

  data(){
    return {
      isLoading: true,
      isVisible: true,
    }
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  },

  methods: {
    closeModal() {
      this.isVisible = false;
    },
  }
}
</script>

