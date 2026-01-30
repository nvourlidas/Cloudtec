```vue
<!-- src/pages/services/DataAnalysisPage.vue -->
<template>
  <div class="data-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-left">
          <p class="kicker">Data Analysis • CRM • Reporting</p>
          <h1 class="hero-title">Data Analysis για Επιχειρήσεις & CRM</h1>
          <p class="hero-subtitle">
            Αναλύουμε τα δεδομένα σας και στήνουμε dashboards, αναφορές και CRM ροές για αποφάσεις με βάση KPIs —
            με tracking, automation και καθαρή εικόνα σε πραγματικό χρόνο.
          </p>

          <div class="hero-cta">
            <router-link class="btn primary" to="/contact">Ζήτησε Προσφορά</router-link>
            <a class="btn ghost" href="#demo">Δες Demo</a>
          </div>

          <div class="hero-badges">
            <span class="badge">Dashboards</span>
            <span class="badge">KPIs</span>
            <span class="badge">Funnels</span>
            <span class="badge">CRM Pipelines</span>
          </div>
        </div>

        <div class="hero-right">
          <div class="hero-card">
            <div class="hero-card-top">
              <div class="dot red"></div>
              <div class="dot yellow"></div>
              <div class="dot green"></div>
              <span class="hero-card-title">Cloudtec Analytics</span>
            </div>

            <!-- mini dashboard mock -->
            <div class="mini-metrics">
              <div class="mini-metric">
                <p class="mini-label">Leads</p>
                <p class="mini-value">+128</p>
                <p class="mini-sub">τελευταίες 7 ημέρες</p>
              </div>
              <div class="mini-metric">
                <p class="mini-label">Conversion</p>
                <p class="mini-value">6.4%</p>
                <p class="mini-sub">στόχος: 8%</p>
              </div>
              <div class="mini-metric">
                <p class="mini-label">ROAS</p>
                <p class="mini-value">3.2x</p>
                <p class="mini-sub">paid campaigns</p>
              </div>
            </div>

            <div class="mini-chart">
              <div class="bar" style="height: 35%"></div>
              <div class="bar" style="height: 55%"></div>
              <div class="bar" style="height: 42%"></div>
              <div class="bar" style="height: 70%"></div>
              <div class="bar" style="height: 62%"></div>
              <div class="bar" style="height: 85%"></div>
              <div class="bar" style="height: 58%"></div>
            </div>

            <div class="mini-footer">
              <span class="pill">Ενημέρωση σε πραγματικό χρόνο</span>
              <span class="pill">Αναφορές & εξαγωγές</span>
              <span class="pill">Automations</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DETAILS -->
    <section id="details" class="details">
      <div class="container">
        <div>
          <h2 class="h2">Τι σας προσφέρουμε στην πράξη</h2>
          <p class="p muted">
            Δεν κάνουμε “απλά αναλύσεις”. Στήνουμε σύστημα. Από συλλογή δεδομένων μέχρι dashboards, CRM ροές και
            αποφάσεις βασισμένες σε KPIs.
          </p>
        </div>
        <div class="cards">
          <div class="card">
            <h3 class="card-title">Dashboards & KPIs</h3>
            <p class="card-text">
              Ενιαία εικόνα για πωλήσεις, leads, καμπάνιες, conversion, retention. Καθαρά metrics, χωρίς “θόρυβο”.
            </p>
            <ul class="card-list">
              <li>Πωλήσεις / έσοδα / στόχοι</li>
              <li>Funnels & conversion rates</li>
              <li>Τμήματα πελατών & συμπεριφορά</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">CRM Pipeline</h3>
            <p class="card-text">
              Οργανώνουμε leads και πελάτες σε στάδια (pipeline), με υπενθυμίσεις, tags, notes και follow-ups.
            </p>
            <ul class="card-list">
              <li>Lead capture & qualification</li>
              <li>Stages (New → Won/Lost)</li>
              <li>Tasks / reminders / activity log</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Marketing Optimization</h3>
            <p class="card-text">
              Βελτιστοποιούμε καμπάνιες με βάση δεδομένα και όχι “αίσθηση”. Καθαρή στόχευση και καλύτερο ROI.
            </p>
            <ul class="card-list">
              <li>Tracking & attribution</li>
              <li>A/B testing</li>
              <li>ROAS / CAC / LTV</li>
            </ul>
          </div>

          <div class="card">
            <h3 class="card-title">Automations</h3>
            <p class="card-text">
              Αυτοματοποιούμε διαδικασίες (emails, follow-ups, lead routing) για λιγότερο χρόνο και περισσότερες
              πωλήσεις.
            </p>
            <ul class="card-list">
              <li>Auto emails / sequences</li>
              <li>Lead notifications</li>
              <li>Reports στο email σας</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- DEMO -->
    <section id="demo" class="demo">
      <div class="container">
        <div class="demo-head">
          <div>
            <h2 class="h2">Mini Demo: CRM & Analytics</h2>
            <p class="p muted">
              Ένα δείγμα του πώς μπορεί να μοιάζει το dashboard/CRM σας. (Mock UI για παρουσίαση στην σελίδα.)
            </p>
          </div>
          <router-link class="btn primary" to="/contact">Θέλω κάτι αντίστοιχο</router-link>
        </div>

        <div class="demo-grid">
          <!-- Left: Pipeline -->
          <div class="demo-card">
            <div class="demo-card-top">
              <span class="demo-title">CRM Pipeline</span>
              <span class="demo-tag">Live View</span>
            </div>

            <div class="pipeline">
              <div class="col">
                <p class="col-title">New</p>
                <div class="deal">Giannis • Website</div>
                <div class="deal">Maria • SEO</div>
                <div class="deal">Nikos • Ads</div>
              </div>
              <div class="col">
                <p class="col-title">In Progress</p>
                <div class="deal">Eleni • CRM</div>
                <div class="deal">Kostas • Web App</div>
              </div>
              <div class="col">
                <p class="col-title">Won</p>
                <div class="deal won">Anna • eShop</div>
                <div class="deal won">Dimitris • Mobile</div>
              </div>
            </div>
          </div>

          <!-- Right: KPI Summary -->
          <div class="demo-card">
            <div class="demo-card-top">
              <span class="demo-title">KPI Summary</span>
              <span class="demo-tag">This Month</span>
            </div>

            <div class="kpi-grid">
              <div class="kpi">
                <p class="kpi-label">Leads</p>
                <p class="kpi-value">312</p>
                <p class="kpi-sub">+18% MoM</p>
              </div>
              <div class="kpi">
                <p class="kpi-label">Bookings</p>
                <p class="kpi-value">74</p>
                <p class="kpi-sub">+9% MoM</p>
              </div>
              <div class="kpi">
                <p class="kpi-label">CAC</p>
                <p class="kpi-value">€12.6</p>
                <p class="kpi-sub">στόχος: €10</p>
              </div>
              <div class="kpi">
                <p class="kpi-label">LTV</p>
                <p class="kpi-value">€240</p>
                <p class="kpi-sub">εκτίμηση</p>
              </div>
            </div>

            <div class="sparkline">
              <span class="spark"></span>
              <span class="spark"></span>
              <span class="spark"></span>
              <span class="spark"></span>
              <span class="spark"></span>
              <span class="spark"></span>
              <span class="spark"></span>
              <span class="spark"></span>
              <span class="spark"></span>
              <span class="spark"></span>
            </div>

            <p class="demo-note">
              * Τα metrics και τα blocks είναι ενδεικτικά. Στήνουμε dashboard ακριβώς πάνω στις ανάγκες της επιχείρησής
              σας.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="final-cta">
      <div class="container cta-box">
        <div>
          <h2 class="h2">Θες να πάρεις αποφάσεις με δεδομένα;</h2>
          <p class="p muted">
            Στείλε μας τι εργαλεία χρησιμοποιείς (site, ads, CRM/ERP) και τι στόχο έχεις — και σου προτείνουμε λύση με
            ξεκάθαρα βήματα.
          </p>
        </div>
        <router-link class="btn primary" to="/contact">Επικοινωνία</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DataAnalysisPage',
};
</script>

<style scoped>
/* ---------------- Base ---------------- */
.data-page {
  background: #1f2d3d;
  /* ✅ Cloudtec deep navy */
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
  /* ✅ Cloudtec blue border */
  transition: transform 0.15s ease, border-color 0.2s ease, background 0.2s ease;
  user-select: none;
}

.btn:hover {
  transform: translateY(-1px);
  border-color: rgba(100, 181, 246, 0.55);
}

.btn.primary {
  background: #2f55d4;
  /* ✅ Cloudtec blue */
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
  background:
    radial-gradient(900px 400px at 50% 0%, rgba(47, 85, 212, 0.28), transparent 60%),
    radial-gradient(700px 380px at 90% 10%, rgba(255, 201, 71, 0.20), transparent 55%),
    #1f2d3d;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4rem 0 2.75rem;
}

.hero-inner {
  width: min(1200px, 92%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
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
  /* ✅ brighter for readability */
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 0 1.25rem;
}

.hero-cta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.1rem;
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
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.04);
}

/* hero right card */
.hero-card {
  border-radius: 18px;
  background: #1f2d3d;
  /* ✅ card bg */
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  overflow: hidden;
}

.hero-card-top {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(0, 0, 0, 0.18);
}

.hero-card-title {
  margin-left: 0.5rem;
  color: #b0bec5;
  font-weight: 800;
  font-size: 0.95rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.9;
}

.dot.red {
  background: #ff6b6b;
}

.dot.yellow {
  background: #ffd166;
}

.dot.green {
  background: #3ddc97;
}

.mini-metrics {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.mini-metric {
  border-radius: 14px;
  padding: 0.85rem 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.03);
}

.mini-label {
  margin: 0;
  color: #b0bec5;
  font-weight: 800;
  font-size: 0.9rem;
}

.mini-value {
  margin: 0.25rem 0 0.15rem;
  font-size: 1.35rem;
  font-weight: 900;
}

.mini-sub {
  margin: 0;
  color: #90a4ae;
  font-size: 0.85rem;
}

.mini-chart {
  padding: 0 1rem 1rem;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 92px;
}

.bar {
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(47, 85, 212, 0.95), rgba(255, 201, 71, 0.65));
  opacity: 0.9;
}

.mini-footer {
  padding: 0 1rem 1.1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.pill {
  font-size: 0.85rem;
  color: #b0bec5;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.03);
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
}

/* ---------------- DETAILS ---------------- */
.details {
  padding: 4rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.cards {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
}

.card {
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: #1f2d3d;
  /* ✅ match Cloudtec cards */
  padding: 1.35rem;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
}

.card-title {
  margin: 0 0 0.6rem;
  font-size: 1.2rem;
  font-weight: 900;
}

.card-text {
  margin: 0 0 0.85rem;
  color: #d6e0e7;
  line-height: 1.65;
}

.card-list {
  margin: 0;
  padding-left: 1.05rem;
  color: #b0bec5;
}

.card-list li {
  margin: 0.35rem 0;
}

/* ---------------- DEMO ---------------- */
.demo {
  padding: 4rem 0;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.demo-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

.demo-card {
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: #1f2d3d;
  /* ✅ card bg */
  padding: 1.2rem;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
}

.demo-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.demo-title {
  font-weight: 900;
}

.demo-tag {
  color: #0A1931;
  background: #FFC947;
  /* ✅ gold */
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-weight: 900;
  font-size: 0.85rem;
}

/* pipeline */
.pipeline {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.col {
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.03);
  padding: 0.85rem;
}

.col-title {
  margin: 0 0 0.6rem;
  color: #b0bec5;
  font-weight: 900;
  font-size: 0.95rem;
}

.deal {
  border-radius: 12px;
  padding: 0.55rem 0.65rem;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 0.55rem;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
}

.deal.won {
  border-color: rgba(255, 201, 71, 0.35);
  background: rgba(255, 201, 71, 0.10);
}

/* KPIs */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.kpi {
  border-radius: 14px;
  padding: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.03);
}

.kpi-label {
  margin: 0;
  color: #b0bec5;
  font-weight: 900;
  font-size: 0.9rem;
}

.kpi-value {
  margin: 0.25rem 0 0.15rem;
  font-size: 1.35rem;
  font-weight: 900;
}

.kpi-sub {
  margin: 0;
  color: #90a4ae;
  font-size: 0.85rem;
}

.sparkline {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 60px;
  margin-bottom: 0.9rem;
}

.spark {
  flex: 1;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(47, 85, 212, 0.95), rgba(255, 201, 71, 0.65));
  opacity: 0.85;
  height: 30%;
}

.spark:nth-child(2) {
  height: 45%;
}

.spark:nth-child(3) {
  height: 38%;
}

.spark:nth-child(4) {
  height: 60%;
}

.spark:nth-child(5) {
  height: 52%;
}

.spark:nth-child(6) {
  height: 75%;
}

.spark:nth-child(7) {
  height: 48%;
}

.spark:nth-child(8) {
  height: 68%;
}

.spark:nth-child(9) {
  height: 55%;
}

.spark:nth-child(10) {
  height: 82%;
}

.demo-note {
  margin: 0;
  color: #b0bec5;
  font-size: 0.92rem;
  line-height: 1.6;
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
  border: 1px solid rgba(255, 255, 255, 0.10);
  background:
    radial-gradient(700px 260px at 20% 0%, rgba(47, 85, 212, 0.22), transparent 55%),
    radial-gradient(700px 260px at 80% 0%, rgba(255, 201, 71, 0.18), transparent 55%),
    rgba(255, 255, 255, 0.03);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
}

/* ---------------- Responsive ---------------- */
@media (max-width: 980px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }

  .mini-metrics {
    grid-template-columns: 1fr;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .demo-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.4rem;
  }
}
</style>
```
