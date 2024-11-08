<script>
import AppHeader from '@/components/AppHeader.vue'

import { database } from '@/includes/firebase'

export default {
  name: 'OrdersView',
  components: {
    AppHeader,
  },
  data() {
    return {
      pedidos: [],
      valores: [],
      valorTotal: 0.0,
    }
  },
  async created() {
    try {
      database
        .collection('pedidos')
        .get()
        .then(querySnapshot => {
          const documents = querySnapshot.docs.map(doc => doc.data())

          this.pedidos = documents

          for (let index = 0; index < this.pedidos.length; index++) {
            this.valores.push(parseFloat(this.pedidos[index].item.valor))
            this.total = this.valores.reduce(
              (acumulador, valorAtual) => acumulador + valorAtual,
              0,
            )

            this.valorTotal = Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(this.total)
          }
        })
    } catch (error) {
      console.error('Erro ao buscar a coleção: ', error)
    }
  },
  methods: {
    formatarParaMoedaBrasileira(valor) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(valor)
    },
  },
}
</script>

<template>
  <AppHeader />

  <div class="h-screen flex flex-col items-center justify-center pt-[5rem]">
    <h1 class="text-4xl mb-10">Carrinho de reservas</h1>

    <div
      class="pt-10 w-full max-w-2xl"
      v-for="(pedido, index) in pedidos"
      :key="index"
    >
      <hr class="dashed w-full" />

      <div class="flex justify-center gap-16 pt-8 flex-row w-full">
        <img class="w-[10rem] rounded-md" :src="pedido.item.imagePath" />

        <div class="text-left">
          <p class="text-2xl pb-5">{{ pedido.item.title }}</p>
          <p class="text-xl pb-1">
            {{ pedido.item.cidade }} - {{ pedido.item.estado }}
          </p>
          <p class="text-xl pb-1">
            Reservado para o dia {{ pedido.data }} às {{ pedido.hora }} horas.
          </p>
          <p class="text-xl">1 X R$ {{ pedido.item.valor }}</p>
        </div>
      </div>
    </div>

    <div class="pb-10 mt-10 flex flex-col items-center">
      <h1 class="text-2xl mb-4">
        <strong>Total: </strong>{{ valorTotal }}
      </h1>

      <button
        @click="addToCart"
        class="text-white bg-blue-800 hover:bg-blue-900 font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 text-md rounded-lg px-14 py-3"
      >
        FINALIZAR
      </button>
    </div>
  </div>
</template>
