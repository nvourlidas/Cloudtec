<template>
  <div class="phone-wrap">
    <div class="phone">
      <!-- phone top (speaker + camera) -->
      <div class="phone-top">
        <div class="pill"></div>
        <div class="cam"></div>
      </div>

      <!-- app -->
      <div class="app">
        <!-- app header -->
        <div class="app-header">
          <div class="app-title">
            <div class="app-kicker">Cloudtec</div>
            <div class="app-h">{{ activeTitle }}</div>
          </div>

          <button class="icon-btn" type="button" title="Demo action" @click="demoAction">
            ⟳
          </button>
        </div>

        <!-- app content -->
        <div class="app-body">
          <!-- HOME -->
          <template v-if="activeTab === 'home'">
            <div class="hero-card">
              <div class="hero-badge">Mobile App Demo</div>
              <div class="hero-head">
                Κράτα την επιχείρησή σου στο κινητό
              </div>
              <div class="hero-sub">
                Push notifications, κρατήσεις, προφίλ, πληρωμές, dashboards.
              </div>

              <div class="quick-row">
                <div class="quick">
                  <div class="quick-kpi">{{ stats.checkins }}</div>
                  <div class="quick-label">Check-ins</div>
                </div>
                <div class="quick">
                  <div class="quick-kpi">{{ stats.active }}</div>
                  <div class="quick-label">Active</div>
                </div>
                <div class="quick">
                  <div class="quick-kpi">{{ stats.messages }}</div>
                  <div class="quick-label">Messages</div>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel-head">
                <div class="panel-title">Γρήγορες ενέργειες</div>
              </div>
              <div class="actions">
                <button class="action" type="button" @click="toast('Άνοιγμα: Κρατήσεις')">
                  <span class="action-ic">📅</span>
                  <span>
                    <span class="action-title">Κρατήσεις</span>
                    <span class="action-sub">ημερολόγιο & slots</span>
                  </span>
                </button>

                <button class="action" type="button" @click="toast('Άνοιγμα: Πληρωμές')">
                  <span class="action-ic">💳</span>
                  <span>
                    <span class="action-title">Πληρωμές</span>
                    <span class="action-sub">subscriptions & receipts</span>
                  </span>
                </button>

                <button class="action" type="button" @click="toast('Άνοιγμα: Υποστήριξη')">
                  <span class="action-ic">💬</span>
                  <span>
                    <span class="action-title">Υποστήριξη</span>
                    <span class="action-sub">tickets & chat</span>
                  </span>
                </button>
              </div>
            </div>
          </template>

          <!-- FEED -->
          <template v-else-if="activeTab === 'feed'">
            <div class="panel">
              <div class="panel-head">
                <div class="panel-title">Feed / Updates</div>
                <div class="chip">{{ feed.length }} νέα</div>
              </div>

              <div class="list">
                <div class="row" v-for="item in filteredFeed" :key="item.id">
                  <div class="row-dot" :class="item.kind"></div>
                  <div class="row-main">
                    <div class="row-title">{{ item.title }}</div>
                    <div class="row-sub">{{ item.sub }}</div>
                  </div>
                  <div class="row-time">{{ item.time }}</div>
                </div>

                <div v-if="filteredFeed.length === 0" class="empty">
                  Δεν βρέθηκαν αποτελέσματα.
                </div>
              </div>
            </div>

            <div class="searchbar">
              <span class="search-ic">⌕</span>
              <input v-model="q" placeholder="Αναζήτηση στο feed…" />
            </div>
          </template>

          <!-- NOTIFICATIONS -->
          <template v-else-if="activeTab === 'notif'">
            <div class="panel">
              <div class="panel-head">
                <div class="panel-title">Ειδοποιήσεις</div>
                <button class="small-btn" type="button" @click="markAllRead">Όλα διαβασμένα</button>
              </div>

              <div class="list">
                <button
                  class="notif"
                  v-for="n in notifications"
                  :key="n.id"
                  type="button"
                  :class="{ unread: !n.read }"
                  @click="toggleRead(n.id)"
                >
                  <span class="notif-ic">{{ n.icon }}</span>
                  <span class="notif-main">
                    <span class="notif-title">{{ n.title }}</span>
                    <span class="notif-sub">{{ n.sub }}</span>
                  </span>
                  <span class="notif-time">{{ n.time }}</span>
                </button>
              </div>
            </div>
          </template>

          <!-- PROFILE -->
          <template v-else>
            <div class="profile-card">
              <div class="avatar">CT</div>
              <div class="p-name">Cloudtec Member</div>
              <div class="p-sub">member@cloudtec.app</div>

              <div class="p-stats">
                <div class="p-stat">
                  <div class="p-kpi">{{ profile.sessions }}</div>
                  <div class="p-lbl">Sessions</div>
                </div>
                <div class="p-stat">
                  <div class="p-kpi">{{ profile.points }}</div>
                  <div class="p-lbl">Points</div>
                </div>
                <div class="p-stat">
                  <div class="p-kpi">{{ profile.plan }}</div>
                  <div class="p-lbl">Plan</div>
                </div>
              </div>

              <div class="panel compact">
                <div class="setting" v-for="s in settings" :key="s.key">
                  <div>
                    <div class="setting-title">{{ s.title }}</div>
                    <div class="setting-sub">{{ s.sub }}</div>
                  </div>
                  <span class="chev">›</span>
                </div>
              </div>
            </div>
          </template>

          <!-- Toast -->
          <div v-if="toastMsg" class="toast">{{ toastMsg }}</div>
        </div>

        <!-- bottom tabs -->
        <div class="tabs">
          <button class="tab" type="button" :class="{ active: activeTab === 'home' }" @click="activeTab = 'home'">
            <span class="tab-ic">⌂</span>
            <span class="tab-tx">Home</span>
          </button>
          <button class="tab" type="button" :class="{ active: activeTab === 'feed' }" @click="activeTab = 'feed'">
            <span class="tab-ic">▤</span>
            <span class="tab-tx">Feed</span>
          </button>
          <button class="tab" type="button" :class="{ active: activeTab === 'notif' }" @click="activeTab = 'notif'">
            <span class="tab-ic">🔔</span>
            <span class="tab-tx">Alerts</span>
          </button>
          <button class="tab" type="button" :class="{ active: activeTab === 'profile' }" @click="activeTab = 'profile'">
            <span class="tab-ic">👤</span>
            <span class="tab-tx">Me</span>
          </button>
        </div>
      </div>

      <!-- phone bottom bar -->
      <div class="phone-bottom">
        <div class="home-indicator"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MockPhoneDemo',
  data() {
    return {
      activeTab: 'home',
      q: '',
      toastMsg: '',

      stats: { checkins: 124, active: 38, messages: 7 },

      feed: [
        { id: 1, kind: 'ok', title: 'Νέα κράτηση επιβεβαιώθηκε', sub: 'Δευτέρα 18:00 • Class: HIIT', time: '1m' },
        { id: 2, kind: 'warn', title: 'Υπενθύμιση συνδρομής', sub: 'Η συνδρομή λήγει σε 3 ημέρες', time: '12m' },
        { id: 3, kind: 'open', title: 'Νέο μήνυμα υποστήριξης', sub: '“Μπορώ να αλλάξω ώρα;”', time: '1h' },
        { id: 4, kind: 'ok', title: 'Πληρωμή ολοκληρώθηκε', sub: '€29.90 • Monthly Plan', time: 'Χθες' },
      ],

      notifications: [
        { id: 1, icon: '📣', title: 'Νέο πρόγραμμα', sub: 'Δες το νέο εβδομαδιαίο πλάνο.', time: '1h', read: false },
        { id: 2, icon: '✅', title: 'Check-in επιτυχές', sub: 'Καλωσήρθες!', time: 'Χθες', read: true },
        { id: 3, icon: '💳', title: 'Απόδειξη διαθέσιμη', sub: 'Κατέβασέ την από το προφίλ.', time: '2d', read: false },
      ],

      profile: { sessions: 12, points: 340, plan: 'Pro' },

      settings: [
        { key: 'account', title: 'Λογαριασμός', sub: 'στοιχεία & ασφάλεια' },
        { key: 'payments', title: 'Πληρωμές', sub: 'κάρτες & αποδείξεις' },
        { key: 'preferences', title: 'Προτιμήσεις', sub: 'ειδοποιήσεις & γλώσσα' },
      ],
    };
  },

  computed: {
    activeTitle() {
      if (this.activeTab === 'home') return 'Dashboard';
      if (this.activeTab === 'feed') return 'Feed';
      if (this.activeTab === 'notif') return 'Notifications';
      return 'Profile';
    },

    filteredFeed() {
      const q = (this.q || '').trim().toLowerCase();
      if (!q) return this.feed;
      return this.feed.filter(f =>
        [f.title, f.sub, f.time].some(v => String(v).toLowerCase().includes(q))
      );
    },
  },

  methods: {
    toast(msg) {
      this.toastMsg = msg;
      window.clearTimeout(this._t);
      this._t = window.setTimeout(() => (this.toastMsg = ''), 1600);
    },

    toggleRead(id) {
      this.notifications = this.notifications.map(n => (n.id === id ? { ...n, read: !n.read } : n));
    },

    markAllRead() {
      this.notifications = this.notifications.map(n => ({ ...n, read: true }));
      this.toast('Όλες οι ειδοποιήσεις διαβάστηκαν');
    },

    demoAction() {
      // make it feel alive
      const bump = () => Math.floor(Math.random() * 6) + 1;
      this.stats = {
        checkins: this.stats.checkins + bump(),
        active: Math.max(10, this.stats.active + (Math.random() > 0.5 ? 1 : -1)),
        messages: Math.max(0, this.stats.messages + (Math.random() > 0.6 ? 1 : -1)),
      };
      this.toast('Demo ενημερώθηκε');
    },
  },
};
</script>

