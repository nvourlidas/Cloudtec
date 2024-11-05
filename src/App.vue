<template>
  <div v-if="isLoading" class="loading-spinner fadeOut">
    <SvgLoader></SvgLoader>
  </div>
  <div v-else class="home fadeIn">
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/Header/headerMain.vue'
import SvgLoader from './components/Loader/SvgLoader.vue';

export default {
  name: 'App',
  components: {
    Header,
    SvgLoader
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

<style>

body{
    font-family: "Play", sans-serif;
    background-color: #1f2d3d;
    transition: all 0.3s ease-in-out;
  }


.loading-spinner {
  /* Style your loading spinner here */
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  -webkit-animation-duration: 3s;
  animation-duration: 8s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}


@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

.home {
  -webkit-animation-duration: 3s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}


</style>
