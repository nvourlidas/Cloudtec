<template> 
    <Header></Header>
    <MainPage ></MainPage>
</template>

<script>
import Header from './Header/headerMain.vue'
import MainPage from './Main/MainPage.vue';

export default {
  name: 'HomeVue',
  components: {
    Header,
    MainPage
  },

 
}
</script>

<style>

body{
    font-family: "Play", sans-serif;
    background-color: #1f2d3d;
    margin: 0;
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
