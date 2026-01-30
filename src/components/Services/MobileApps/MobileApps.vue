<template>
  <div class="mobileapps-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-content">
        <!-- ✅ SEO: πιο intent-based keyword -->
        <h1>Ανάπτυξη Mobile Apps για iOS & Android</h1>

        <p>
          Δημιουργούμε mobile εφαρμογές που αυξάνουν την αφοσίωση, απλοποιούν διαδικασίες
          και μετατρέπουν χρήστες σε πελάτες — με push notifications, subscriptions και analytics.
        </p>

        <div class="hero-cta">
          <router-link class="cta-primary" to="/contact">Ζητήστε Προσφορά</router-link>
          <a class="cta-secondary" href="#demo">Δείτε Demo</a>
        </div>

        <!-- ✅ SEO: internal links -->
        <p class="muted" style="margin-top: 12px;">
          Δείτε επίσης:
          <router-link class="seo-link" to="/services/webapps">Web Apps</router-link>
          ·
          <router-link class="seo-link" to="/services/dataanalysis">Data Analysis</router-link>
        </p>
      </div>

      <div class="hero-right">
        <div class="hero-bullets">
          <div class="hb"><span class="dot"></span> Push Notifications</div>
          <div class="hb"><span class="dot"></span> Subscriptions / Payments</div>
          <div class="hb"><span class="dot"></span> Profiles & Roles</div>
          <div class="hb"><span class="dot"></span> Analytics & Events</div>
        </div>
      </div>
    </section>

    <!-- WHY -->
    <section class="section">
      <div class="container">
        <div>
        <h2>Γιατί χρειάζεσαι Mobile App</h2>
        </div>
        <div class="grid4">
          <div class="card">
            <div class="t">Direct σχέση</div>
            <div class="m">Ο χρήστης σε έχει στο κινητό του — όχι σε ένα tab.</div>
          </div>
          <div class="card">
            <div class="t">Ειδοποιήσεις</div>
            <div class="m">Push για προσφορές, υπενθυμίσεις, ενημερώσεις.</div>
          </div>
          <div class="card">
            <div class="t">Loyalty</div>
            <div class="m">Πόντοι, badges, ιστορικό, εξατομίκευση.</div>
          </div>
          <div class="card">
            <div class="t">Αυτοματισμοί</div>
            <div class="m">Κρατήσεις, πληρωμές, tickets, check-ins.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ✅ SEO: Use cases section -->
    <section class="section">
      <div class="container">
        <h2>Τι είδους mobile εφαρμογές αναπτύσσουμε</h2>
        <div class="grid3">
          <div class="card">
            <div class="t">Εφαρμογές Κρατήσεων</div>
            <div class="m">Ραντεβού, slots, cancellations, υπενθυμίσεις & κανόνες.</div>
          </div>
          <div class="card">
            <div class="t">E-commerce / Subscriptions</div>
            <div class="m">Συνδρομές, in-app purchases, πληρωμές και επίπεδα πρόσβασης.</div>
          </div>
          <div class="card">
            <div class="t">Portals & Προφίλ Χρήστη</div>
            <div class="m">Login, ιστορικό, αρχεία, ειδοποιήσεις, εξατομίκευση.</div>
          </div>
        </div>

        <p class="muted" style="margin-top: 14px;">
          Για back-office διαχείριση, συνήθως το δένουμε με
          <router-link class="seo-link" to="/services/webapps">Web App / Admin Panel</router-link>.
        </p>
      </div>
    </section>

    <!-- DEMO PHONE APP -->
    <section id="demo" class="section demo">
      <div class="container">
        <div class="demo-frame">
          <MockPhoneDemo />
        </div>
      </div>
    </section>

    <PublishedAppsSection :apps="publishedApps" />

    <!-- WHAT WE BUILD -->
    <section class="section">
      <div class="container">
        <h2>Τι μπορούμε να αναπτύξουμε</h2>
        <div class="grid3">
          <div class="card">
            <div class="t">Membership / Subscriptions</div>
            <div class="m">πλάνα, ανανεώσεις, αποδείξεις, περιορισμοί πρόσβασης.</div>
          </div>
          <div class="card">
            <div class="t">Bookings / Calendar</div>
            <div class="m">κρατήσεις, slots, υπενθυμίσεις, cancellation rules.</div>
          </div>
          <div class="card">
            <div class="t">Portals & Dashboards</div>
            <div class="m">προφίλ χρήστη, ιστορικό, KPIs, reports.</div>
          </div>
          <div class="card">
            <div class="t">Notifications</div>
            <div class="m">push, in-app, email triggers, campaigns.</div>
          </div>
          <div class="card">
            <div class="t">Payments</div>
            <div class="m">in-app purchases, cards, subscriptions, invoices.</div>
          </div>
          <div class="card">
            <div class="t">Security</div>
            <div class="m">auth, roles, device security, monitoring.</div>
          </div>
        </div>

        <!-- ✅ SEO: CTA internal link -->
        <p class="muted" style="margin-top: 14px;">
          Θες να το συνδυάσουμε με SEO/καμπάνιες για περισσότερα downloads;
          <router-link class="seo-link" to="/services/dataanalysis">Data Analysis</router-link>.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container cta-inner">
        <div>
          <h2>Θες mobile app που “αποδίδει”;</h2>
          <p>Πες μας το use-case και θα σου προτείνουμε την καλύτερη λύση (MVP → scale).</p>
        </div>
        <router-link class="cta-primary big" to="/contact">Μιλήστε μαζί μας</router-link>
      </div>
    </section>
  </div>
