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


const routes = [
  { path: '/', component: HomeVue },
  { path: '/contact', component: ContactMain },
  { path: '/services/websites', component: WebSites },
  { path: '/services/eshops', component: EshopService },
  { path: '/services/webapps', component: WebApps },
  { path: '/services/mobileapps', component: MobileApps },
  { path: '/services/digitalmarketing', component: DigitalMarketing },
  { path: '/services/dataanalysis', component: DataAnalysis },
  { path: '/aboutus', component: AboutUs },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
