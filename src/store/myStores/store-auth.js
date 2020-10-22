import Vue from 'vue'
import { firebaseAuth, firebaseDb } from 'boot/firebase'
import { LocalStorage, Loading } from 'quasar'
import { showErrorPasswordMessage, showErrorTooManyMessage } from 'src/functions/functions-show-messages'


const state = {
  loggedIn: false
}

const mutations = {
  SET_LOGGED_IN (state, value) {
    state.loggedIn = value
  }
}

const actions = {
  criarUsuario ({ }, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response: ', response)
      })
      .catch(error => {
        Loading.hide()
        console.log('error.message: ', error.message)
      })
  },

  loginUsuario ({ }, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        Loading.hide()
        this.$router.push('/profile')
      })
      .catch(error => {

        if (error.code == 'auth/wrong-password') showErrorPasswordMessage()
        if (error.code == 'auth/too-many-requests') showErrorTooManyMessage()
      })
  },

  logoutUser () {
    Loading.show()
    firebaseAuth.signOut()
    this.$router.push('/index')
  },

  onAuthStateChanged ({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(function (user) {
      Loading.hide()
      if (user) {
        commit('SET_LOGGED_IN', true)
        LocalStorage.set('loggedIn', true)

        //Buscar dados de outro store-tasks
        // Adicionar o Root
        dispatch('store_db_firebase/ReadDataFirebase', null, { root: true })


      } else {
        commit('SET_LOGGED_IN', false)
        LocalStorage.set('loggedIn', false)
      }
    });
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}