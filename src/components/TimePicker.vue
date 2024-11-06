<template>
    <div class="flex flex-col">
      <label for="time" class="mb-2 text-md font-medium text-black">Selecione um horário:</label>
      <input
        type="time"
        id="time"
        v-model="selectedTime"
        @input="emitTime"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'TimePicker',
    props: {
      value: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        selectedTime: this.value,
      };
    },
    watch: {
      value(newVal) {
        this.selectedTime = newVal; 
      },
    },
    methods: {
      emitTime() {
        this.$emit('update:time', this.selectedTime); 
      },
    },
  };
  </script>
  