import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
  state: () => ({
    count: 1
  }),

  getters: {
    double: (state) => state.count * 2
  },

  actions: {
    increment() {
      this.count += 1
    }
  }
})
