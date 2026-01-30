<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Χτίζουμε λογισμικό που <span class="success">αποδίδει</span></h1>
      <p class="hero-subtitle">Custom web και mobile εφαρμογές σχεδιασμένες για απόδοση, ασφάλεια και ανάπτυξη.</p>
      <!-- <button class="hero-button">Ανακάλυψέ το</button> -->
      <div class="hero-cta">
        <InputButton />

        <div class="hero-newsletter-info">
          <span class="hero-info-icon">ⓘ</span>
          <span class="hero-info-tooltip">Εγγραφείτε στο newsletter μας</span>
        </div>
      </div>

    </div>
    <div class="hero-image">
      <img src="@/assets/Launching-pana.svg" alt="CloudTec ανάπτυξη web και mobile εφαρμογών για επιχειρήσεις" />
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

<style>
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
  color: #9bacc4;
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
  max-width: 80%;
  /* Brings image closer to text */
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.hero-cta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

/* info icon */
.hero-newsletter-info {
  position: relative;
  display: flex;
  align-items: center;
}

.hero-info-icon {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.65);
  cursor: default;
}

/* tooltip */
.hero-info-tooltip {
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);

  background-color: #1a2a3a;
  color: #fff;
  font-size: 0.8rem;

  padding: 0.45rem 0.6rem;
  border-radius: 6px;
  white-space: nowrap;

  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.hero-newsletter-info:hover .hero-info-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
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

  .hero-title {
    font-size: 2rem;
  }

  .hero-button {
    margin-bottom: 7%;
  }

  .hero-image {
    width: 100%;
    margin-left: 10%;
  }
}
</style>