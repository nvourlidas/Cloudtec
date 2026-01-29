<!-- src/pages/AboutUsPage.vue -->
<template>
  <div class="about-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-left">
          <p class="kicker">CloudTec • Digital Solutions</p>
          <h1 class="hero-title">Ποιοι Είμαστε</h1>

          <p class="hero-subtitle">
            Καλώς ήρθατε στην CloudTec! Είμαστε μια νέα εταιρία ψηφιακών λύσεων, με πάθος να δίνουμε ζωή σε καινοτόμες
            ιδέες μέσω της τεχνολογίας. Ιδρύσαμε την CloudTec με όραμα να ενδυναμώσουμε επιχειρήσεις κάθε μεγέθους,
            προσφέροντας εξειδικευμένες λύσεις.
          </p>

          <p class="hero-subtitle">
            Στην CloudTec, πιστεύουμε στη δημιουργία διαρκών συνεργασιών με τους πελάτες μας, παρέχοντας ειλικρινείς,
            ποιοτικές υπηρεσίες και υποστήριξη. Ας προχωρήσουμε μαζί και ας ανακαλύψουμε το μέλλον της ψηφιακής
            καινοτομίας για την επιχείρησή σας!
          </p>

          <div class="hero-cta">
            <router-link class="btn primary" to="/contact">Επικοινωνία</router-link>
          </div>

          <div class="hero-badges">
            <span class="badge">Websites</span>
            <span class="badge">eShops</span>
            <span class="badge">CRM</span>
            <span class="badge">Mobile Apps</span>
            <span class="badge">Data Analysis</span>
          </div>
        </div>

        <!-- RIGHT: interactive process -->
        <div class="hero-right">
          <div class="process-card">
            <div class="process-header">
              <div class="process-title">Διαφανής ροή από την ιδέα μέχρι την παράδοση</div>
            </div>

            <div class="process-steps">
              <button class="step" type="button" :class="{ active: activeStep === 'analysis' }"
                @click="setStep('analysis')">
                <span class="dot"></span>
                <span class="step-text">
                  <span class="step-title">Ανάλυση</span>
                  <span class="step-desc">Στόχοι, ανάγκες, scope</span>
                </span>
              </button>

              <button class="step" type="button" :class="{ active: activeStep === 'design' }"
                @click="setStep('design')">
                <span class="dot"></span>
                <span class="step-text">
                  <span class="step-title">Σχεδιασμός</span>
                  <span class="step-desc">UI/UX και αρχιτεκτονική</span>
                </span>
              </button>

              <button class="step" type="button" :class="{ active: activeStep === 'build' }" @click="setStep('build')">
                <span class="dot"></span>
                <span class="step-text">
                  <span class="step-title">Ανάπτυξη</span>
                  <span class="step-desc">Iterative υλοποίηση</span>
                </span>
              </button>

              <button class="step" type="button" :class="{ active: activeStep === 'delivery' }"
                @click="setStep('delivery')">
                <span class="dot"></span>
                <span class="step-text">
                  <span class="step-title">Παράδοση</span>
                  <span class="step-desc">Testing & launch</span>
                </span>
              </button>

              <button class="step" type="button" :class="{ active: activeStep === 'support' }"
                @click="setStep('support')">
                <span class="dot"></span>
                <span class="step-text">
                  <span class="step-title">Υποστήριξη</span>
                  <span class="step-desc">Monitoring & βελτιώσεις</span>
                </span>
              </button>
            </div>

            <div class="process-detail">
              <div class="detail-title">{{ stepContent.title }}</div>
              <div class="detail-text">{{ stepContent.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR TEAM -->
    <section class="team">
      <div class="container">
        <div class="team-head">
          <div>
            <h2 class="h2">Our Team</h2>
            <p class="p muted">
              Μια μικρή ομάδα με ισχυρό πάθος για τεχνολογία, design και αποτελέσματα. Εδώ είναι οι άνθρωποι πίσω από
              την
              CloudTec.
            </p>
          </div>

          <router-link class="btn ghost" to="/contact">Θες να συνεργαστούμε;</router-link>
        </div>

        <div class="team-grid">
          <TeamMemberCard v-for="m in team" :key="m.id" :name="m.name" :role="m.role" :description="m.description"
            :photo="m.photo" :linkedin="m.linkedin" :github="m.github" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="final-cta">
      <div class="container cta-box">
        <div>
          <h2 class="h2">Θες να χτίσουμε κάτι δυνατό μαζί;</h2>
          <p class="p muted">
            Πες μας τι χρειάζεσαι και σου προτείνουμε λύση με ξεκάθαρα βήματα, χρονοδιάγραμμα και παραδοτέα.
          </p>
        </div>
        <router-link class="btn primary" to="/contact">Επικοινωνία</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import TeamMemberCard from './TeamMemberCard.vue';

export default {
  name: 'AboutUsPage',
  components: { TeamMemberCard },
  data() {
    return {
      activeStep: 'analysis',
      steps: {
        analysis: {
          title: 'Ανάλυση',
          text: 'Καταγράφουμε ανάγκες και στόχους, ορίζουμε scope και προτείνουμε λύση με ξεκάθαρα παραδοτέα.',
        },
        design: {
          title: 'Σχεδιασμός',
          text: 'Ορίζουμε UX ροές και UI, και “κλειδώνουμε” την αρχιτεκτονική ώστε η υλοποίηση να είναι σωστή από την αρχή.',
        },
        build: {
          title: 'Ανάπτυξη',
          text: 'Υλοποιούμε σε μικρά, σταθερά βήματα με συνεχή έλεγχο. Παραδίδουμε συχνά για feedback και βελτιώσεις.',
        },
        delivery: {
          title: 'Παράδοση',
          text: 'Testing, βελτιστοποίηση απόδοσης και launch. Παραδίδουμε documentation και οδηγίες χρήσης όπου χρειάζεται.',
        },
        support: {
          title: 'Υποστήριξη',
          text: 'Παρακολούθηση, διορθώσεις, νέα features και συνεχή βελτίωση. Είμαστε δίπλα σου και μετά το launch.',
        },
      },

      team: [
        {
          id: '1',
          name: 'Νίκος Βουρλίδας',
          role: 'Full-Stack Developer',
          description: 'MSc Μηχανικός Πληροφορικής και Τηλεπικοινωνιών με εξειδίκευση στην ανάπτυξη web εφαρμογών και υπηρεσιών.',
          photo: require('@/assets/vour.png'),
          linkedin: 'https://www.linkedin.com/in/nikos-vourlidas-715690204/',
          github: 'https://github.com/nvourlidas',
        },
        {
          id: '2',
          name: 'Κωνσταντίνος Δαντσάκης.',
          role: 'Full-Stack Developer',
          description: 'MSc Μηχανικός Πληροφορικής και Τηλεπικοινωνιών με εξειδίκευση στην ανάπτυξη android εφαρμογών.',
          photo: require('@/assets/dants.jpg'),
          linkedin: 'https://www.linkedin.com/in/konstantinos-dantsakis-21183416b/',
          github: 'https://github.com/KonstDantsakis',
        },
      ],
    };
  },
  computed: {
    stepContent() {
      return this.steps[this.activeStep] || this.steps.analysis;
    },
  },
  methods: {
    setStep(stepKey) {
      this.activeStep = stepKey;
    },
  },
};
</script>

<style scoped>
/* ---------------- Base ---------------- */
.about-page {
  background: #1f2d3d;
  color: #ffffff;
}

.container {
  width: min(1100px, 92%);
  margin: 0 auto;
  flex-direction: column;
}

.h2 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 0.75rem;
  letter-spacing: -0.02em;
}

.p {
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
}

.muted {
  color: #b0bec5;
}

/* ---------------- Buttons ---------------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.1rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 800;
  border: 1px solid rgba(47, 85, 212, 0.35);
  transition: transform 0.15s ease, border-color 0.2s ease, background 0.2s ease;
  user-select: none;
}

.btn:hover {
  transform: translateY(-1px);
  border-color: rgba(100, 181, 246, 0.55);
}

.btn.primary {
  background: #2f55d4;
  color: #ffffff;
  border-color: rgba(47, 85, 212, 0.8);
}

.btn.primary:hover {
  background: #2446b7;
}

.btn.ghost {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.12);
}

/* ---------------- HERO ---------------- */
.hero {
  background: radial-gradient(900px 400px at 50% 0%, rgba(47, 85, 212, 0.28), transparent 60%),
    radial-gradient(700px 380px at 90% 10%, rgba(255, 201, 71, 0.2), transparent 55%), #1f2d3d;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4rem 0 2.75rem;
}

.hero-inner {
  width: min(1200px, 92%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 2.2rem;
  align-items: center;
}

.kicker {
  color: #b0bec5;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin: 0 0 0.75rem;
}

.hero-title {
  font-size: 3rem;
  margin: 0 0 0.75rem;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  color: #d6e0e7;
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 0 1rem;
}

.hero-cta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin: 1.1rem 0 1.1rem;
}

.hero-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  font-size: 0.9rem;
  color: #b0bec5;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
}

