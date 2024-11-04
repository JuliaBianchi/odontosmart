<template>
  <div
    class="text-white text-center font-bold p-4 rounded mb-4"
    v-if="reg_show_alert"
    :class="reg_alert_variant"
  >
    {{ reg_alert_msg }}
  </div>
  <vee-form :validation-schema="schema" @submit="register">
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Nome</label>
      <vee-field
        name="name"
        type="text"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Digite seu nome"
        :rule="{
          required: true,
        }"
      />
      <ErrorMessage class="text-red-600" name="name" />
    </div>

    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">E-mail</label>
      <vee-field
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Digite seu e-mail"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>

    <!-- Cidade -->
    <div class="mb-3">
      <label class="inline-block mb-2">Cidade</label>
      <vee-field
        name="cidade"
        type="text"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Digite sua cidade"
      />
      <ErrorMessage class="text-red-600" name="cidade" />
    </div>

     <!-- Estado -->
     <div class="mb-3">
      <label class="inline-block mb-2"> Estado</label>
      <vee-field
        name="estado"
        type="text"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Digite seu estado"
      />
      <ErrorMessage class="text-red-600" name="estado" />
    </div>

    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        name="password"
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Defina uma senha"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>

    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <vee-field
        type="password"
        name="confirm_password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Repita sua senha"
      />
      <ErrorMessage class="text-red-600" name="confirm_password" />
    </div>
    <button
      type="submit"
      class="block w-full bg-blue-600 text-white py-1.5 px-3 rounded transition hover:bg-blue-700"
    >
      Cadastrar
    </button>
  </vee-form>
</template>

<script>
import { mapActions } from 'pinia'
import  useUserStore from '@/stores/user'

export default {
  name: 'RegisterForm',
  data() {
    return {
      tab: 'login',
      schema: {
        name: 'required|min:3|max:50|alpha_spaces',
        email: 'required|min:5|max:50|email',
        cidade: 'required',
        estado: 'required',
        password: 'required|min:9|max:100',
        confirm_password: 'passwords_mismatch:@password',
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_msg: 'Please wait! Your account is being created.',
    }
  },
  methods: {
    ...mapActions(useUserStore, {
      createUser: "register"
    }),

    async register(values) {
      this.reg_show_alert = true
      this.reg_in_submission = true
      this.reg_alert_variant = 'bg-blue-500'
      this.reg_alert_msg = 'Please wait! Your account is being created.'

      try {
        await this.createUser(values)
      
      } catch (error) {
        this.reg_in_submission = false
        this.reg_alert_variant = 'bg-red-500'
        this.reg_alert_msg = error
        console.log(error)
        return
      }
    
      this.reg_alert_variant = 'bg-green-500'
      this.reg_alert_msg = 'Sucess! Your account has been created.'
      window.location.reload();
    },
  },
}
</script>
