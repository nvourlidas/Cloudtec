<template>
  <div class="mock-app">
    <!-- Sidebar -->
    <aside class="mock-sidebar">
      <div class="brand">
        <div class="brand-dot"></div>
        <div class="brand-text">
          <div class="brand-name">Cloudtec</div>
          <div class="brand-sub">Admin Demo</div>
        </div>
      </div>

      <nav class="nav">
        <button
          v-for="item in navItems"
          :key="item.key"
          class="nav-item"
          :class="{ active: activeNav === item.key }"
          type="button"
          @click="activeNav = item.key"
        >
          <span class="nav-ic">{{ item.icon }}</span>
          <span class="nav-label">{{ item.label }}</span>
        </button>
      </nav>

      <div class="sidebar-foot">
        <div class="status-pill">
          <span class="status-dot"></span>
          <span>Live Preview</span>
        </div>
      </div>
    </aside>

    <!-- Main -->
    <div class="mock-main">
      <!-- Topbar -->
      <div class="topbar">
        <div class="page-title">
          <div class="page-kicker">Admin</div>
          <div class="page-h">{{ activePageTitle }}</div>
        </div>

        <div class="search">
          <span class="search-ic">⌕</span>
          <input v-model="q" type="text" :placeholder="searchPlaceholder" />
        </div>

        <div class="user">
          <div class="user-meta">
            <div class="user-name">Cloudtec Team</div>
            <div class="user-sub">info@cloudtec.gr</div>
          </div>
          <div class="avatar">CT</div>
        </div>
      </div>

      <!-- PAGES -->
      <div class="page">
        <!-- DASHBOARD -->
        <template v-if="activeNav === 'dashboard'">
          <div class="metrics">
            <div class="metric-card">
              <div class="metric-label">Ενεργοί χρήστες</div>
              <div class="metric-value">{{ metrics.users }}</div>
              <div class="metric-sub">+{{ metrics.usersGrowth }}% αυτόν τον μήνα</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Αιτήματα</div>
              <div class="metric-value">{{ metrics.tickets }}</div>
              <div class="metric-sub">{{ metrics.sla }} SLA</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Έσοδα</div>
              <div class="metric-value">€{{ metrics.revenue }}</div>
              <div class="metric-sub">Reports & KPIs σε πραγματικό χρόνο</div>
            </div>
          </div>

          <div class="content-grid">
            <div class="panel">
              <div class="panel-head">
                <div class="panel-title">Τελευταία δραστηριότητα</div>
                <button class="panel-btn" type="button" @click="shuffleRows()">Ανανέωση</button>
              </div>

              <div class="table">
                <div class="tr th">
                  <div>Πελάτης</div>
                  <div>Ενέργεια</div>
                  <div>Κατάσταση</div>
                  <div>Ημερομηνία</div>
                </div>

                <div class="tr" v-for="row in filteredRows" :key="row.id">
                  <div class="td strong">{{ row.customer }}</div>
                  <div class="td">{{ row.action }}</div>
                  <div class="td">
                    <span class="badge" :class="row.statusKey">{{ row.status }}</span>
                  </div>
                  <div class="td muted">{{ row.date }}</div>
                </div>

                <div v-if="filteredRows.length === 0" class="empty">
                  Δεν βρέθηκαν αποτελέσματα για “{{ q }}”.
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel-head">
                <div class="panel-title">Modules που μπορούμε να χτίσουμε</div>
              </div>

              <div class="feature-box">
                <div class="feature-title">{{ activeFeature.title }}</div>
                <div class="feature-text">{{ activeFeature.text }}</div>

                <div class="chips">
                  <button
                    v-for="f in features"
                    :key="f.key"
                    type="button"
                    class="chip"
                    :class="{ active: activeFeatureKey === f.key }"
                    @click="activeFeatureKey = f.key"
                  >
                    {{ f.label }}
                  </button>
                </div>

                <ul class="bullets">
                  <li v-for="b in activeFeature.bullets" :key="b">• {{ b }}</li>
                </ul>
              </div>
            </div>
          </div>
        </template>

        <!-- CLIENTS -->
        <template v-else-if="activeNav === 'clients'">
          <div class="panel">
            <div class="panel-head">
              <div class="panel-title">Πελάτες</div>
              <button class="panel-btn" type="button" @click="shuffleClients()">Ανανέωση</button>
            </div>

            <div class="table clients">
              <div class="tr th">
                <div>Επωνυμία</div>
                <div>Κατηγορία</div>
                <div>Στάδιο</div>
                <div>Owner</div>
              </div>

              <div class="tr" v-for="c in filteredClients" :key="c.id">
                <div class="td strong">{{ c.name }}</div>
                <div class="td muted">{{ c.type }}</div>
                <div class="td">
                  <span class="badge" :class="c.stageKey">{{ c.stage }}</span>
                </div>
                <div class="td">{{ c.owner }}</div>
              </div>

              <div v-if="filteredClients.length === 0" class="empty">
                Δεν βρέθηκαν πελάτες για “{{ q }}”.
              </div>
            </div>
          </div>
        </template>

        <!-- TASKS -->
        <template v-else-if="activeNav === 'tasks'">
          <div class="content-grid single">
            <div class="panel">
              <div class="panel-head">
                <div class="panel-title">Tasks</div>
                <button class="panel-btn" type="button" @click="addTask()">+ Νέο</button>
              </div>

              <div class="task-list">
                <button
                  v-for="t in filteredTasks"
                  :key="t.id"
                  type="button"
                  class="task"
                  :class="{ done: t.done }"
                  @click="toggleTask(t.id)"
                >
                  <span class="task-dot"></span>
                  <span class="task-title">{{ t.title }}</span>
                  <span class="task-tag">{{ t.tag }}</span>
                </button>

                <div v-if="filteredTasks.length === 0" class="empty">
                  Δεν βρέθηκαν tasks για “{{ q }}”.
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- REPORTS -->
        <template v-else-if="activeNav === 'reports'">
          <div class="content-grid">
            <div class="panel">
              <div class="panel-head">
                <div class="panel-title">Reports (Demo)</div>
                <button class="panel-btn" type="button" @click="randomizeReports()">Ανανέωση</button>
              </div>

              <div class="reports">
                <div class="report-card">
                  <div class="report-kpi">Conversion</div>
                  <div class="report-val">{{ reports.conversion }}%</div>
                  <div class="muted">από leads → πελάτες</div>
                </div>
                <div class="report-card">
                  <div class="report-kpi">Retention</div>
                  <div class="report-val">{{ reports.retention }}%</div>
                  <div class="muted">3 μήνες</div>
                </div>
                <div class="report-card">
                  <div class="report-kpi">Avg. response</div>
                  <div class="report-val">{{ reports.response }}h</div>
                  <div class="muted">support SLA</div>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel-head">
                <div class="panel-title">Σημείωση</div>
              </div>
              <div class="feature-box">
                <div class="feature-text">
                  Σε πραγματικό project, τα reports τραβάνε δεδομένα από τη βάση και εφαρμόζουν φίλτρα,
                  permissions και exports (PDF/Excel).
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- SETTINGS -->
        <template v-else>
          <div class="content-grid single">
            <div class="panel">
              <div class="panel-head">
                <div class="panel-title">Ρυθμίσεις</div>
              </div>

              <div class="settings">
                <div class="setting-row">
                  <div>
                    <div class="setting-title">Ρόλοι & Δικαιώματα</div>
                    <div class="muted">RBAC, πρόσβαση ανά module</div>
                  </div>
                  <span class="badge warn">Configurable</span>
                </div>

                <div class="setting-row">
                  <div>
                    <div class="setting-title">Audit Logs</div>
                    <div class="muted">Ιστορικό ενεργειών</div>
                  </div>
                  <span class="badge open">Enabled</span>
                </div>

                <div class="setting-row">
                  <div>
                    <div class="setting-title">Ειδοποιήσεις</div>
                    <div class="muted">Email / Push / In-app</div>
                  </div>
                  <span class="badge ok">Ready</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="mock-foot">
        Αυτό είναι demo UI. Στην πραγματική εφαρμογή, τα modules προσαρμόζονται 100% στην επιχείρησή σου.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MockAdminDemo',

  data() {
    return {
      q: '',
      activeNav: 'dashboard',

      navItems: [
        { key: 'dashboard', label: 'Dashboard', icon: '▦' },
        { key: 'clients', label: 'Πελάτες', icon: '👤' },
        { key: 'tasks', label: 'Tasks', icon: '✓' },
        { key: 'reports', label: 'Reports', icon: '▤' },
        { key: 'settings', label: 'Ρυθμίσεις', icon: '⚙' },
      ],

      metrics: {
        users: 124,
        usersGrowth: 18,
        tickets: 12,
        sla: '24h',
        revenue: '8.420',
      },

      rows: [
        { id: 1, customer: 'Kappa Store', action: 'Νέα παραγγελία', status: 'Ολοκληρώθηκε', statusKey: 'ok', date: 'Σήμερα' },
        { id: 2, customer: 'Alpha Gym', action: 'Νέα εγγραφή μέλους', status: 'Σε εξέλιξη', statusKey: 'warn', date: 'Σήμερα' },
        { id: 3, customer: 'Beta Clinic', action: 'Ticket υποστήριξης', status: 'Ανοιχτό', statusKey: 'open', date: 'Χθες' },
        { id: 4, customer: 'Gamma School', action: 'Ανανέωση συνδρομής', status: 'Ολοκληρώθηκε', statusKey: 'ok', date: 'Χθες' },
        { id: 5, customer: 'Delta Rentals', action: 'Νέος πελάτης CRM', status: 'Σε εξέλιξη', statusKey: 'warn', date: 'Πριν 2 ημέρες' },
      ],

      clients: [
        { id: 1, name: 'Alpha Gym', type: 'Fitness', stage: 'Active', stageKey: 'ok', owner: 'Nikos' },
        { id: 2, name: 'Delta Rentals', type: 'Rent a Car', stage: 'Onboarding', stageKey: 'warn', owner: 'Konstantinos' },
        { id: 3, name: 'Beta Clinic', type: 'Healthcare', stage: 'Lead', stageKey: 'open', owner: 'Maria' },
        { id: 4, name: 'Kappa Store', type: 'E-commerce', stage: 'Active', stageKey: 'ok', owner: 'Nikos' },
      ],

      tasks: [
        { id: 1, title: 'Σχεδιασμός ροής checkout', tag: 'UI', done: false },
        { id: 2, title: 'Σύνδεση πληρωμών (Viva)', tag: 'Integration', done: false },
        { id: 3, title: 'Ρόλοι χρηστών & permissions', tag: 'Security', done: true },
      ],

      reports: {
        conversion: 22,
        retention: 68,
        response: 12,
      },

      activeFeatureKey: 'crm',
      features: [
        { key: 'crm', label: 'CRM & Πελάτες', title: 'CRM που ταιριάζει στη ροή σου', text: 'Οργάνωση πελατών, leads, ιστορικό, σημειώσεις, υπενθυμίσεις.', bullets: ['Custom πεδία', 'Ρόλοι/δικαιώματα', 'Ειδοποιήσεις', 'Εξαγωγές'] },
        { key: 'automation', label: 'Αυτοματισμοί', title: 'Workflows που γλιτώνουν χρόνο', text: 'Κανόνες, approvals, email/SMS notifications, scheduled jobs.', bullets: ['Triggers', 'Status flows', 'Reminders', 'Integrations'] },
        { key: 'dash', label: 'Dashboards', title: 'Dashboards για αποφάσεις', text: 'KPIs, charts και reports με φίλτρα και permissions.', bullets: ['Custom reports', 'Filters', 'Exports', 'Real-time insights'] },
        { key: 'security', label: 'Ασφάλεια', title: 'Ασφάλεια & πρόσβαση', text: 'Auth, roles, audit logs, backup & monitoring.', bullets: ['RBAC', 'Logs', 'Backups', 'Monitoring'] },
      ],
    };
  },

  computed: {
    activePageTitle() {
      const item = this.navItems.find(i => i.key === this.activeNav);
      return item ? item.label : 'Dashboard';
    },

    searchPlaceholder() {
      if (this.activeNav === 'clients') return 'Αναζήτηση πελατών…';
      if (this.activeNav === 'tasks') return 'Αναζήτηση tasks…';
      if (this.activeNav === 'reports') return 'Αναζήτηση reports…';
      if (this.activeNav === 'settings') return 'Αναζήτηση ρυθμίσεων…';
      return 'Αναζήτηση… (π.χ. πελάτες, tasks, πωλήσεις)';
    },

    activeFeature() {
      return this.features.find(f => f.key === this.activeFeatureKey) || this.features[0];
    },

    filteredRows() {
      const q = (this.q || '').trim().toLowerCase();
      if (!q) return this.rows;
      return this.rows.filter(r =>
        [r.customer, r.action, r.status, r.date].some(v => String(v).toLowerCase().includes(q))
      );
    },

    filteredClients() {
      const q = (this.q || '').trim().toLowerCase();
      if (!q) return this.clients;
      return this.clients.filter(c =>
        [c.name, c.type, c.stage, c.owner].some(v => String(v).toLowerCase().includes(q))
      );
    },

    filteredTasks() {
      const q = (this.q || '').trim().toLowerCase();
      if (!q) return this.tasks;
      return this.tasks.filter(t =>
        [t.title, t.tag].some(v => String(v).toLowerCase().includes(q))
      );
    },
  },

  methods: {
    shuffleRows() {
      this.rows = [...this.rows].sort(() => Math.random() - 0.5);
    },

    shuffleClients() {
      this.clients = [...this.clients].sort(() => Math.random() - 0.5);
    },

    toggleTask(id) {
      this.tasks = this.tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t));
    },

    addTask() {
      const id = Math.max(0, ...this.tasks.map(t => t.id)) + 1;
      this.tasks = [{ id, title: 'Νέο task (demo)', tag: 'General', done: false }, ...this.tasks];
    },

    randomizeReports() {
      const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
      this.reports = {
        conversion: rand(12, 35),
        retention: rand(40, 85),
        response: rand(2, 24),
      };
    },
  },
};
</script>

