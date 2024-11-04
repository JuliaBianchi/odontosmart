<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore, useUserStore),
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

    <ul class="flex flex-row p-4 mt-4 font-medium rounded-lg">
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
        v-if="!userStore.userLoggedIn"
        class="text-[#03045e] hover:text-[#023e8a] hover:bg-[#e9ecef] font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 text-md rounded-lg px-4 py-2 text-center"
        href="#"
        @click.prevent="toggleAuthModal"
        >LOGIN / REGISTRO</a
      >

      <template v-else>
        <button
          class="text-[#03045e] hover:text-[#023e8a] hover:bg-[#e9ecef] font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 text-md rounded-lg px-4 py-2 text-center"
          href="#"
        >
          Manage
        </button>

        <button
          class="text-[#03045e] hover:text-[#023e8a] hover:bg-[#e9ecef] font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 text-md rounded-lg px-4 py-2 text-center"
          href="#"
          @click.prevent="userStore.signOut"
        >
          Logout
        </button>
      </template>
    </div>
  </nav>
</template>