</template>


<script>
import MockPhoneDemo from './MobileAppDemoPhone.vue';
import PublishedAppsSection from './PublishedAppsSection.vue';

import bookingImg from '@/assets/phone/AppStore.Bookings.png';
import ctgymDashboard from '@/assets/phone/AppStore.Dashboard.png';
import tracking from '@/assets/phone/AppStore.SessionsTracking.png';
import analytics from '@/assets/phone/AppStore.SessionsAnalytics.png';
import profile from '@/assets/phone/AppStore.ProfileAnalytics.png';

import appstore1 from '@/assets/mycreator/My Creator - App Store 1.png';
import appstore2 from '@/assets/mycreator/My Creator - App Store 2.png';
import appstore3 from '@/assets/mycreator/My Creator - App Store 3.png';
import appstore4 from '@/assets/mycreator/My Creator - App Store 4.png';
import appstore5 from '@/assets/mycreator/My Creator - App Store 5.png';


import yours from '@/assets/Customer Survey-cuate.svg';


export default {
  name: 'MobileAppsService',
  components: { MockPhoneDemo, PublishedAppsSection },

  data() {
    return {
      publishedApps: [
        {
          key: 'cloudtec-gym',
          name: 'Cloudtec Gym',
          logoText: 'CG',
          tagline: 'Gym management & member experience.',
          platforms: { android: true, ios: true, web: true },
          highlights: ['Κρατήσεις & συνδρομές', 'Check-in / QR flows', 'Dashboards & ειδοποιήσεις'],
          images: [
            ctgymDashboard,
            bookingImg,
            analytics,
            tracking,
            profile
          ],
          links: { play: '...', appstore: 'https://apps.apple.com/gr/app/cloudtec-gym/id6757802948', caseStudy: true }
        },
        
         {
          key: 'your-app',
          name: 'Το App σου εδώ',
          logoText: 'YA',
          tagline: 'H δική σου εφαρμογή.',
          platforms: { android: true, ios: true, web: true },
          highlights: ['Εξατομικευμένη ανάπτυξη', 'Σχεδιασμός UI/UX', 'Υποστήριξη & συντήρηση'],
          images: [
            yours
          ],
          links: { play: '#', appstore: '#', caseStudy: true }
        },
        {
          key: 'mycreator-app',
          name: 'My Creator App',
          logoText: 'MC',
          tagline: 'Content Creation & Video Viewing.',
          platforms: { android: true, ios: true, web: true },
          highlights: ['Video streaming', 'Content management', 'User profiles'],
          images: [
            appstore1,
            appstore2,
            appstore3,
            appstore4,
            appstore5
          ],
          links: { play: 'https://play.google.com/store/apps/details?id=com.nvourlidas.MyCreator', appstore: 'https://apps.apple.com/us/app/my-creator-app-content-guide/id6754379715', caseStudy: true }
        },
      ],
    };
  },
};
</script>

<style scoped>
.mobileapps-page {
  background: #253649;
  color: #fff;
}

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

.hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(3rem, 6vw, 6rem) 1.5rem;

  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
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

.hero-right {
  display: flex;
  justify-content: center;
}

.hero-bullets {
  width: min(420px, 100%);
  border-radius: 18px;
  padding: 1rem;
  background: rgba(31, 45, 61, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.hb {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.65rem 0.6rem;
  border-radius: 14px;
  color: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  margin-top: 0.55rem;
}

.hb:first-child {
  margin-top: 0;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #FFC947;
  box-shadow: 0 0 0 6px rgba(255, 201, 71, 0.12);
}

.grid4 {
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.9rem;
}

.grid3 {
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;
}

.card {
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  padding: 1rem;
}

.t {
  font-weight: 900;
  margin-bottom: 0.35rem;
}

.m {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}

.demo {
  background: linear-gradient(180deg, rgba(31, 45, 61, 0.65), rgba(31, 45, 61, 0.25));
}

.demo-head {
  max-width: 860px;
  margin: 0 auto 1.6rem;
  text-align: center;
}

/* Same trick you liked: 90% width and centered */
.demo-frame {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

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


@media (max-width: 980px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-cta {
    justify-content: center;
  }

  .grid4 {
    grid-template-columns: 1fr 1fr;
  }

  .grid3 {
    grid-template-columns: 1fr;
  }

  .cta-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
