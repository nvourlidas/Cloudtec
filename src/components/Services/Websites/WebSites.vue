<template>
  <div class="web-dev-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Κατασκευή Ιστοσελίδων</h1>
        <p>
          Ενδυναμώστε την επιχείρησή σας με λύσεις αιχμής στο διαδίκτυο. Από αποκριτικά σχέδια έως ισχυρή
          λειτουργικότητα, δημιουργούμε ιστότοπους που οδηγούν στην επιτυχία.
        </p>

      </div>
      <div class="hero-image">
        <img src="@/assets/Software engineer-amico.svg" alt="Web Development" />
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <h2>Υπηρεσίες Κατασκευής Ιστοσελίδων</h2>
      <div class="services-grid">
        <div class="service-card">
          <font-awesome-icon :icon="['fas', 'desktop']" class="service-icon" />
          <h3>Προσαρμοσμένος Σχεδιασμός</h3>
          <div class="card__content">
            <p class="card__title">Προσαρμοσμένος Σχεδιασμός</p>
            <p class="card__description">Δημιουργούμε εξατομικευμένα websites που αντικατοπτρίζουν την ταυτότητα της
              επιχείρησής σας, συνδυάζοντας καινοτόμο σχεδιασμό με υψηλή λειτουργικότητα για μια μοναδική εμπειρία
              χρήστη.
            </p>
          </div>
        </div>
        <div class="service-card">
          <font-awesome-icon :icon="['fas', 'screwdriver-wrench']" class="service-icon" />
          <h3>Συντήρηση και Υποστήριξη</h3>

          <div class="card__content">
            <p class="card__title">Συντήρηση και Υποστήριξη</p>
            <p class="card__description">Προσφέρουμε υπηρεσίες συντήρησης και υποστήριξης για την ιστοσελίδα σας,
              διασφαλίζοντας την απρόσκοπτη λειτουργία, την ασφάλεια και την έγκαιρη επίλυση προβλημάτων.
            </p>
          </div>
        </div>
        <div class="service-card">
          <font-awesome-icon :icon="['fab', 'google']" class="service-icon" />
          <h3>SEO</h3>

          <div class="card__content">
            <p class="card__title">SEO</p>
            <h6>"Βελτιστοποίηση Μηχανών Αναζήτησης"</h6>
            <p class="card__description">Αναβαθμίζουμε την παρουσία σας στο διαδίκτυο με προηγμένες υπηρεσίες SEO,
              εξασφαλίζοντας υψηλότερη κατάταξη στις μηχανές αναζήτησης,
              αυξημένη επισκεψιμότητα και περισσότερους πελάτες για την επιχείρησή σας.
            </p>
          </div>
        </div>
        <div class="service-card">
          <font-awesome-icon :icon="['fas', 'mobile-alt']" class="service-icon" />
          <h3>Σχεδιασμός για κινητά</h3>
          <div class="card__content">
            <p class="card__title">Σχεδιασμός για κινητά</p>
            <p class="card__description">Δημιουργούμε ιστοσελίδες με σχεδιασμό φιλικό προς κινητές συσκευές,
              εξασφαλίζοντας άψογη εμφάνιση και λειτουργικότητα σε κάθε οθόνη.
            </p>
          </div>
        </div>
      </div>
      <ul class="services-list">
        <li v-for="(service, index) in services" :key="index" class="service-item">
          <font-awesome-icon :icon="service.icon" class="service-icon2" />
          <div class="service-content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </li>
      </ul>
    </section>

    <div class="why-choose-us-section">
      <h2>Γιατί Εμάς;</h2>
      <div class="usp-grid">
        <div class="usp-card">
          <font-awesome-icon :icon="['fas', 'star']" class="usp-icon" />
          <h3>Εξειδίκευση</h3>
          <p>Χρόνια εμπειρίας στην παροχή εξαιρετικών διαδικτυακών λύσεων σε διάφορους τομείς.</p>
        </div>
        <div class="usp-card">
          <font-awesome-icon :icon="['fas', 'rocket']" class="usp-icon" />
          <h3>Καινοτομία</h3>
          <p>Πάντα μπροστά από τις τάσεις, χρησιμοποιούμε τις πιο πρόσφατες τεχνολογίες για τη δημιουργία προηγμένων
            ιστοσελίδων.</p>
        </div>
        <div class="usp-card">
          <font-awesome-icon :icon="['fas', 'handshake']" class="usp-icon" />
          <h3>Προσανατολισμός στον Πελάτη</h3>
          <p>Οι στόχοι σας είναι η προτεραιότητά μας. Συνεργαζόμαστε στενά για να καλύψουμε τις μοναδικές σας ανάγκες.
          </p>
        </div>
        <div class="usp-card">
          <font-awesome-icon :icon="['fas', 'thumbs-up']" class="usp-icon" />
          <h3>Διασφάλιση Ποιότητας</h3>
          <p>Κάθε έργο δοκιμάζεται για να εξασφαλιστεί κορυφαία απόδοση, ασφάλεια και επεκτασιμότητα.</p>
        </div>
      </div>
    </div>


    <!-- Call-to-Action Section -->
    <section class="cta-section">
      <h2>Έτοιμοι να Αναβαθμίσετε την Ιστοσελίδα σας;</h2>
      <p>Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε το έργο σας και να λάβετε δωρεάν προσφορά!</p>
      <button class="cta-button2"><router-link to="/contact"> <font-awesome-icon icon="phone" class="icons"/> Επικοινωία </router-link></button>
    </section>

  </div>
