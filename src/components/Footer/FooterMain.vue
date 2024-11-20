<template>
    <footer class="footer">
      <!-- Logo and Description -->
      <div class="footer-brand">
        <router-link to="/">
          <img :src="require('@/assets/cloudtec-trans.png')" alt="Consulting Agency Logo" class="logo-img" />
        </router-link>
      </div>
  
      <!-- Navigation Links -->
      <div class="footer-links">
        <h3 class="footer-title">Quick Links</h3>
        <ul>
          <li><router-link to="/">Αρχική</router-link></li>
          <li><router-link to="/services">Υπηρεσίες</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Επικοινωία</router-link></li>
        </ul>
      </div>
  
      <!-- Social Media Links -->
      <div class="footer-social">
        <h3 class="footer-title">Follow Us</h3>
        <!-- <div class="social-icons">
          <a href="https://facebook.com" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
          <a href="https://twitter.com" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
          <a href="https://instagram.com" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
          <a href="https://linkedin.com" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
        </div> -->
        <SocialSection></SocialSection>
      </div>
  
      <!-- Contact Information -->
      <div class="footer-contact">
        <h3 class="footer-title">Επικοινωία</h3>
        <p><font-awesome-icon icon="map-marker-alt" /> 123 Street, City, Country</p>
        <p><font-awesome-icon icon="phone" /> +123 456 7890</p>
        <p><font-awesome-icon icon="envelope" /> contact@yourcompany.com</p>
      </div>
      <div class="footer-copyright">
      &copy; 2024 Cloudtec.gr. All rights reserved.
    </div>
    </footer>
    
  </template>
  
  <script>
  import SocialSection from './SocialSection.vue';
  export default {
  name: "FooterMain",

  components:{
    SocialSection
  }
  };
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #0f1922;
    color: #ffffff;
    padding: 2rem 1rem;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .footer-brand {
    flex: 1;
  }
  
  .logo-img {
    width: 50%;
    padding-left: 2rem;
  }
  
  
  .description {
    color: #b0bec5;
    font-size: 0.9rem;
    line-height: 1.6;
    max-width: 200px;
  }
  
  .footer-links,
  .footer-social,
  .footer-contact {
    flex: 1;
    /* min-width: 180px; */
  }

  .footer-social{
    height: fit-content;
  }
  
  .footer-title {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #ffffff;
  }
  
  .footer-links ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-links ul li {
    margin-bottom: 0.5rem;
  }
  
  .footer-links ul li a {
    color: #b0bec5;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 1.2rem;
  }
  
  .footer-links ul li a:hover {
    color: #FFC947;
  }
  
  .social-icons a {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: #64b5f6;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: #90caf9;
  }
  
  .footer-contact p {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: #b0bec5;
    margin-bottom: 0.5rem;
  }
  
  .footer-contact p .fa {
    margin-right: 0.5rem;
  }

  .footer-copyright {
  width: 100%;
  text-align: center;
  color: #b0bec5;
  font-size: 1rem;
  border-top: 1px solid #3a4a5a;
}
  
  /* Responsive layout for smaller screens */
  @media (max-width: 768px) {
    .footer {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  </style>
  