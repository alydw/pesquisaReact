import { createStore, persist } from "easy-peasy";
import { store2 } from './object'

export const store = createStore(persist(store2));