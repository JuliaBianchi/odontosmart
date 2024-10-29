<script>
import AppHeader from '@/components/AppHeader.vue'
import HomeView from './views/HomeView.vue'
import ServicesView from './views/ServicesView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import AppAuth from './components/AppAuth.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    HomeView,
    ServicesView,
    AboutView,
    ContactView,
    AppAuth,
  },
}
</script>

<template>
  <AppHeader />
  <HomeView id="home" />
  <ServicesView id="services" />
  <AboutView id="about" />
  <ContactView id="contact" />
  
  <app-auth></app-auth>
</template>
