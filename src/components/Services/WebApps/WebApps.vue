<template>
  <div class="webapps-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-content">
        <!-- ✅ SEO: πιο στοχευμένο H1 keyword -->
        <h1>Κατασκευή Web Apps για Επιχειρήσεις</h1>

        <p>
          Χτίζουμε custom web εφαρμογές (CRM, κρατήσεις, dashboards, portals) που οργανώνουν την επιχείρησή σου,
          αυτοματοποιούν διαδικασίες και δίνουν καθαρή εικόνα με δεδομένα σε πραγματικό χρόνο.
        </p>

        <div class="hero-cta">
          <router-link class="cta-primary" to="/contact">Ζητήστε Προσφορά</router-link>
          <a class="cta-secondary" href="#demo">Δείτε Demo</a>
        </div>

        <!-- ✅ SEO: internal links (soft) -->
        <p class="muted">
          Δείτε επίσης:
          <router-link class="seo-link" to="/services/mobileapps">Mobile Apps</router-link>
          ·
          <router-link class="seo-link" to="/services/dataanalysis">Data Analysis</router-link>
          ·
          <router-link class="seo-link" to="/services/websites">Ιστοσελίδες</router-link>
        </p>
      </div>

      <div class="hero-image">
        <!-- ✅ SEO: πιο περιγραφικό alt -->
        <img src="@/assets/Data extraction-cuate.svg"
          alt="Κατασκευή web εφαρμογών για επιχειρήσεις (CRM, dashboards, portals)" />
      </div>
    </section>

    <!-- WHAT IS -->
    <section class="section">
      <div class="container two-col">
        <div>
          <h2>Τι είναι μια Web App;</h2>
          <p class="muted">
            Μια web εφαρμογή είναι ένα “εργαλείο εργασίας” στο browser: CRM, κρατήσεις, αποθήκη,
            τιμολόγηση, dashboards, portals πελατών, διαχείριση προσωπικού. Δεν είναι απλά site —
            είναι λειτουργικό σύστημα για την επιχείρησή σου.
          </p>
        </div>

        <div class="info-cards">
          <div class="info-card">
            <div class="info-title">Προσβάσιμη παντού</div>
            <div class="info-text">PC, tablet, κινητό — χωρίς εγκαταστάσεις.</div>
          </div>
          <div class="info-card">
            <div class="info-title">Αυτοματισμοί</div>
            <div class="info-text">Μειώνει λάθη και χρόνο με ροές εργασίας.</div>
          </div>
          <div class="info-card">
            <div class="info-title">Δεδομένα & Έλεγχος</div>
            <div class="info-text">Dashboards, αναφορές, KPIs, alerts.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ✅ SEO: Use cases section -->
    <section class="section">
      <div class="container">
        <h2>Τι Web Apps αναπτύσσουμε</h2>
        <div class="why-grid">
          <div class="why-card">
            <div class="why-title">CRM & Διαχείριση Πελατών</div>
            <div class="why-text">Πελάτες, leads, ιστορικό επικοινωνίας, tasks, reminders.</div>
          </div>
          <div class="why-card">
            <div class="why-title">Κρατήσεις & Ραντεβού</div>
            <div class="why-text">Ημερολόγιο, διαθεσιμότητες, αυτοματοποιημένες ειδοποιήσεις.</div>
          </div>
          <div class="why-card">
            <div class="why-title">Dashboards & Αναφορές</div>
            <div class="why-text">KPIs, reports και real-time εικόνα της επιχείρησης.</div>
          </div>
          <div class="why-card">
            <div class="why-title">Portals Πελατών / Συνεργατών</div>
            <div class="why-text">Login, αρχεία, αιτήματα, συμβάσεις, παρακολούθηση υποθέσεων.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- DEMO APP -->
    <section class="demo-section" id="demo">
      <MockAdminDemo />
    </section>

    <!-- WHY -->
    <section class="section">
      <div class="container">
        <h2>Γιατί μια επιχείρηση χρειάζεται Web App</h2>
        <div class="why-grid">
          <div class="why-card">
            <div class="why-title">Οργάνωση</div>
            <div class="why-text">Ένα σημείο για πελάτες, εργασίες, πωλήσεις, αποθήκη.</div>
          </div>
          <div class="why-card">
            <div class="why-title">Αυτοματισμοί</div>
            <div class="why-text">Workflows, approvals, ειδοποιήσεις, ρόλοι/δικαιώματα.</div>
          </div>
          <div class="why-card">
            <div class="why-title">Μετρήσιμα αποτελέσματα</div>
            <div class="why-text">Dashboards, KPIs, reports για καλύτερες αποφάσεις.</div>
          </div>
          <div class="why-card">
            <div class="why-title">Κλιμάκωση</div>
            <div class="why-text">Η εφαρμογή μεγαλώνει μαζί με την επιχείρηση.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ✅ SEO: Process / trust section -->
    <section class="section">
      <div class="container">
        <div>
          <h2>Πώς δουλεύουμε στην CloudTec</h2>
        </div>
        <div class="why-grid">
          <div class="why-card">
            <div class="why-title">Ανάλυση & Προδιαγραφές</div>
            <div class="why-text">Καταγράφουμε ανάγκες, ροές και στόχους πριν γράψουμε κώδικα.</div>
          </div>
          <div class="why-card">
            <div class="why-title">UI/UX & Prototype</div>
            <div class="why-text">Σχεδιάζουμε καθαρή εμπειρία χρήστη και δοκιμάζουμε τη ροή.</div>
          </div>
          <div class="why-card">
            <div class="why-title">Υλοποίηση & Ασφάλεια</div>
            <div class="why-text">Ρόλοι, permissions, backups και σωστή αρχιτεκτονική.</div>
          </div>
          <div class="why-card">
            <div class="why-title">Παράδοση & Υποστήριξη</div>
            <div class="why-text">Σταθερότητα, monitoring και βελτιώσεις με βάση δεδομένα.</div>
          </div>
        </div>

        <div>
          <p class="muted">
            Θες να δεις και άλλες λύσεις;
            <router-link class="seo-link" to="/services/mobileapps">Mobile Apps</router-link>
            ή
            <router-link class="seo-link" to="/services/dataanalysis">Data Analysis</router-link>.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container cta-inner">
        <div>
          <h2>Θες μια Web App κομμένη και ραμμένη στις ανάγκες σου;</h2>
          <p>Πες μας τι θες να αυτοματοποιήσεις και θα σου προτείνουμε την καλύτερη λύση.</p>
        </div>
        <router-link class="cta-primary big" to="/contact">Μιλήστε μαζί μας</router-link>
      </div>
    </section>
  </div>
