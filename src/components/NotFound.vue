<template>
  <section class="not-found">
    <div class="container">
      <h1>404</h1>
      <h2>Η σελίδα δεν βρέθηκε</h2>

      <p class="muted">
        Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.
      </p>

      <div class="actions">
        <router-link to="/" class="cta-primary">Αρχική Σελίδα</router-link>
        <router-link to="/contact" class="cta-secondary">Επικοινωνία</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFoundPage',
};
</script>

<style scoped>
.not-found {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  flex-direction: column;
}

.not-found h1 {
  font-size: 5rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  color: #FFC947;
}

.not-found h2 {
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
  color: #FFC947;
}

.muted {
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.5rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary,
.cta-secondary {
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
}

.cta-primary {
  background: #2f55d4;
  color: #fff;
}

.cta-secondary {
  background: #eee;
  color: #333;
}
</style>
