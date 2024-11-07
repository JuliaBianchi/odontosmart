import { createRouter, createWebHistory } from 'vue-router'
import InitialPage from '@/views/InitialPage.vue'
import ServicesView from '@/views/ServicesView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import AppView from '@/views/AppView.vue'
import CardDetail from '@/views/CardDetail.vue'
import OrdersView from '@/views/OrdersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'text-blue-800',
  routes: [
    {
      path: '/',
      name: 'initial',
      component: InitialPage,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/consultorios',
      name: 'consultorios',
      component: AppView,
    },
    {
      path: '/consultorios/:id',
      name: 'consultorio.detalhes',
      component: CardDetail,
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: OrdersView,
    },
  ],
})

export default router