</template>

<script>
export default {
  name: "WebDevelopment",
  data() {
    return {
      services: [
        {
          icon: ["fab", "wordpress"],
          title: "CMS Integration",
          description: "Ενσωμάτωση συστημάτων διαχείρισης περιεχομένου (π.χ., WordPress, Joomla, Drupal).",
        },
        {
          icon: ["fas", "server"],
          title: "Web Hosting & Domain Registration",
          description: "Παροχή φιλοξενίας και κατοχύρωσης domain name.",
        },
        {
          icon: ["fas", "tachometer-alt"],
          title: "Speed Optimization",
          description: "Βελτιστοποίηση της ταχύτητας φόρτωσης της ιστοσελίδας.",
        },
        {
          icon: ["fas", "user-circle"],
          title: "UI/UX Design",
          description: "Σχεδιασμός ελκυστικής εμπειρίας χρήστη και φιλικού περιβάλλοντος πλοήγησης.",
        },
        {
          icon: ["fas", "language"],
          title: "Multi-Language Support",
          description: "Δημιουργία ιστοσελίδων με δυνατότητα πολλαπλών γλωσσών.",
        },
        {
          icon: ["fas", "chart-pie"],
          title: "Analytics Integration",
          description: "Ενσωμάτωση εργαλείων παρακολούθησης (Google Analytics) για ανάλυση επισκεψιμότητας.",
        },
        {
          icon: ["fas", "shield-alt"],
          title: "Security Enhancements",
          description: "Προστασία της ιστοσελίδας από κακόβουλες επιθέσεις και πιστοποιητικά SSL.",
        },
        {
          icon: ["fas", "file-alt"],
          title: "Content Creation",
          description: "Δημιουργία και εισαγωγή κειμένων, εικόνων, και πολυμέσων.",
        },
        {
          icon: ["fas", "blog"],
          title: "Blog Integration",
          description: "Προσθήκη και διαμόρφωση ενότητας blog για δημοσίευση περιεχομένου.",
        },
        {
          icon: ["fas", "share-alt"],
          title: "Social Media Integration",
          description: "Διασύνδεση ιστοσελίδας με social media πλατφόρμες.",
        },
      ],
    };
  },
};
</script>


<style scoped>
/* General Page Styling */
.web-dev-page {
  color: #fff;
  line-height: 1.6;
}

/* Hero Section */
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

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}



.hero-image {
  width: 50%;
}

.hero-image img {
  max-width: 400px;
  min-width: 100px;
  height: auto;
}

/* Services Section */
.services-section {
  padding: 7rem 1rem;
  text-align: center;


}

.services-section h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

}

.service-card {
  background-color: #1f2d3d;
  padding: 2rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 0 0 3px #2f55d4;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.service-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.service-icon {
  font-size: 3rem;
  color: #FFC947;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin: 1rem 0;
}


.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #1f2d3d;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.service-card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 1.7rem;
  color: #FFC947;
  font-weight: 700;
}

.service-card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 0;
  font-size: 1.2rem;
  color: #fff;
  line-height: 1.4;
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 800px;
  margin-top: 5rem;
}

.service-item {
  display: flex;
  align-items: center;
  justify-content: baseline;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #1f2d3d;
  border-radius: 8px;
  box-shadow: 0px 7px 12px rgba(0, 0, 0, 0.459);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.service-icon2 {
  font-size: 3rem;
  color: #FFC947;
  margin-right: 1rem;
}

.service-content {
  text-align: left;
}

.service-content h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.5rem;
}

.service-content p {
  font-size: 1rem;
  color: #fff;
  line-height: 1.6;
}



/* Call-to-Action Section */
.cta-section {
  padding: 2rem;
  text-align: center;
  background-color: #2f55d4;
  color: #fff;
}

.cta-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #fff;
}

.cta-button2 a{
  text-decoration: none;
  color: inherit; 
  background: none;
}

.cta-button2 {
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #0A1931;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
  font-size: 1.3rem;
 
}

.cta-button2:hover {
  background-color: #FFC947;
  color: #0A1931;
}

.why-choose-us-section {
  padding: 2rem;
  margin: 2rem;
  text-align: center;
}

.why-choose-us-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.usp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.usp-card {
  background-color: #1f2d3d;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #fff;
  box-shadow: 0 0 0 1px #e6e6e6;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.usp-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.usp-icon {
  font-size: 2rem;
  color: #FFC947;
  margin-bottom: 1rem;
}

.usp-card h3 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.usp-card p {
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.4;
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

  .hero-image{
    width: 100%;
    margin-left: 10%;
  }
}
</style>