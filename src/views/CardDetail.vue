<script>
import AppHeader from '@/components/AppHeader.vue'
import DatePicker from '@/components/DatePickerComponent.vue'
import { auth, ordersCollection } from '@/includes/firebase'
import consultorio1 from '@/assets/img/1.jpg'
import consultorio2 from '@/assets/img/2.jpg'
import consultorio3 from '@/assets/img/3.jpg'
import consultorio4 from '@/assets/img/4.jpg'
import consultorio5 from '@/assets/img/5.jpg'
import consultorio6 from '@/assets/img/6.jpg'
import TimePicker from '@/components/TimePicker.vue'
import ContactView from './ContactView.vue'

import uuid from "vue-uuid";

export default {
  name: 'CardDetails',
  components: {
    AppHeader,
    DatePicker,
    TimePicker,
    ContactView,
  },
  data() {
    return {
      selectedDate: '',
      selectedTime: '',
      item: {},
      orders: [],
      order: {
        item: '',
        dia: '',
        horario: '',
      },
    }
  },
  mounted() {
    const itemId = this.$route.params.id
    this.buscarItem(itemId)
  },
  methods: {
    updateInputDate(event) {
      this.selectedDate = event.target.value
    },
    updateInputTime(event) {
      this.selectedTime = event.target.value
    },
    async addToCart() {
      const order = {
        display_name: auth.currentUser.email,
        item: this.item,
        data: this.selectedDate,
        hora: this.selectedTime,
      }

      try {
        await ordersCollection.add(order)
        alert('Item adicionado ao carrinho')
      } catch (error) {
        alert('Ops, ocorreu um erro.')
        console.log(error)
      }

    },
    buscarItem(id) {
      const itens = [
        {
          id: 1,
          title: 'Sala Odontológica',
          description:
            'Sala com equipo, ar condicionado, sala de esterilização, Raio X, impressora 3D, fotopolimerizador, incluso água, luz, internet, limpeza.',
          imagePath: consultorio1,
          cidade: 'Passo Fundo',
          estado: 'RS',
          valor: '350,00',
          contato: '+ 55 54 99999-9999',
        },
        {
          id: 2,
          title: 'Sala Odontológica',
          description:
            'Sala com equipo, ar condicionado, sala de esterilização, Raio X, impressora 3D, fotopolimerizador, incluso água, luz, internet, limpeza.',
          imagePath: consultorio2,
          cidade: 'Porto Alegre',
          estado: 'RS',
          valor: '300,00',
          contato: '+ 55 54 99999-9999',
        },
        {
          id: 3,
          title: 'Consultório Odontológico Alugar',
          description:
            'Sala com equipo, ar condicionado, sala de esterilização, Raio X, impressora 3D, incluso água, luz, internet, limpeza.',
          imagePath: consultorio3,
          cidade: 'Passo Fundo',
          estado: 'RS',
          valor: '250,00',
          contato: '+ 55 54 99999-9999',
        },
        {
          id: 4,
          title: 'Sala Odontológica',
          description:
            'Sala com equipo, ar condicionado, sala de esterilização, Raio X, incluso água, luz, internet, limpeza.',
          imagePath: consultorio4,
          cidade: 'Porto Alegre',
          estado: 'RS',
          valor: '200,00',
          contato: '+ 55 54 99999-9999',
        },
        {
          id: 5,
          title: 'Consultório Odontológico Centro',
          description:
            'Sala com equipo odontológico básico e sala de esterilização, incluso água, luz, internet, limpeza. ',
          imagePath: consultorio5,
          cidade: 'Passo Fundo',
          estado: 'RS',
          valor: '150,00',
          contato: '+ 55 54 99999-9999',
        },
        {
          id: 6,
          title: 'Consultório Odontológico Completo',
          description:
            'Sala com equipo odontológico básico e sala de esterilização, incluso água, luz, internet, limpeza.',
          imagePath: consultorio6,
          cidade: 'Porto Alegre',
          estado: 'RS',
          valor: '100,00',
          contato: '+ 55 54 99999-9999',
        },
      ]
      this.item = itens.find(i => i.id == id)
    },
  },
}
</script>

<template>
  <AppHeader />

  <container
    class="w-full h-screen flex justify-center items-center bg-slate-100 pt-40"
  >
    <div class="w-[80%] h-screen flex">
      <section class="w-[50% flex flex-col justify-center items-center py-12]">
        <img class="w-[31rem] rounded-md" :src="item.imagePath" />
      </section>

      <section
        class="w-[50%] flex flex-col justify-center items-start p-12 gap-10"
      >
        <h2 class="text-5xl">{{ item.title }}</h2>
        <p class="text-2xl">{{ item.cidade }} - {{ item.estado }}</p>
        <p class="text-lg">{{ item.description }}</p>
        <p class="text-lg">
          <strong>Valor do aluguel: </strong> R$ {{ item.valor }}
        </p>
        <p class="text-lg">
          <strong
            >OBS: Seguir as normas da ANVISA e do CRO. Por motivos de segurança
            o local exato é fornecido somente após a confirmação da reserva
            finalizada.</strong
          >
        </p>
        <p class="text-lg"><strong>Contato:</strong> {{ item.contato }}</p>
      </section>

      <div class="flex flex-col justify-center p-12 gap-10">
        <DatePicker
          class="pb-5"
          v-model="selectedDate"
          @input.prevent="updateInputDate"
        />
        <TimePicker
          v-model="selectedTime"
          :value="selectedTime"
          @input.prevent="updateInputTime"
        />

        <button
          @click="addToCart"
          class="flex text-white bg-blue-800 hover:bg-blue-900 font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 text-md rounded-lg px-14 py-3 text-center"
        >
          Adicionar<img class="pl-2" src="/src/assets/plus.svg" alt="" />
        </button>
      </div>
    </div>
  </container>

  <ContactView />
</template>
