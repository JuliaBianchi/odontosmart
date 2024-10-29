<template>
  <!-- Auth Modal -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    id="modal"
    :class="hiddenClass"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->

          <div class="flex justify-end items-center pb-4">
          
            <!-- Modal Close Button -->
            <div
              class="modal-close cursor-pointer z-50"
              @click="modalVisibility = false"
            >
              <img src="../assets/x (2).svg" alt="">
            </div>

          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition font-bold"
                href="#"
                @click.prevent="tab = 'login'"
                :class="{
                  'hover:text-white text-white bg-[#03045e]': tab === 'login',
                  'hover:text-[#03045e] ': tab === 'register',
                }"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition font-bold "
                href="#"
                @click.prevent="tab = 'register'"
                :class="{
                  'hover:text-white text-white bg-[#03045e]': tab === 'register',
                  'hover:text-[#03045e]': tab === 'login',
                }"
                >Cadastro</a
              >
            </li>
          </ul>

          <!-- Login Form -->
          <form v-show="tab === 'login'">
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">E-mail</label>
              <input
                type="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Digite seu e-mail"
              />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Senha</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Digite sua senha"
              />
            </div>
            <button
              type="submit"
              class="block w-full bg-blue-800 text-white py-1.5 px-3 rounded transition hover:bg-blue-900"
            >
              Entrar
            </button>
          </form>
          <!-- Registration Form -->
          <vee-form v-show="tab === 'register'">
            <!-- Name -->
            <div class="mb-3">
              <label class="inline-block mb-2">Nome</label>
              <input
                type="text"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Digite seu nome"
              />
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">E-mail</label>
              <input
                type="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Digite seu e-mail"
              />
            </div>
            
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Senha</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Digite uma senha"
              />
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Confirmação de senha</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Confirme sua senha"
              />
            </div>
            
           
            <button
              type="submit"
              class="block w-full bg-blue-800 text-white  py-1.5 px-3 rounded transition hover:bg-blue-900"
            >
              Cadastrar
            </button>
          </vee-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import useModalStore from "@/stores/modal";

export default {
  name: "AppAuth",
  data() {
    return {
      tab: "login",
    };
  },
  computed: {
    ...mapState(useModalStore, ["hiddenClass"]),
    ...mapWritableState(useModalStore, {
      modalVisibility: "isOpen",
    }),
  },
};
</script>
