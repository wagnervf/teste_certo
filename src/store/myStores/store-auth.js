import Vue from 'vue'
import { firebaseAuth, firebaseDb } from 'boot/firebase'


const state = {}

const mutations = {}

const actions = {
  criarUsuario ({ }, payload) {
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response: ', response)
      })
      .catch(error => {
        console.log('error.message: ', error.message)
      })
  },

  loginUsuario ({ }, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response)
        //this.$router.push('/index')
      })
      .catch(error => {
        console.log(error.message)
      })
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}