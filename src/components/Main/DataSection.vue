<template>
    <section class="how-it-works-section">
        <h1 class="section-title">Data Analysis & CRM</h1>
        <div class="content-wrapper">
        <div class="illustration">
        <img src="@/assets/Data extraction (1).gif" alt="Illustration" />
      </div>
      <div class="content">
        <h2 class="subtitle">Πως δουλεύει;</h2>
        <p class="description">
            Αναλύουμε τα δεδομένα σας και δημιουργούμε στρατηγικές digital marketing για στοχευμένα αποτελέσματα.
        </p>
        <h3 class="main-title">Βάλε την επιχείρησή σου στον κόσμο των <p class="main-title data">Δεδομένων!</p></h3>
        <p class="text">
            Με την αξιοποίηση των δεδομένων και προηγμένες στρατηγικές digital marketing, βοηθάμε την επιχείρησή σας να αναπτυχθεί:
        </p>
        <ul class="features">
          <li><span class="check-icon">✔</span> Ανάλυση Δεδομένων: Μετατρέπουμε τα δεδομένα σας σε πρακτικές γνώσεις.</li>
          <li><span class="check-icon">✔</span> Στοχευμένο Marketing: Δημιουργούμε καμπάνιες που προσεγγίζουν το ιδανικό κοινό σας.</li>
          <li><span class="check-icon">✔</span> Βελτιστοποίηση Απόδοσης: Παρακολουθούμε και προσαρμόζουμε τις στρατηγικές για μέγιστα αποτελέσματα</li>
        </ul>
        <!-- <a href="/services/dataanalysis" class="link">Δείτε Περισσότερα &rarr;</a> -->
        <router-link to="/services/dataanalysis" class="link"> Δείτε Περισσότερα &rarr;</router-link>
      </div>
    </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HowItWorksSection"
  };
  </script>
  
  <style scoped>
  .how-it-works-section {
    background-color: #1f2d3d; 
    color: #ffffff;
    text-align: center;
    border-top: 1px solid #495057;
  }

  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 3rem;
    gap: 5rem;
    text-align: left;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #b0bec5;
  width: 100%;
}

.data {
    color: #FFC947;
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 0;
}
  
  .content {
    max-width: 50%;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #b0bec5; 
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .description {
    font-size: 1rem;
    color: #90a4ae; 
    margin-bottom: 1.5rem;
  }
  
  .main-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .text {
    color: #b0bec5;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .features {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
  }
  
  .features li {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 0.75rem;
  }
  
  .check-icon {
    color: #64b5f6; 
    margin-right: 0.5rem;
  }
  
  .link {
    color: #64b5f6;
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
  }
  
  .link:hover {
    color: #90caf9; 
  }
  
  .illustration {
    max-width: 70%;
  }
  
  .illustration img {
    width: 100%;
    height: auto;
  }


  @media (max-width: 768px) {
  .how-it-works-section {
    text-align: center;
  }

  .section-title {
    text-align: center;
  }

  .content-wrapper {
    flex-direction: column; /* Side by side on larger screens */
    align-items: center;
    
    text-align: center;
  }

  .content {
    max-width: 80%;
    margin-bottom: 0;
    padding-right: 2rem;
  }

  .illustration {
    max-width: 100%;
  }

}
  </style>
  