<style scoped>
.phone-wrap {
  display: flex;
  justify-content: center;
}

.phone {
  width: 360px;
  height: 780px;
  border-radius: 42px;
  background: rgba(31, 45, 61, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  position: relative;
}

.phone-top {
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.pill {
  width: 68px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
}
.cam {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 201, 71, 0.65);
  box-shadow: 0 0 0 6px rgba(255, 201, 71, 0.14);
}

.app {
  height: calc(100% - 38px - 34px);
  display: flex;
  flex-direction: column;
  background: rgba(26, 42, 58, 0.88);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.app-header {
  padding: 0.9rem 0.95rem 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.app-kicker {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.65);
}
.app-h {
  font-weight: 900;
  font-size: 1.05rem;
  color: #fff;
}

.icon-btn {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
}

.app-body {
  flex: 1;
  padding: 0.8rem 0.95rem 0.95rem;
  overflow: auto;
}

.hero-card {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 1rem;
}

.hero-badge {
  display: inline-flex;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 201, 71, 0.35);
  background: rgba(255, 201, 71, 0.12);
  color: #ffc947;
  font-weight: 900;
  font-size: 0.78rem;
}

.hero-head {
  margin-top: 0.6rem;
  font-weight: 900;
  font-size: 1.08rem;
  color: #fff;
  line-height: 1.25;
}

.hero-sub {
  margin-top: 0.35rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
  font-size: 0.92rem;
}

.quick-row {
  margin-top: 0.9rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.55rem;
}

.quick {
  border-radius: 14px;
  padding: 0.7rem 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.10);
}
.quick-kpi {
  font-weight: 900;
  font-size: 1.05rem;
}
.quick-label {
  margin-top: 0.15rem;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.65);
}

