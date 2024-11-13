<template>
  <nav :class="{'navbar': true, 'scrolled': isScrolled}">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img :src="require('@/assets/cloudtec-trans.png')" alt="Consulting Agency Logo" class="logo-img" />
        </router-link>
      </div>
      <div class="menu-icon" >
        <BurgerMenu @clicked="handleClick" ></BurgerMenu>
      </div>
      <ul :class="{'nav-links': true, 'dropdown': showMenu}">
        <li><router-link to="/"><font-awesome-icon icon="house" class="icons"/> Αρχική</router-link></li>
        <li><router-link to="/services"><font-awesome-icon icon="server" class="icons"/> Υπηρεσίες</router-link></li>
        <li><router-link to="/about"><font-awesome-icon icon="address-card" class="icons"/> About Us</router-link></li>
      </ul>
      <button class="cta-button"><font-awesome-icon icon="phone" class="icons"/><router-link to="/contact">Επικοινωία</router-link> </button>
    </div>
  </nav>
</template>

<script>
import BurgerMenu from './BurgerMenu.vue';
export default {
  name: 'NavBar',

  components: {
    BurgerMenu
  },

  data() {
    return {
      showMenu: false,
      isScrolled: false,
      shadowWidth: 0
    };
  },

  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / documentHeight) * 100;

      
      this.shadowWidth = Math.min(scrollPercent, 100); 
      this.isScrolled = scrollTop > 0; 
    },

    handleClick() {
      this.showMenu = !this.showMenu
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.documentElement.style.setProperty('--shadow-width', `${this.shadowWidth}`);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  watch: {
    shadowWidth(newWidth) {
      document.documentElement.style.setProperty('--shadow-width', newWidth);
    }
  }
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  transition: box-shadow 0.3s ease;
  position: -webkit-sticky;
	position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  height: auto;
  background-color: #1f2d3d;
}

.navbar::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0%;
  box-shadow: 0 2px  #FFC947;
  transition: width 0.1s ease; 
  z-index: -1;
}


.navbar.scrolled::after {
  width: calc(var(--shadow-width, 0) * 1%); 
}

.menu-icon {
  display: none;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}


.logo{
  position: relative;
}


.logo-img {
  width: 70px; 
  height: auto;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0 auto;
  
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 1.3rem;
  
}

.nav-links a:hover {
  color: #FFC947;
}




.cta-button {
  padding: 0.5rem 1rem;
  background-color: #2f55d4;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
  font-size: 1.3rem;
 
}

.cta-button:hover {
  background-color: #FFC947;
  color: #0A1931;
}

@media (max-width: 768px) {
  .nav-links {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%; /* Position below the navbar */
    left: 0;
    width: 100%;
    background: rgb(31,45,61);
background: linear-gradient(180deg, rgba(31,45,61,1) 0%, rgba(47,85,212,1) 16%, rgba(47,85,212,1) 100%);
    overflow: hidden;
    max-height: 0;
    transition: all 0.4s ease; 
    
  }

  /* Dropdown effect when menu is toggled */
  .nav-links.dropdown {
    max-height: 500px; /* Adjust this height as needed to fit content */
    padding: 2rem;
    width:100%;
    
  }

  .menu-icon {
    display: flex;
  }

 .cta-button{
  display: none;
 }
}

</style>


