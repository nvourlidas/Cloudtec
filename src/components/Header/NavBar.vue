<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img :src="require('@/assets/cloudtec-trans.png')" alt="Consulting Agency Logo" class="logo-img" />
        </router-link>
      </div>
      <div class="menu-icon" @click="showMenu = !showMenu">
        <span class="bar">Arxiki</span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Αρχική</router-link></li>
        <li><router-link to="/services">Υπηρεσίες</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
      </ul>
      <button class="cta-button">Επικοινωία</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',

  data() {
    return {
      showMenu: false,
    };
  }
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: -webkit-sticky;
	position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  height: auto;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-icon {
  display: none;
  cursor: pointer;
}

.menu-icon .bar {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  transition: 0.4s;
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
  color: var(--primary-color);
}

.cta-button {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
  font-size: 1.3rem;
 
}

.cta-button:hover {
  background-color: var(--contrast);
  color: var(--black);
}

@media (max-width: 768px) {
  .nav-links {
    display: none; /* Hide links by default on mobile */
    flex-direction: column;
    position: absolute;
    top: 100%; /* Position below the navbar */
    left: 0;
    width: 100%;
    background-color: #007bff;
    padding: 1rem 0;
  }

  .nav-links.show {
    display: flex; /* Show links when toggled */
  }

  .menu-icon {
    display: block; /* Show hamburger icon on mobile */
  }
}
</style>
