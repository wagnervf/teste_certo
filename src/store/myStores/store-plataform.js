import Vue from 'vue'
import { Platform } from 'quasar'
import { Screen } from 'quasar'

const state = {
  mobile: false,
  desktop: false,
  telaWidth: '',
  telaHeight: ''
}

const mutations = {
  SET_TIPO_PLATAFORM_MOBILE (state, value) {
    state.mobile = value
  },

  SET_TIPO_PLATAFORM_DESKTOP (state, value) {
    state.desktop = value
  },

  SET_TAMANHO_TELA (state, height, width) {
    state.telaWidth = width
    state.telaHeight = height
  },

}

const actions = {
  alterTipoPlataform ({ commit, ssrContext }) {
    const tipoPlataforma = process.env.SERVER
      ? Platform.parseSSR(ssrContext)
      : Platform

    if (tipoPlataforma.is.mobile) {
      commit('SET_TIPO_PLATAFORM_MOBILE', true)
    } else {
      commit('SET_TIPO_PLATAFORM_DESKTOP', true)
    }

  },

  // setTamanhoTela ({ commit }) {
  //   const height = this.$q.Screen.height
  //   const width = this.$q.Screen.width

  //   console.log(screen)

  //   commit('SET_TAMANHO_TELA', height, width)

  // }




}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}