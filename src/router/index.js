import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/components/HomeVue.vue'
import ContactMain from '@/components/Contact/ContactMain.vue'
import WebSites from '@/components/Websites/WebSites.vue'


const routes = [
  { path: '/', component: HomeVue },
  { path: '/contact', component: ContactMain },
  { path: '/services/websites', component: WebSites },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
