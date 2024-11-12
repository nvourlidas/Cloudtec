<template>
  <section class="services-section">
    <div class="services-list">
      <div class="service-card">
        <img src="@/assets/Online ads-rafiki.png" alt="investment" class="service-icon" />
        <h3 class="service-title">Ιστοσελίδες & eshop</h3>
        <p class="service-description"><b>Δημιουργήστε την online παρουσία που σας αξίζει!</b> Αναλαμβάνουμε την κατασκευή:
        </p>
        <ul>
          <li> <font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Eπαγγελματικών ιστοσελίδων</li>
          <li> <font-awesome-icon icon="gear" style="color: #FFC947 ;" /> eShops</li>
          <li><font-awesome-icon icon="gear" style="color: #FFC947 ;" /> SEO</li>
          <li><font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Bελτιστοποίηση για
            κινητά</li>
        </ul>
        <p class="service-description">Αποκτήστε μια ολοκληρωμένη λύση που προσελκύει πελάτες και αυξάνει τις πωλήσεις
          σας.</p>
        <button class="card-button"> + Περισσότερα</button>
      </div>

      <div class="service-card">
        <img src="@/assets/Work time-amico.png" alt="investment" class="service-icon" />
        <h3 class="service-title">Online Πλατφορμες</h3>
        <p class="service-description"><b>Οργανώστε την επιχείρησή σας, απλοποιήστε τη διαχείριση! </b>Δημιουργούμε
          εξατομικευμένες online πλατφόρμες για εύκολη διαχείριση:</p>
        <ul>
          <li> <font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Πελατών</li>
          <li> <font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Προϊόντων</li>
          <li> <font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Αποθεμάτων</li>
          <li> <font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Και οτιδήποτε άλλο χρειάζεται η επιχείρησή σου
          </li>
          <li> <font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Όλα σε ένα μέρος</li>
        </ul>
        <p class="service-description">Αναβαθμίστε τη λειτουργία της επιχείρησής σας με μια ολοκληρωμένη λύση που αυξάνει την
        παραγωγικότητα και σας δίνει τον έλεγχο σε κάθε στάδιο.</p>
        <button class="card-button"> + Περισσότερα</button>
      </div>

      <div class="service-card">
        <img src="@/assets/Catalogue-cuate.png" alt="investment" class="service-icon" />
        <h3 class="service-title">Mobile Apps</h3>
        <p class="service-description"><b>Αποκτήστε την εφαρμογή που χρειάζεται η επιχείρησή σας!</b> Αναλαμβάνουμε την
          κατασκευή εφαρμογών:</p>
        <ul>
          <li> <font-awesome-icon icon="gear" style="color: #FFC947 ;" /> Android</li>
          <li> <font-awesome-icon icon="gear" style="color: #FFC947 ;" /> iOS</li>
        </ul>
        <p class="service-description">Δημιουργούμε
        custom mobile apps που ενισχύουν την εμπειρία του χρήστη, αυξάνουν την αφοσίωση και σας φέρνουν πιο κοντά στο
        κοινό σας. Κάντε το πρώτο βήμα στην ανάπτυξη της επιχείρησής σας στον mobile κόσμο!</p>
        <button class="card-button"> + Περισσότερα</button>
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
  padding: 6rem;
  text-align: center;
  height: fit-content;
  background-color: #253649 !important;
}

.services-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.services-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.service-card {
  padding: 1rem;
  background-color: #1f2d3d;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
  font-size: 2rem;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  width: 30%;

  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #FFC947;
}

.service-description {
  color: #fff;
}

ul {
  list-style: none;
  color: #fff;
  text-align: left;
  font-size: 1.25rem;
}

li {
  padding: 0.3rem;
}

.card-button {
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #2f55d4;
  color: #fff;
  font-size: 1rem;
  padding: .5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
  cursor: pointer;
}

.service-card:hover {
  border-color: #2f55d4;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.service-card:hover .card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
}

@media (max-width: 768px) {
  .services-section {
    height: auto;
    /* width:fit-content; */
    padding: 3rem;

  }

  .service-card {
    width: 70%;
  }

  @media (max-width: 360px) {
    .services-list {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .service-card {
      font-size: 1rem;
    }

    ul {
      font-size: 1rem;
    }
  }

}
</style>