<script>
import AppHeader from '@/components/AppHeader.vue'

import consultorio1 from '@/assets/img/1.jpg'
import consultorio2 from '@/assets/img/2.jpg'
import consultorio3 from '@/assets/img/3.jpg'
import consultorio4 from '@/assets/img/4.jpg'
import consultorio5 from '@/assets/img/5.jpg'
import consultorio6 from '@/assets/img/6.jpg'

import AppCard from '@/components/AppCard.vue'

import sourceData from '@/data.json'
console.log(sourceData)

export default {
  name: 'AppView',
  components: {
    AppHeader,
    AppCard,
  },
  data() {
    return {
      search: '',
      consultorioss: sourceData.consultorios,
      consultorios: [
        {
          id: 1,
          title: 'Sala Odontológica',
          description:
            'Sala com equipo, ar condicionado, sala de esterilização, Raio X, impressora 3D, fotopolimerizador, incluso água, luz, internet, limpeza.',
          imagePath: consultorio1,
          cidade: 'Passo Fundo',
          estado: 'RS',
          valor: 350.00,
          contato: '+ 55 54 99999-9999'
        },
        {
          id: 2,
          title: 'Sala Odontológica',
          description:
            'Sala com equipo, ar condicionado, sala de esterilização, Raio X, impressora 3D, fotopolimerizador, incluso água, luz, internet, limpeza.',
          imagePath: consultorio2,
          cidade: 'Porto Alegre',
          estado: 'RS',
          valor: 300.00,
          contato: '+ 55 54 99999-9999'
        },
        {
          id: 3,
          title: 'Consultório Odontológico Alugar',
          description:
            'Sala com equipo, ar condicionado, sala de esterilização, Raio X, impressora 3D, incluso água, luz, internet, limpeza.',
          imagePath: consultorio3,
          cidade: 'Passo Fundo',
          estado: 'RS',
          valor: 250.00,
          contato: '+ 55 54 99999-9999'
        },
        {
          id: 4,
          title: 'Sala Odontológica',
          description:
            'Sala com equipo, ar condicionado, sala de esterilização, Raio X, incluso água, luz, internet, limpeza.',
          imagePath: consultorio4,
          cidade: 'Porto Alegre',
          estado: 'RS',
          valor: 200.00,
          contato: '+ 55 54 99999-9999'
        },
        {
          id: 5,
          title: 'Consultório Odontológico Centro',
          description:
            'Sala com equipo odontológico básico e sala de esterilização, incluso água, luz, internet, limpeza. ',
          imagePath: consultorio5,
          cidade: 'Passo Fundo',
          estado: 'RS',
          valor: 150.00,
          contato: '+ 55 54 99999-9999'
        },
        {
          id: 6,
          title: 'Consultório Odontológico Completo',
          description:
            'Sala com equipo odontológico básico e sala de esterilização, incluso água, luz, internet, limpeza.',
          imagePath: consultorio6,
          cidade: 'Porto Alegre',
          estado: 'RS',
          valor: 100.00,
          contato: '+ 55 54 99999-9999'
        },
      ],
    }
  },
  computed: {
    filteredConsultorios() {
      return this.consultorios.filter(consultorio =>
        consultorio.cidade.toLowerCase().includes(this.search.toLowerCase()) ,
      )
    },
  },
}
</script>

<template>
  <section>
    <AppHeader />

    <div class="pt-40">
      <form class="max-w-md mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-black sr-only"
        ></label>
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            v-model="search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Procurar por locais..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Pesquisar
          </button>
        </div>
      </form>
    </div>
  </section>

  <section class="grid grid-cols-4 gap-4 p-10">
  
      <AppCard v-for="consultorio in filteredConsultorios"
      :key="consultorio.id" :consultorio="consultorio" />
  </section>
</template>
