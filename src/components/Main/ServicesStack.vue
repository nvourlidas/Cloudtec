<template>
  <section class="services-section">
    <div class="services-container">
      <header class="services-header">
        <!-- ✅ SEO: πιο στοχευμένο H2 -->
        <h2 class="services-heading">Υπηρεσίες Ανάπτυξης Λογισμικού</h2>

        <p class="services-subheading">
          Χτίζουμε σύγχρονες λύσεις για να αποκτήσεις πελάτες, να οργανώσεις διαδικασίες και να αναπτυχθείς.
        </p>

        <!-- ✅ SEO: internal links (soft) -->
        <p class="services-subheading" style="margin-top: 10px; font-size: 0.98rem;">
          Δημοφιλή:
          <router-link class="seo-link" to="/services/websites">Ιστοσελίδες</router-link>
          ·
          <router-link class="seo-link" to="/services/eshops">eShop</router-link>
          ·
          <router-link class="seo-link" to="/services/webapps">Web Apps</router-link>
          ·
          <router-link class="seo-link" to="/services/mobileapps">Mobile Apps</router-link>
        </p>
      </header>

      <div class="services-list">
        <div class="service-card">
          <!-- ✅ SEO: proper alt -->
          <img
            src="@/assets/Online ads-rafiki.svg"
            alt="Κατασκευή ιστοσελίδων και eShop για επιχειρήσεις"
            class="service-icon"
          />

          <h3 class="service-title">Ιστοσελίδες & eShop</h3>
          <p class="service-description">
            <b>Δημιουργήστε την online παρουσία που σας αξίζει!</b> Αναλαμβάνουμε την κατασκευή:
          </p>
          <ul>
            <li><font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Επαγγελματικών ιστοσελίδων</li>
            <li><font-awesome-icon icon="gear" style="color: #FFC947 ;" /> eShops</li>
            <li><font-awesome-icon icon="gear" style="color: #FFC947 ;" /> SEO</li>
            <li><font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Βελτιστοποίηση για κινητά</li>
          </ul>
          <p class="service-description">
            Αποκτήστε μια ολοκληρωμένη λύση που προσελκύει πελάτες και αυξάνει τις πωλήσεις σας.
          </p>

          <!-- ✅ SEO: descriptive link text -->
          <router-link to="/services/websites" class="card-button" aria-label="Δείτε περισσότερα για κατασκευή ιστοσελίδων">
            <font-awesome-icon icon="chevron-up" /> Δείτε Ιστοσελίδες
          </router-link>
        </div>

        <div class="service-card">
          <img
            src="@/assets/Work time-amico.svg"
            alt="Ανάπτυξη web εφαρμογών και online πλατφορμών για επιχειρήσεις"
            class="service-icon"
          />

          <h3 class="service-title">Online Πλατφόρμες</h3>
          <p class="service-description">
            <b>Οργανώστε την επιχείρησή σας, απλοποιήστε τη διαχείριση!</b>
            Δημιουργούμε εξατομικευμένες online πλατφόρμες για εύκολη διαχείριση:
          </p>
          <ul>
            <li><font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Πελατών</li>
            <li><font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Προϊόντων</li>
            <li><font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Αποθεμάτων</li>
            <li>
              <font-awesome-icon icon="gear" style="color: #FFC947 ;" />
              Και οτιδήποτε άλλο χρειάζεται η επιχείρησή σου
            </li>
            <li><font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Όλα σε ένα μέρος</li>
          </ul>
          <p class="service-description">
            Αναβαθμίστε τη λειτουργία της επιχείρησής σας με μια λύση που αυξάνει την παραγωγικότητα
            και σας δίνει τον έλεγχο σε κάθε στάδιο.
          </p>

          <router-link to="/services/webapps" class="card-button" aria-label="Δείτε περισσότερα για web εφαρμογές και online πλατφόρμες">
            <font-awesome-icon icon="chevron-up" /> Δείτε Web Apps
          </router-link>
        </div>

        <div class="service-card">
          <img
            src="@/assets/Catalogue-cuate.svg"
            alt="Ανάπτυξη mobile εφαρμογών για Android και iOS"
            class="service-icon"
          />

          <h3 class="service-title">Mobile Apps</h3>
          <p class="service-description">
            <b>Αποκτήστε την εφαρμογή που χρειάζεται η επιχείρησή σας!</b> Αναλαμβάνουμε την κατασκευή εφαρμογών:
          </p>
          <ul>
            <li><font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Android</li>
            <li><font-awesome-icon icon="gear" style="color: #FFC947 ;" /> iOS</li>
          </ul>
          <p class="service-description">
            Δημιουργούμε custom mobile apps που ενισχύουν την εμπειρία του χρήστη, αυξάνουν την αφοσίωση
            και σας φέρνουν πιο κοντά στο κοινό σας.
          </p>

          <router-link to="/services/mobileapps" class="card-button" aria-label="Δείτε περισσότερα για ανάπτυξη mobile εφαρμογών">
            <font-awesome-icon icon="chevron-up" /> Δείτε Mobile Apps
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "ServicesStack",
};
</script>

<style scoped>
.services-section {
  padding: clamp(3rem, 6vw, 6rem);
  background-color: #253649 !important;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-header {
  text-align: center;
  margin-bottom: 2.2rem;
}

.services-heading {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 800;
  letter-spacing: 0.2px;
  color: #fff;
  margin: 0 0 0.6rem;
}

.services-subheading {
  margin: 0 auto;
  max-width: 760px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.05rem;
  line-height: 1.6;
}

/* GRID */
.services-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.6rem;
  align-items: stretch;
}

/* CARD */
.service-card {
  position: relative;
  /* important (was missing) */
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  padding: 1.25rem 1.25rem 1.1rem;
  background: linear-gradient(180deg, rgba(31, 45, 61, 0.96), rgba(31, 45, 61, 0.86));
  border-radius: 16px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);

  text-align: left;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: rgba(47, 85, 212, 0.9);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.32);
}

.service-icon {
  width: min(140px, 45%);
  margin: 0 auto;
  display: block;
}

.service-title {
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0;
  color: #FFC947;
  text-align: center;
}

.service-description {
  color: rgba(255, 255, 255, 0.88);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0.2rem 0 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
}

li {
  padding: 0.25rem 0;
  display: flex;
  gap: 0.55rem;
  align-items: flex-start;
}

/* CTA */
.card-button {
  margin-top: auto;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background-color: rgba(47, 85, 212, 0.95);
  color: #fff;

  font-size: 1.05rem;
  font-weight: 700;
  padding: 0.8rem 1rem;

  cursor: pointer;
  opacity: 0.92;

  text-decoration: none; /* important for <a> */
  line-height: 1;        /* fixes “icon + text” vertical weirdness */
}


.service-card:hover .card-button {
  transform: translateY(-2px);
  opacity: 1;
}

.card-button:hover {
  color: #FFC947;
  background-color: rgba(47, 85, 212, 0.25);
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


/* RESPONSIVE */
@media (max-width: 768px) {
  .services-header {
    margin-bottom: 1.6rem;
  }
}
</style>