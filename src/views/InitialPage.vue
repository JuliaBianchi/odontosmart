
<script>
import AppHeader from '@/components/AppHeader.vue'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import AppAuth from '@/components/AppAuth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from '@/includes/firebase'

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
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn']),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  },
}
</script>


<template >
   <AppHeader /> 
    <HomeView id="home" />
    <ServicesView id="services" />
    <AboutView id="about" />
    <ContactView id="contact" />

    <app-auth></app-auth>
</template>


