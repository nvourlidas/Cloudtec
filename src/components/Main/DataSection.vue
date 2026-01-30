<template>
  <section class="how-it-works-section">
    <!-- ✅ SEO: H2 αντί για H1 -->
    <h2 class="section-title">Data Analysis & CRM για Επιχειρήσεις</h2>

    <div class="content-wrapper">
      <div class="illustration">
        <img
          src="@/assets/Data extraction (1).gif"
          alt="Ανάλυση δεδομένων και CRM dashboards για επιχειρήσεις"
        />
      </div>

      <div class="content">
        <h3 class="subtitle">Πώς δουλεύει;</h3>

        <p class="description">
          Αναλύουμε τα δεδομένα σας και δημιουργούμε CRM & στρατηγικές digital marketing
          για στοχευμένα και μετρήσιμα αποτελέσματα.
        </p>

        <!-- ✅ SEO: σωστή επικεφαλίδα χωρίς nested <p> -->
        <h3 class="main-title">
          Βάλε την επιχείρησή σου στον κόσμο των
          <span class="main-title data">Δεδομένων</span>
        </h3>

        <p class="text">
          Με την αξιοποίηση δεδομένων, dashboards και CRM εργαλείων,
          βοηθάμε την επιχείρησή σας να παίρνει καλύτερες αποφάσεις και να αναπτύσσεται.
        </p>

        <ul class="features">
          <li>
            <span class="check-icon">✔</span>
            <strong>Ανάλυση Δεδομένων:</strong> Μετατρέπουμε τα δεδομένα σας σε πρακτικές γνώσεις.
          </li>
          <li>
            <span class="check-icon">✔</span>
            <strong>CRM & Στοχευμένο Marketing:</strong> Καμπάνιες βασισμένες σε πραγματική συμπεριφορά χρηστών.
          </li>
          <li>
            <span class="check-icon">✔</span>
            <strong>Βελτιστοποίηση Απόδοσης:</strong> Παρακολούθηση KPIs και συνεχή βελτίωση στρατηγικών.
          </li>
        </ul>

        <!-- ✅ SEO: internal link -->
        <router-link to="/services/dataanalysis" class="seo-link">
          Δείτε περισσότερα για Data Analysis & CRM →
        </router-link>
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

  /* SEO / inline router links */
.seo-link {
  color: #f5c542;
  font-weight: 600;
  border-bottom: 2px solid rgba(245, 197, 66, 0.6);
  text-decoration: none;
  transition: all 0.2s ease;
}

.seo-link:hover {
  border-bottom-color: #ffd86b;
}


.seo-link:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(245, 197, 66, 0.35);
  border-radius: 2px;
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
  