<style scoped>
/* Bigger + more “app-like” */
.mock-app {
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 740px; /* bigger */
  width: 100%;

  background: rgba(31, 45, 61, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.35);
}

.mock-sidebar {
  background: rgba(26, 42, 58, 0.92);
  border-right: 1px solid rgba(255, 255, 255, 0.10);
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.brand {
  display: flex;
  gap: 0.7rem;
  align-items: center;
  padding: 0.6rem 0.6rem 1rem;
}

.brand-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: #ffc947;
  box-shadow: 0 0 0 6px rgba(255, 201, 71, 0.14);
}

.brand-name {
  font-weight: 900;
}
.brand-sub {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.65);
}

.nav {
  display: grid;
  gap: 0.4rem;
  margin-top: 0.2rem;
}

.nav-item {
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.7rem 0.75rem;
  border-radius: 12px;
  border: 1px solid transparent;
  background: transparent;
  color: rgba(255, 255, 255, 0.88);
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.10);
}

.nav-item.active {
  background: rgba(47, 85, 212, 0.16);
  border-color: rgba(47, 85, 212, 0.55);
}

.nav-ic {
  width: 22px;
  text-align: center;
  opacity: 0.9;
}

.sidebar-foot {
  margin-top: auto;
  padding-top: 1rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  padding: 0.55rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.12);
}

