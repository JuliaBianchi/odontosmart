<template>
  <div class="flex flex-col">
    <label for="date" class="mb-2 text-md font-medium text-black"
      >Selecione uma data:</label
    >
    <input
      type="date"
      id="date"
      v-model="selectedDate"
      @input="emitDate"
      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedDate: this.value,
    }
  },
  watch: {
    value(newVal) {
      this.selectedDate = newVal
    },
  },
  methods: {
    emitDate() {
      this.$emit('update:date', this.selectedDate)
    },
  },
}
</script>
