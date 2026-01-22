<template>
  <nav :class="{ 'navbar': true, 'scrolled': isScrolled }">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img :src="require('@/assets/cloudtec-trans.png')" alt="Consulting Agency Logo" class="logo-img" />
        </router-link>
      </div>

      <div class="menu-icon">
        <BurgerMenu @clicked="handleClick"></BurgerMenu>
      </div>
      <ul :class="{ 'nav-links': true, 'dropdown': showMenu }">
        <li><router-link to="/"><font-awesome-icon icon="house" class="icons" /> Αρχική</router-link></li>
        <li class="dropdown">
          <button class="dropdown-toggle" @click="toggleDropdown" :disabled="!isMobile">
            <font-awesome-icon icon="server" class="icons" /> Υπηρεσίες
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="servicesli" />
          </button>
          <ul :class="{ 'dropdown-menu': isDropdownClose, 'dropdown-menu-open': isDropdownOpen }">
            <li><router-link to="/services/websites"><font-awesome-icon icon="laptop-code" style="margin-right: 2%;" />
                Ιστοσελίδες</router-link></li>
            <li><router-link to="/services/eshops"><font-awesome-icon icon="cart-shopping" style="margin-right: 2%;" />
                eShops</router-link></li>
            <li><router-link to="/services/webapps"><font-awesome-icon icon="code"
                  style="margin-right: 2%;" /> Web Apps</router-link></li>
            <li><router-link to="/services/mobileapps"><font-awesome-icon icon="mobile-screen-button"
                  style="margin-right: 2%;" /> Mobile Apps</router-link></li>
            <li><router-link to="/services/digitalmarketing"><font-awesome-icon icon="bullseye" style="margin-right: 2%;" /> Digital
                Marketing & SEO</router-link></li>
            <li><router-link to="/services/dataanalysis"><font-awesome-icon icon="chart-line"
                  style="margin-right: 2%;" /> Data Analysis & CRM</router-link></li>
          </ul>
        </li>
        <li><router-link to="/aboutus"><font-awesome-icon icon="users" class="icons" /> About Us</router-link></li>
        <li class="contactli"><router-link to="/contact"> <font-awesome-icon icon="phone" class="icons" /> Επικοινωία
          </router-link></li>
      </ul>
      <button class="cta-button"><router-link to="/contact"> <font-awesome-icon icon="phone" class="icons" /> Επικοινωία
        </router-link></button>
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
      shadowWidth: 0,
      isDropdownOpen: false,
      isDropdownClose: true
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
    },
    toggleDropdown() {
      if (this.isMobile) {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.isDropdownClose = !this.isDropdownClose;
      console.log(this.isDropdownOpen)
      }
    },

    checkMobile() {
      this.isMobile = window.innerWidth <= 768; 
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.documentElement.style.setProperty('--shadow-width', `${this.shadowWidth}`);
    this.checkMobile(); 
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
  box-shadow: 0 2px #FFC947;
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


.logo {
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


.cta-button a {
  text-decoration: none;
  color: inherit;
  background: none;
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

.dropdown .dropdown-menu {
  display: none;
  position: absolute;
  top: 90;
  left: 50;
  background-color: #243b55;
  border-radius: 8px;
  padding: 0.7rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  list-style: none;
  width: 250px;
  z-index: 1000;


 
  transform: translateY(-10px);
  pointer-events: none;
  transition: display 0.3s ease, transform 0.3s ease;
}



.dropdown .dropdown-menu li {
  padding: 0.7rem 1.3rem;
}

.dropdown .dropdown-menu li a {
  color: #ffffff;
  font-size: 1rem;
  display: block;
}


.dropdown .dropdown-menu li a:hover {
  color: #FFC947;
}

.dropdown:hover .dropdown-menu {
  display: block;
  transform: translateY(0);
  pointer-events: auto;
}

.contactli {
  display: none;
}

.servicesli {
  display: none;
}

.dropdown-toggle {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 5px;
  transition: color 0.3s ease;
}

.dropdown-toggle:hover {
  color: #FFC947;
}

@media (max-width: 768px) {
  .nav-links {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;

    overflow: hidden;
    max-height: 0;
    transition: all 0.4s ease;

  }

  .contactli {
    display: inline;
  }

  .servicesli {
    display: inline;
    font-size: 1rem;
  }

  .dropdown-toggle {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 5px;
  transition: color 0.3s ease;
}

.dropdown-toggle:hover {
  color: #FFC947;
}

.dropdown-menu-open {
  display: flex;
  flex-direction: column;
  opacity: 1; /* Fade in */
  transform: translateY(0); /* Slide into place */
  list-style: none;
  padding: 1rem;
}

.dropdown-menu-open li{
  padding: 0.6rem 1rem;
  border-bottom: 0.5px solid #0A1931;
  border-radius: 15px;
  width: 70%;
  margin-bottom: 5px;
}


  .nav-links.dropdown {
    max-height: max-content;
    padding: 2rem;
    width: 100%;
    background-color: #243b55;
    border-bottom: 1px solid #2f55d4;
  }



  .dropdown-menu-open {
    display: block;
  }

  .dropdown .dropdown-menu {
    position:static;
    background-color: none;
    border: none;
    box-shadow: none;
  }

  .dropdown:hover .dropdown-menu {
    display: none;
  }


  .menu-icon {
    display: flex;
  }

  .cta-button {
    display: none;
  }
}
</style>
