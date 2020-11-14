import { firebaseAuth, firebaseDb } from 'boot/firebase'
import { notifyGenericPositive, notifyGenericNegative } from 'src/functions/functions-notify'

//gerador de ID
import { uid } from 'quasar'

const actions = {
  // Action é tulizada lá no @click e o Action Chama o Mutations que irá atualizar o states
  ReadDataFirebase () {
    console.log('ReadDataFirebase.......')
  },

  addAnuncioImoveisVenda ({ }, payload) {
    let anuncioId = uid()
    let userId = firebaseAuth.currentUser.uid

    payload.id = anuncioId
    payload.user = userId
    let taskRef = firebaseDb.ref('olc_db/imoveis_venda/' + anuncioId)

    taskRef.set(payload).then(resposta => {
      console.log(resposta)
      notifyGenericPositive('Cadastrado Positivo!')
    }).catch(error => {
      console.log(error)
      notifyGenericNegative('Erro ao cadastrar!')
    });

  }

  // addUserProfileFB ({ }, payload) {
  //   let taskRef = firebaseDb.ref('olc_db/users/' + payload.uid)
  //   taskRef.set(payload)
  // },

}

export default {
  namespaced: true,
  actions

}