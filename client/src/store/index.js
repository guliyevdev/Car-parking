import { createStore } from 'vuex'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export default createStore({
  state: {
    ModalStatus: false
  },
  getters: {
  },
  mutations: {
    ModalIsActive (state) {
      state.ModalStatus = !state.ModalStatus
      console.log(state.ModalStatus)
    }
  },
  actions: {
    async GetTruckNumber ({ commit }, number) {
      const request = await axios.get('/truck/number' + number)
      return request.data
    }
  },
  modules: {
  }
})
