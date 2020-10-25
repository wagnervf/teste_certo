import Vue from 'vue'
import { firebaseAuth, firebaseDb } from 'boot/firebase'
import { LocalStorage, Loading } from 'quasar'
import { showErrorPasswordMessage, showErrorTooManyMessage, showErrorEmailUsed } from 'src/functions/functions-show-messages'


const state = {
  loggedIn: false,
  userLogado: {
    uid: '',
    name: '',
    email: '',
    photoUrl: '',
    emailVerified: '',
    created: '',
    ultimoLogin: '',
    logado: ''
  }
}

const mutations = {
  SET_LOGGED_IN (state, value) {
    state.userLogado.logado = value
    state.loggedIn = value
  },

  SET_USER_LOGADO (state, payload) {
    if (payload != null) {
      state.userLogado.uid = payload.uid
      state.userLogado.name = payload.displayName
      state.userLogado.email = payload.email
      state.userLogado.photoUrl = payload.photoURL
      state.userLogado.emailVerified = payload.emailVerified
      state.userLogado.created = payload.metadata.creationTime
      state.userLogado.ultimoLogin = payload.metadata.lastSignInTime
    }
  }


}

const actions = {
  registrarLoginUsuario ({ }, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        // console.log('response: ', response)
        firebaseAuth.currentUser.updateProfile({ displayName: payload.name })

        commit('SET_USER_LOGADO', response.user)
        this.$router.push('/index')
      })
      .catch(error => {
        Loading.hide()
        console.log('error: ', error)
        if (error.code == 'auth/email-already-in-use') showErrorEmailUsed()

      })
  },

  loginUsuario ({ commit }, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        Loading.hide()
        commit('SET_USER_LOGADO', response.user)
        this.$router.push('/index')
      })
      .catch(error => {
        console.log(error)
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
        commit('SET_USER_LOGADO', user)
        // console.log(user)
        LocalStorage.set('loggedIn', true)

        //Buscar dados de outro store-tasks
        // Adicionar o Root
        dispatch('store_db_firebase/ReadDataFirebase', null, { root: true })

      } else {
        commit('SET_LOGGED_IN', false)
        LocalStorage.set('loggedIn', false)
      }
    });
  },

  addUserProfileFB ({ }, payload) {
    let taskRef = firebaseDb.ref('olc_db/users/' + payload.uid)
    taskRef.set(payload)
  },

  updateProfileLogin ({ }, payload) {

    if (payload != null) {
      const update = {
        displayName: payload.name,
        email: payload.email,
        photoURL: payload.photoUrl,
        emailVerified: payload.emailVerified,
      }

      firebaseAuth.currentUser.updateProfile(update)
        .then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        });
    }



  }


  //Qual o Provedor que acessou
  // value.user.providerData.forEach(function (profile) {
  //   console.log("Sign-in provider: " + profile.providerId);
  //   console.log("  Provider-specific UID: " + profile.uid);
  //   console.log("  Name: " + profile.displayName);
  //   console.log("  Email: " + profile.email);
  //   console.log("  Photo URL: " + profile.photoURL);
  // });



}






const getters = {
  getUserLogged: (state) => {
    return state.userLogado
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}