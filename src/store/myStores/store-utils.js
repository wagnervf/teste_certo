
const state = {
  filterDialogBottom: false,

}

const mutations = {
  OPEN_DIALOG_FILTER_BOTTOM (state, payload) {
    console.log(payload)
    state.filterDialogBottom = payload
  },


}

const actions = {
  setDialogFilterBottom ({ commit }, payload) {
    console.log(payload)
    commit('OPEN_DIALOG_FILTER_BOTTOM', payload)

  }
}


const getters = {
  getFilterDialogBottom: (state) => {
    return state.filterDialogBottom
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
