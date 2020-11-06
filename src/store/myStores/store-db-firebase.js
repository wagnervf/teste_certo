import { firebaseDb } from 'boot/firebase'

//gerador de ID
import { uid } from 'quasar'

const actions = {
  // Action é tulizada lá no @click e o Action Chama o Mutations que irá atualizar o states
  ReadDataFirebase () {
    console.log('ReadDataFirebase.......')
  },
}

export default {
  namespaced: true,
  actions

}