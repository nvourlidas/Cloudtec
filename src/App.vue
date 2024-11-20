<template>
  <div v-if="isLoading" class="loading-spinner fadeOut">
    <SvgLoader></SvgLoader>
  </div>
  <div v-else class="home fadeIn">
    <UnderCon v-if="isVisible"  @click.self="closeModal"></UnderCon>
    <Navbar></Navbar> 
  <router-view />
  <FooterMain></FooterMain>
  <BackToTop></BackToTop>
</div>
</template>

<script>
import SvgLoader from './components/Loader/SvgLoader.vue';
import Navbar from './components/Header/NavBar.vue';
import FooterMain from './components/Footer/FooterMain.vue';
import BackToTop from './components/Main/BackToTop.vue';
import UnderCon from './components/Main/UnderCon.vue';
export default {
  name: 'App',

  components: {
    SvgLoader,
    Navbar,
    FooterMain,
    BackToTop,
    UnderCon
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