</template>


<script>
import MockAdminDemo from './MockAdminDemo.vue';

export default {
  name: 'WebAppsService',
  components: { MockAdminDemo },
};
</script>

<style scoped>
.webapps-page {
  background: #253649;
  color: #fff;
}

/* shared */
.section {
  padding: clamp(3rem, 6vw, 6rem) 1.5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
}

.muted {
  color: rgba(255, 255, 255, 0.75);
}

.strong {
  font-weight: 900;
}

/* HERO */
.hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(3rem, 6vw, 6rem) 1.5rem;

  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 2.2rem;
  align-items: center;
}

.hero-content h1 {
  font-size: clamp(2.1rem, 3.2vw, 2.8rem);
  margin: 0 0 0.9rem;
  font-weight: 900;
}

.hero-content p {
  margin: 0 0 1.4rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.78);
}

.hero-cta {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.cta-primary,
.cta-secondary {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.8rem 1.2rem;
  font-weight: 900;
}

.cta-primary {
  background: rgba(47, 85, 212, 0.95);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.cta-secondary {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
}

.cta-primary.big {
  padding: 0.95rem 1.35rem;
}

.hero-image img {
  width: min(520px, 100%);
  filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.28));
}

/* WHAT IS */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.info-cards {
  display: grid;
  gap: 0.9rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: 1rem;
}

.info-title {
  font-weight: 900;
  margin-bottom: 0.25rem;
}

.info-text {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}



/* WHY */
.why-grid {
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.9rem;
}

.why-card {
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  padding: 1rem;
}

.why-title {
  font-weight: 900;
  margin-bottom: 0.35rem;
}

.why-text {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}

/* CTA */
.cta {
  padding: 3rem 1.5rem;
  background: rgba(47, 85, 212, 0.92);
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
}

.cta-inner p {
  color: rgba(255, 255, 255, 0.88);
  margin: 0.5rem 0 0;
  line-height: 1.6;
}

.demo-section {
  width: min(90%, 1800px);
  margin: 0 auto;

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


/* responsive */
@media (max-width: 980px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-cta {
    justify-content: center;
  }

  .two-col {
    grid-template-columns: 1fr;
  }

  .mock-app {
    grid-template-columns: 1fr;
  }

  .mock-sidebar {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
  }

  .metrics {
    grid-template-columns: 1fr;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .why-grid {
    grid-template-columns: 1fr 1fr;
  }

  .cta-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
