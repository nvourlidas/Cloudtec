import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/components/HomeVue.vue'
import ContactMain from '@/components/Contact/ContactMain.vue'
import WebSites from '@/components/Services/Websites/WebSites.vue'
import EshopService from '@/components/Services/Eshops/EshopService.vue'
import WebApps from '@/components/Services/WebApps/WebApps.vue'
import MobileApps from '@/components/Services/MobileApps/MobileApps.vue'
import DigitalMarketing from '@/components/Services/SEO/DigitalMarketing.vue'
import DataAnalysis from '@/components/Services/DataAnalysis/DataAnalysis.vue'
import AboutUs from '@/components/AboutUs/AboutUs.vue'

const SITE_NAME = 'CloudTec'
const BASE_URL = 'https://cloudtec.gr'

const routes = [
  {
    path: '/',
    component: HomeVue,
    meta: {
      title: `${SITE_NAME} | Ιστοσελίδες, Web Apps & Mobile Apps για Επιχειρήσεις`,
      description:
        'Αναπτύσσουμε σύγχρονες ιστοσελίδες, eShop, web apps και mobile εφαρμογές με έμφαση σε απόδοση, UX και αποτελέσματα.',
    },
  },
  {
    path: '/contact',
    component: ContactMain,
    meta: {
      title: `Επικοινωνία | ${SITE_NAME}`,
      description:
        'Ζήτησε προσφορά ή κλείσε δωρεάν σύντομη αξιολόγηση για την ιδέα ή το project σου.',
    },
  },
  {
    path: '/services/websites',
    component: WebSites,
    meta: {
      title: `Κατασκευή Ιστοσελίδων για Επιχειρήσεις | ${SITE_NAME}`,
      description:
        'Responsive, γρήγορες και SEO-friendly ιστοσελίδες με σύγχρονο design και ξεκάθαρο στόχο μετατροπές.',
    },
  },
  {
    path: '/services/eshops',
    component: EshopService,
    meta: {
      title: `Κατασκευή eShop & Ηλεκτρονικού Καταστήματος | ${SITE_NAME}`,
      description:
        'WooCommerce ή custom λύση, πληρωμές, αποστολές και SEO δομή για περισσότερες πωλήσεις.',
    },
  },
  {
    path: '/services/webapps',
    component: WebApps,
    meta: {
      title: `Custom Web Apps & CRM | ${SITE_NAME}`,
      description:
        'Web εφαρμογές για αυτοματοποίηση διαδικασιών, dashboards, ρόλους χρηστών και API διασυνδέσεις.',
    },
  },
  {
    path: '/services/mobileapps',
    component: MobileApps,
    meta: {
      title: `Ανάπτυξη Mobile Apps (Android/iOS) | ${SITE_NAME}`,
      description:
        'Native ή cross-platform εφαρμογές με premium UI/UX, ειδοποιήσεις και σύνδεση με backend.',
    },
  },
  {
    path: '/services/digitalmarketing',
    component: DigitalMarketing,
    meta: {
      title: `Digital Marketing & SEO | ${SITE_NAME}`,
      description:
        'Στρατηγική, analytics, SEO, περιεχόμενο και καμπάνιες με στόχο leads και αύξηση πωλήσεων.',
    },
  },
  {
    path: '/services/dataanalysis',
    component: DataAnalysis,
    meta: {
      title: `Data Analysis & BI Αναφορές | ${SITE_NAME}`,
      description:
        'Μετατρέπουμε δεδομένα σε αποφάσεις: dashboards, reports, KPIs και αυτοματοποιημένες ροές.',
    },
  },
  {
    path: '/aboutus',
    component: AboutUs,
    meta: {
      title: `Ποιοι Είμαστε | ${SITE_NAME}`,
      description:
        'Η CloudTec δημιουργεί ψηφιακές λύσεις για επιχειρήσεις, με έμφαση σε ποιότητα, συνεργασία και αποτελέσματα.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

function upsertMetaTag(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertPropertyTag(property, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

router.afterEach((to) => {
  const title = to.meta?.title || `${SITE_NAME} | Ψηφιακές Λύσεις για Επιχειρήσεις`
  const description =
    to.meta?.description ||
    'Η CloudTec αναπτύσσει ιστοσελίδες, eShops, web apps και mobile εφαρμογές για επιχειρήσεις.'

  document.title = title

  // Basic SEO
  upsertMetaTag('description', description)

  // Canonical
  const canonicalUrl = `${BASE_URL}${to.path}`
  upsertLink('canonical', canonicalUrl)

  // Open Graph
  upsertPropertyTag('og:site_name', SITE_NAME)
  upsertPropertyTag('og:title', title)
  upsertPropertyTag('og:description', description)
  upsertPropertyTag('og:type', 'website')
  upsertPropertyTag('og:url', canonicalUrl)
  upsertPropertyTag('og:image', 'https://cloudtec.gr/og-image.png')

  // Twitter
  upsertMetaTag('twitter:card', 'summary_large_image')
  upsertMetaTag('twitter:title', title)
  upsertMetaTag('twitter:description', description)
  upsertMetaTag('twitter:image', 'https://cloudtec.gr/og-image.png')
})

export default router
