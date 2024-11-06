import { defineStore } from 'pinia'

export default defineStore("cart", {
    state: () => ({
        count: 0,
    }),
    actions: {
        addToCart(){
            this.count++
        }
    }

})