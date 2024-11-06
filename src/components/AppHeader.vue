<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'
import useCartStore from '@/stores/cart'

export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore, useUserStore, useCartStore),
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
      console.log(this.modalStore.isOpen)
    },
  },
  data(){
    return {
      cartCount: 0
    }
  }
}
</script>

<template>
  <nav
    class="fixed flex justify-between items-center pl-20 pr-20 pt-5 pb-2 bg-white w-full"
  >
    <a href="#" class="flex gap-3">
      <img
        width="75"
        height="75"
        src="https://img.icons8.com/bubbles/100/tooth.png"
        alt="tooth"
      />
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap text-black"
        >OdontoSmart</span
      >
    </a>

    <ul
      v-if="!userStore.userLoggedIn"
      class="flex flex-row p-4 mt-4 font-medium rounded-lg"
    >
      <li>
        <a
          @click.prevent="scrollToSection('home')"
          class="block py-2 px-3 text-black hover:text-blue-800 text-lg rounded cursor-pointer"
        >
          Home
        </a>
      </li>

      <li>
        <a
          @click.prevent="scrollToSection('services')"
          class="block py-2 px-3 text-black hover:text-blue-800 text-lg rounded cursor-pointer"
        >
          Serviços
        </a>
      </li>

      <li>
        <a
          @click.prevent="scrollToSection('about')"
          class="block py-2 px-3 text-black hover:text-blue-800 text-lg rounded cursor-pointer"
        >
          Sobre nós
        </a>
      </li>

      <li>
        <a
          @click.prevent="scrollToSection('contact')"
          class="block py-2 px-3 text-black hover:text-blue-800 text-lg rounded cursor-pointer"
        >
          Contato
        </a>
      </li>
    </ul>

    <div
      class="flex gap-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
    >
      <a
        v-if="userStore.userLoggedIn == false"
        class="text-[#03045e] hover:text-[#023e8a] hover:bg-[#e9ecef] font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 text-md rounded-lg px-4 py-2 text-center"
        href="#"
        @click.prevent="toggleAuthModal"
        >LOGIN / REGISTRO</a
      >

      <template v-else>
        <div class="relative pb-3 pr-4">
          <div class="t-0 absolute left-3">
            <p
              class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white"
            >
            {{ cartCount }}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="file: mt-4 h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>

        <router-link
          to="/consultorios"
          class="text-[#03045e] hover:text-[#023e8a] hover:bg-[#e9ecef] font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 text-md rounded-lg px-4 py-2 text-center"
          >Consultórios</router-link
        >

        <router-link
          to="/"
          class="text-[#03045e] hover:text-[#023e8a] hover:bg-[#e9ecef] font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 text-md rounded-lg px-4 py-2 text-center"
          href="#"
          @click.prevent="userStore.signOut"
        >
          Logout
        </router-link>
      </template>
    </div>
  </nav>
</template>