.panel {
  margin-top: 0.9rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
}
.panel.compact {
  margin-top: 0.8rem;
}

.panel-head {
  padding: 0.75rem 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}
.panel-title {
  font-weight: 900;
  font-size: 0.95rem;
}

.actions {
  padding: 0.85rem 0.9rem 0.95rem;
  display: grid;
  gap: 0.6rem;
}

.action {
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 0.7rem;
  align-items: center;

  border-radius: 14px;
  padding: 0.75rem 0.85rem;

  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.92);
  cursor: pointer;
  text-align: left;
}
.action:hover {
  border-color: rgba(47, 85, 212, 0.55);
  background: rgba(47, 85, 212, 0.10);
}
.action-ic {
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(47, 85, 212, 0.14);
  border: 1px solid rgba(47, 85, 212, 0.35);
}
.action-title {
  display: block;
  font-weight: 900;
}
.action-sub {
  display: block;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.65);
}

.searchbar {
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.75rem 0.85rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
}
.searchbar input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.92rem;
}
.search-ic {
  opacity: 0.7;
}

.list {
  padding: 0.75rem 0.9rem 0.95rem;
  display: grid;
  gap: 0.65rem;
}

.row {
  display: grid;
  grid-template-columns: 10px 1fr auto;
  gap: 0.7rem;
  align-items: start;
  padding: 0.65rem 0.65rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.03);
}
.row-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-top: 0.25rem;
  background: rgba(255, 255, 255, 0.45);
}
.row-dot.ok { background: rgba(34,197,94,0.9); }
.row-dot.warn { background: rgba(255,201,71,0.95); }
.row-dot.open { background: rgba(59,130,246,0.95); }