/* ---------------- Process Card ---------------- */
.process-card {
  width: min(520px, 100%);
  border-radius: 16px;
  padding: 1.2rem;
  background: linear-gradient(180deg, rgba(31, 45, 61, 0.96), rgba(31, 45, 61, 0.82));
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);
}

.process-title {
  margin-top: 0.35rem;
  color: #fff;
  font-weight: 900;
  font-size: 1.15rem;
  line-height: 1.3;
}

.process-steps {
  margin-top: 1rem;
  display: grid;
  gap: 0.55rem;
}

.step {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 0.8rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}

.step:hover {
  transform: translateY(-2px);
  border-color: rgba(47, 85, 212, 0.65);
  background: rgba(47, 85, 212, 0.1);
}

.step.active {
  border-color: rgba(255, 201, 71, 0.65);
  background: rgba(255, 201, 71, 0.1);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-top: 0.35rem;
  background: rgba(255, 255, 255, 0.55);
}

.step.active .dot {
  background: #ffc947;
}

.step-title {
  display: block;
  color: #fff;
  font-weight: 900;
  font-size: 0.98rem;
}

.step-desc {
  display: block;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.9rem;
  line-height: 1.35;
}

.process-detail {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.detail-title {
  color: #ffc947;
  font-weight: 900;
  margin-bottom: 0.3rem;
}

.detail-text {
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.6;
}

.step:focus-visible {
  outline: 2px solid rgba(255, 201, 71, 0.9);
  outline-offset: 3px;
}

/* ---------------- TEAM ---------------- */
.team {
  padding: 4rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.team-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
}

/* ---------------- FINAL CTA ---------------- */
.final-cta {
  padding: 3.5rem 0 4.2rem;
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1.5rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: radial-gradient(700px 260px at 20% 0%, rgba(47, 85, 212, 0.22), transparent 55%),
    radial-gradient(700px 260px at 80% 0%, rgba(255, 201, 71, 0.18), transparent 55%),
    rgba(255, 255, 255, 0.03);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
}

/* ---------------- Responsive ---------------- */
@media (max-width: 980px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }

  .process-card {
    width: 100%;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.4rem;
  }
}
</style>