.mock-main {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.topbar {
  display: grid;
  grid-template-columns: 220px 1fr 260px;
  gap: 1rem;
  align-items: center;
}

.page-kicker {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.65);
}
.page-h {
  font-weight: 900;
  font-size: 1.1rem;
}

.search {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 0.95rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
}

.search input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.95rem;
}

.user {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-end;
}

.user-name {
  font-weight: 900;
}
.user-sub {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.65);
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(255, 201, 71, 0.14);
  border: 1px solid rgba(255, 201, 71, 0.35);
  font-weight: 900;
  color: #ffc947;
}

.page {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;
}

.metric-card {
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
}

.metric-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}
.metric-value {
  font-size: 1.6rem;
  font-weight: 900;
  margin-top: 0.25rem;
}
.metric-sub {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;
  margin-top: 0.35rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 0.9rem;
}
.content-grid.single {
  grid-template-columns: 1fr;
}

.panel {
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}

.panel-title {
  font-weight: 900;
}

.panel-btn {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 0.85rem;
  border-radius: 12px;
  cursor: pointer;
}

.table {
  padding: 0.9rem 1rem 1rem;
}
.tr {
  display: grid;
  grid-template-columns: 1.1fr 1.2fr 0.9fr 0.9fr;
  gap: 0.8rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.tr.th {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.85rem;
  font-weight: 900;
  padding-top: 0.2rem;
}
.td {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
}
.muted {
  color: rgba(255, 255, 255, 0.70);
}
.strong {
  font-weight: 900;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);
}
.badge.ok {
  border-color: rgba(34, 197, 94, 0.4);
  background: rgba(34, 197, 94, 0.12);
}
.badge.warn {
  border-color: rgba(255, 201, 71, 0.45);
  background: rgba(255, 201, 71, 0.12);
}
.badge.open {
  border-color: rgba(59, 130, 246, 0.45);
  background: rgba(59, 130, 246, 0.12);
}

