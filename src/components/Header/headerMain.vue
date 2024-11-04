<template>
<Navbar></Navbar>
<HeroSection></HeroSection>
<BrandsSection></BrandsSection>
</template>

<script>
import Navbar from './NavBar.vue'
import HeroSection from './HeroSection.vue';
import BrandsSection from './BrandsSection.vue';
export default {
  name: 'headerMain',

  components: {
    Navbar,
    HeroSection,
    BrandsSection
  }
}
</script>