import { defineStore } from 'pinia'

interface RootState {
    currentRoute: string
}

export const useRoutingStore = defineStore({
  id: 'routing',
  state: (): RootState => ({
    currentRoute: window.location.pathname
  }),
})
