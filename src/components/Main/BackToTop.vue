<template>
    <div v-if="isVisible" class="back-to-top" @click="scrollToTop">
      <font-awesome-icon icon="arrow-up" />
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  
  export default {
    components: {
      FontAwesomeIcon,
    },
    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
      checkVisibility() {
        this.isVisible = window.scrollY > 300;
      },
    },
    mounted() {
      window.addEventListener("scroll", this.checkVisibility);
    },
    beforeUnmount() { 
      window.removeEventListener("scroll", this.checkVisibility);
    },
  };
  </script>
  
  <style scoped>
  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background-color: #2f55d4;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .back-to-top:hover {
    background-color: #FFC947;
    transform: translateY(-5px);
    color: #1a2a3a;
  }
  
  .back-to-top .fa-arrow-up {
    font-size: 1.5rem;
  }
  </style>
  