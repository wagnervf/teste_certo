import Vue from 'vue'
import { firebaseAuth, firebaseDb } from 'boot/firebase'
import { LocalStorage, Loading, Notify } from 'quasar'
import { showErrorPasswordMessage, showErrorTooManyMessage, showErrorEmailUsed } from 'src/functions/functions-show-messages'
import { notifyEmailVerification, notifyUserCreated, notifyEmailNotExist, notifyVerificationEnviado, notifyGenericPositive, notifyGenericNegative } from 'src/functions/functions-notify'
import { alertEmailVerification, actionCodeSettings } from 'src/functions/functions-email-public'


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
    logado: '',

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
  registrarLoginUsuario ({ dispatch }, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        //console.log(response)
        firebaseAuth.currentUser.updateProfile({ displayName: payload.displayName })
        dispatch('sendEmailVerification', payload)
        //notifyUserCreated()

        setTimeout(() => {
          dispatch('loginUsuario', payload)
        }, 1000)


      })
      .catch(error => {
        Loading.hide()
        console.log('error: ', error)
        notifyEmailVerification()
        // if (error.code == 'auth/email-already-in-use') showErrorEmailUsed()
      })
  },

  loginUsuario ({ commit, dispatch }, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        // console.log(response)
        dispatch('verificationUserValidation', response.user)

      })
      .catch(error => {
        console.log(error)
        Loading.hide()
        if (error.code == 'auth/wrong-password') showErrorPasswordMessage()
        if (error.code == 'auth/too-many-requests') showErrorTooManyMessage()
        if (error.code == 'auth/user-not-found') notifyEmailNotExist()
      })


  },

  logoutUser () {
    Loading.hide()
    firebaseAuth.signOut()
    this.$router.push('/index').catch(err => { })
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
        displayName: payload.displayName,
        email: payload.email,
        photoURL: payload.photoUrl,
        emailVerified: payload.emailVerified,
      }

      firebaseAuth.currentUser.updateProfile(update)
        .then(response => {
          console.log(response)
          Notify.create({
            type: 'positive',
            message: 'Perfil Atualizado!'
          })
        }).catch(error => {
          console.log(error)
        });
    }
  },

  deleteDataFirebase ({ }, userID) {
    // let userId = firebaseAuth.currentUser.uid
    let taskRef = firebaseDb.ref('olc_db/users/' + userID)
    taskRef.remove().then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    });
  },


  verificationUserValidation ({ commit, dispatch }, payload) {
    Loading.hide()
    let user = firebaseAuth.currentUser

    if (user.emailVerified === true) {
      commit('SET_USER_LOGADO', payload)
      this.$router.push('/index')

    } else {

      alertEmailVerification(user.displayName, user.email)
      commit('SET_USER_LOGADO', {})
      firebaseAuth.signOut()
    }



  },

  sendEmailVerification ({ }, payload) {
    let user = firebaseAuth.currentUser
    user.sendEmailVerification(actionCodeSettings)
      .then(function (user) {
        notifyVerificationEnviado(payload.email)
        //notifyUserCreated()
      })
      .catch(function (error) {
        notifyGenericNegative('Erro ao enviar e-mail de validação! Verifque o seu endereço de e-mail está correto!')
        console.log(error)
      });
  },

  //actionCodeSettings --> Link para voltar após redefinir senha
  redifirSenhaUsuario ({ }, email) {
    console.log(email)
    if (email) {
      firebaseAuth.sendPasswordResetEmail(email, actionCodeSettings).then(function (user) {
        notifyGenericPositive('E-mail de redefinição de senha enviado para ' + email + '.')
      })
        .catch(function (error) {
          notifyGenericNegative('Erro ao enviar e-mail de redefinição de senha! Verifque o seu endereço de e-mail está correto!')
          console.log(error)
        });
    }
  }








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