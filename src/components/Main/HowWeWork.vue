<template>
    <section class="work-process-section">
      <div class="header">
        <p class="subtitle">Work Process</p>
        <h2 class="title">Πως Δουλεύουμε</h2>
        <p class="description">
            Ξεκινήστε να συνεργάζεστε μαζί μας, και θα σας παρέχουμε όλα όσα χρειάζεστε για να αυξήσετε την αναγνωρισιμότητα, να ενισχύσετε την επισκεψιμότητα και να συνδεθείτε με το κοινό σας.
        </p>
      </div>
  
      <div class="process-steps">
        <div class="process-step">
          <font-awesome-icon :icon="['fas', 'comments']" class="step-icon" />
          <h3 class="step-title">Συζήτηση</h3>
          <p class="step-description">
            Ελάτε να συζητήσουμε τις ανάγκες της επιχείρησής σας και να χτίσουμε μαζί τη στρατηγική που θα την οδηγήσει στην επιτυχία.
          </p>
        </div>
  
        <div class="arrow">
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </div>
  
        <div class="process-step">
          <font-awesome-icon :icon="['fas', 'lightbulb']" class="step-icon" />
          <h3 class="step-title">Στρατιγική & Testing</h3>
          <p class="step-description">
            Διαμορφώνουμε την κατάλληλη στρατηγική και δοκιμάζουμε τις λύσεις μας, εξασφαλίζοντας υψηλή απόδοση και αποτελέσματα που ανταποκρίνονται στις προσδοκίες σας
          </p>
        </div>
  
        <div class="arrow">
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </div>
  
        <div class="process-step">
          <font-awesome-icon :icon="['fas', 'chart-line']" class="step-icon" />
          <h3 class="step-title">Reporting</h3>
          <p class="step-description">
            Παρέχουμε αναλυτικές αναφορές που σας επιτρέπουν να παρακολουθείτε την πρόοδο, να αξιολογείτε την απόδοση και να λαμβάνετε τεκμηριωμένες αποφάσεις για την επιχείρησή σας.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HowWeWork"
  };
  </script>
  
  <style scoped>
  .work-process-section {
    padding: 3rem 1rem;
    text-align: center;
    background-color: #1a2a3a;
    color: #ffffff;
  }
  
  .header {
    margin-bottom: 2rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #2f55d4;
    font-weight: bold;
  }
  
  .title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }
  
  .description {
    color: #90a4ae;
    font-size: 1rem;
    max-width: 600px;
    margin: 0 auto 2rem;
  }
  
  .process-steps {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
  }
  
  .process-step {
    text-align: center;
    max-width: 200px;
  }
  
  .step-icon {
    font-size: 3rem;
    color: #2f55d4;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
  }

  .step-icon:hover {
    color: #FFC947;
  }
  
  .step-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .step-description {
    font-size: 0.9rem;
    color: #b0bec5;
    line-height: 1.6;
  }
  
  .arrow {
    font-size: 1.5rem;
    color: #2f55d4;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .process-steps {
      flex-direction: column;
    }
  
    .arrow {
      display: none; /* Hide arrows on mobile */
    }
  }
  </style>
  