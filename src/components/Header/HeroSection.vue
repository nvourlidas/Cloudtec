<template>
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Συμβουλευτική που οδηγεί στην<span class="hero-title success"> Eπιτυχία</span></h1>
        <p class="hero-subtitle">Ενδυνάμωση των επιχειρήσεων με καινοτόμες λύσεις και καθοδήγηση από ειδικούς.</p>
        <!-- <button class="hero-button">Ανακάλυψέ το</button> -->
         <InputButton></InputButton>
      </div>
      <div class="hero-image">
        <img src="@/assets/Launching-pana.svg" alt="Hero Image" /> 
      </div>
    </section>
  </template>
  
  <script>
  import InputButton from './InputButton.vue';
  export default {
    name: 'HeroSection',

    components: {
      InputButton
    }
  }
  </script>
  
  <style >
  .hero-section {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    align-items: center;
    justify-content: center;
    padding: 2rem;
    grid-column-gap: 0; 
    height: fit-content;
  }
  
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-content: center;
    text-align: left;
    max-width: 60%; 
    margin: 0 auto; 
  }
  
  .hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
  }

  .success {
    
    color: #FFC947;
    transition: 0.3s ease-in;
  }
  .success:hover {
    color: #2f55d4;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #9bacc4 ;
  }
  
  .hero-button {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    background-color: #2f55d4;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .hero-button:hover {
    background-color: #FFC947;
    color: var(--black);
  }
  
  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80%; /* Brings image closer to text */
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
    align-items: center;
    justify-content: center;
  }

  .hero-content {
    max-width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .hero-title{
    font-size: 2rem;
  }

  .hero-button{
    margin-bottom: 7%;
  }

  .hero-image{
    width: 100%;
    margin-left: 10%;
  }
}
  </style>
  