.empty {
  margin-top: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.feature-box {
  padding: 1rem;
}
.feature-title {
  font-weight: 900;
  font-size: 1.1rem;
}
.feature-text {
  margin-top: 0.45rem;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.6;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}
.chip {
  border-radius: 999px;
  padding: 0.5rem 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
}
.chip.active {
  border-color: rgba(47, 85, 212, 0.55);
  background: rgba(47, 85, 212, 0.16);
}
.bullets {
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.7;
}

/* Tasks page */
.task-list {
  padding: 1rem;
  display: grid;
  gap: 0.6rem;
}
.task {
  width: 100%;
  display: grid;
  grid-template-columns: 12px 1fr auto;
  align-items: center;
  gap: 0.75rem;

  padding: 0.75rem 0.85rem;
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.10);
  color: rgba(255, 255, 255, 0.88);
  cursor: pointer;
  text-align: left;
}
.task:hover {
  border-color: rgba(47, 85, 212, 0.55);
  background: rgba(47, 85, 212, 0.08);
}
.task.done {
  opacity: 0.7;
}
.task-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.45);
}
.task.done .task-dot {
  background: rgba(34, 197, 94, 0.9);
}
.task-title {
  font-weight: 900;
}
.task-tag {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
}

/* Reports */
.reports {
  padding: 1rem;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(3, 1fr);
}
.report-card {
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.9rem;
}
.report-kpi {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 900;
}
.report-val {
  font-size: 1.45rem;
  font-weight: 900;
  margin-top: 0.3rem;
}

/* Settings */
.settings {
  padding: 1rem;
  display: grid;
  gap: 0.7rem;
}
.setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding: 0.85rem 0.95rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
}
.setting-title {
  font-weight: 900;
}

/* Footer hint */
.mock-foot {
  padding: 0.85rem 1rem;
  border: 1px dashed rgba(255, 255, 255, 0.18);
  border-radius: 14px;
  color: rgba(255, 255, 255, 0.75);
}

/* Responsive */
@media (max-width: 980px) {
  .mock-app {
    grid-template-columns: 1fr;
    min-height: 720px;
  }
  .mock-sidebar {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
  }
  .topbar {
    grid-template-columns: 1fr;
  }
  .user {
    justify-content: flex-start;
  }
  .metrics {
    grid-template-columns: 1fr;
  }
  .content-grid {
    grid-template-columns: 1fr;
  }
  .reports {
    grid-template-columns: 1fr;
  }
}
</style>
