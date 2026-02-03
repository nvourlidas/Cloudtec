<template>
  <transition name="consent-fade">
    <div v-if="visible" class="consent-wrap" role="dialog" aria-live="polite" aria-label="Cookie consent banner">
      <div class="consent-card">
        <div class="consent-text">
          <p class="consent-title">Cookies & Analytics</p>
          <p class="consent-desc">
            Χρησιμοποιούμε cookies για ανάλυση επισκεψιμότητας και βελτίωση της εμπειρίας σας.
            Μπορείτε να αποδεχτείτε ή να απορρίψετε.
          </p>
        </div>

        <div class="consent-actions">
          <button class="btn secondary" @click="decline">Απόρριψη</button>
          <button class="btn primary" @click="accept">Αποδοχή</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { loadGoogleAnalytics } from '@/utils/analytics'

export default {
  name: 'ConsentBanner',
  data() {
    return { visible: false }
  },
  mounted() {
    const consent = localStorage.getItem('analytics_consent')
    if (!consent) this.visible = true
    if (consent === 'granted') loadGoogleAnalytics()
  },
  methods: {
    accept() {
      localStorage.setItem('analytics_consent', 'granted')
      loadGoogleAnalytics()
      this.visible = false
    },
    decline() {
      localStorage.setItem('analytics_consent', 'denied')
      this.visible = false
    },
  },
}
</script>

<style scoped>
/* Overlay container */
.consent-wrap {
  position: fixed;
  inset: auto 0 0 0;
  padding: 14px 16px;
  z-index: 9999;
  display: flex;
  justify-content: center;
  pointer-events: none; /* allow clicks only on the card */
}

/* Card */
.consent-card {
  pointer-events: auto;
  width: min(1100px, 100%);
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;

  padding: 14px 16px;

  background: linear-gradient(180deg, rgba(31, 45, 61, 0.96), rgba(31, 45, 61, 0.86));
  border-radius: 16px;

  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);

  backdrop-filter: blur(10px);
}

/* Text */
.consent-text {
  min-width: 0;
}

.consent-title {
  margin: 0 0 4px;
  font-size: 1.05rem;
  font-weight: 800;
  color: #FFC947; /* Cloudtec gold */
  letter-spacing: 0.2px;
}

.consent-desc {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.5;
  font-size: 0.98rem;
}

/* Buttons */
.consent-actions {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}

.btn {
  border-radius: 14px;
  padding: 0.7rem 1rem;
  font-weight: 800;
  font-size: 0.98rem;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.14);
  transition: transform 0.2s ease, opacity 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}

.btn:active {
  transform: translateY(1px);
}

.btn.secondary {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.86);
}

.btn.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.22);
}

.btn.primary {
  background-color: rgba(47, 85, 212, 0.95); /* your blue */
  color: #fff;
  opacity: 0.96;
}

.btn.primary:hover {
  opacity: 1;
  background-color: rgba(47, 85, 212, 0.25);
  color: #FFC947; /* gold on hover like your cards */
  border-color: rgba(47, 85, 212, 0.9);
}

/* Anim */
.consent-fade-enter-active,
.consent-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.consent-fade-enter-from,
.consent-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Responsive */
@media (max-width: 720px) {
  .consent-card {
    flex-direction: column;
    align-items: stretch;
  }

  .consent-actions {
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}
</style>
