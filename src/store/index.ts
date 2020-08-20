//import { store } from "quasar/wrappers"
import Vue from "vue"
import Vuex from "vuex"

import store from "./store"

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */
Vue.use(Vuex);
export interface StoreInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: unknown;
}

export default (function () {
  const Store = new Vuex.Store({
    modules: {
      store
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  })

  return Store;
})
