<template>
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Συμβουλευτική που οδηγεί στην<span class="hero-title success"> Eπιτυχία</span></h1>
        <p class="hero-subtitle">Ενδυνάμωση των επιχειρήσεων με καινοτόμες λύσεις και καθοδήγηση από ειδικούς.</p>
        <button class="hero-button">Ανακάλυψέ το</button>
      </div>
      <div class="hero-image">
        <img src="http://landrick.vue.themesbrand.com/images/illustrator/Startup_SVG.svg" alt="Hero Image" />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection'
  }
  </script>
  
  <style >
  .hero-section {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    align-items: center;
    justify-content: center;
    padding: 2rem;
    grid-column-gap: 1rem; /* Space between text and image */
    margin-top: 7%;
  }
  
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align text to the left */
    justify-content: center;
    text-align: left;
    max-width: 60%; /* Adjust as needed */
    margin: 0 auto; /* Centers within the column */
  }
  
  .hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
  }

  .success {
    color: var(--primary-color);
    transition: 0.3s ease-in;
  }
  .success:hover {
    color: var(--contrast);
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #9bacc4 ;
  }
  
  .hero-button {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .hero-button:hover {
    background-color: var(--contrast);
    color: var(--black);
  }
  
  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 60%; /* Brings image closer to text */
  }
  
  .hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }
}
  </style>
  