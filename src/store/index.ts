import { create } from 'zustand'
import { lunches, breakfastAndDinners, desserts, drinks } from '@/data/menu.json'
import { events } from '@/data/events.json'
import { services } from '@/data/services.json'
import type { Event, Item, Service } from '@/types'

interface State {
  lunches: Item[]
  breakfastAndDinners: Item[]
  desserts: Item[]
  drinks: Item[]
  events: Event[]
  services: Service[]
}

const state: State = {
  lunches,
  breakfastAndDinners,
  desserts,
  drinks,
  events,
  services
}

export const useStore = create<State>((_set, _get) => ({
  ...state
}))