.row-title {
  font-weight: 900;
  font-size: 0.94rem;
}
.row-sub {
  margin-top: 0.15rem;
  font-size: 0.86rem;
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.4;
}
.row-time {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.55);
}

.notif {
  width: 100%;
  text-align: left;
  display: grid;
  grid-template-columns: 34px 1fr auto;
  gap: 0.75rem;
  align-items: center;

  padding: 0.75rem 0.8rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.92);
  cursor: pointer;
}
.notif.unread {
  border-color: rgba(255, 201, 71, 0.35);
  background: rgba(255, 201, 71, 0.08);
}
.notif-ic {
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.10);
}
.notif-title { display: block; font-weight: 900; }
.notif-sub { display: block; font-size: 0.85rem; color: rgba(255,255,255,0.68); }
.notif-time { font-size: 0.82rem; color: rgba(255,255,255,0.55); }

.small-btn {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.45rem 0.7rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 900;
  font-size: 0.85rem;
}

.profile-card {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 1rem;
  text-align: center;
}
.avatar {
  width: 58px; height: 58px;
  border-radius: 18px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  background: rgba(255, 201, 71, 0.14);
  border: 1px solid rgba(255, 201, 71, 0.35);
  font-weight: 900;
  color: #ffc947;
}
.p-name { margin-top: 0.7rem; font-weight: 900; }
.p-sub { margin-top: 0.15rem; color: rgba(255,255,255,0.65); font-size: 0.9rem; }

.p-stats {
  margin-top: 0.9rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
}
.p-stat {
  border-radius: 14px;
  padding: 0.7rem 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.10);
}
.p-kpi { font-weight: 900; }
.p-lbl { margin-top: 0.1rem; font-size: 0.82rem; color: rgba(255,255,255,0.65); }

.setting {
  padding: 0.75rem 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
  text-align: left;
}
.setting:first-child { border-top: none; }
.setting-title { font-weight: 900; }
.setting-sub { font-size: 0.85rem; color: rgba(255,255,255,0.65); }
.chev { opacity: 0.65; font-size: 1.3rem; }

.tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.2rem;
  padding: 0.55rem 0.55rem 0.65rem;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(31, 45, 61, 0.88);
}
.tab {
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.70);
  cursor: pointer;
  padding: 0.55rem 0.2rem;
  border-radius: 14px;
}
.tab.active {
  background: rgba(47, 85, 212, 0.16);
  color: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(47, 85, 212, 0.45);
}
.tab-ic { display: block; font-size: 1.05rem; }
.tab-tx { display: block; font-size: 0.78rem; font-weight: 900; margin-top: 0.15rem; }

.toast {
  position: sticky;
  bottom: 10px;
  margin-top: 0.8rem;
  padding: 0.65rem 0.8rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 201, 71, 0.25);
  background: rgba(255, 201, 71, 0.12);
  color: #ffc947;
  font-weight: 900;
  text-align: center;
}

.empty {
  color: rgba(255,255,255,0.7);
  text-align: center;
  padding: 0.6rem 0;
}

.phone-bottom {
  height: 34px;
  display: grid;
  place-items: center;
}
.home-indicator {
  width: 120px;
  height: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
}
</style>
