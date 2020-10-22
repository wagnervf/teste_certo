import { Dialog, Loading } from 'quasar'

const mensagemErroSenha = 'Usuário ou senha errado!';
const mensagemErroRepetido = "O acesso a esta conta foi temporariamente desativado devido a muitas tentativas de login malsucedidas. Você pode restaurá-la imediatamente redefinindo sua senha ou pode tentar novamente mais tarde."


export function showErrorPasswordMessage () {
  Loading.hide()

  Dialog.create({
    //title: 'Erro',
    message: mensagemErroSenha,
    position: 'bottom',
    class: 'text-white bg-red-4 q-pa-xs',
    dark: true,

    ok: {
      color: 'red-5'
    },

  })


}

export function showErrorTooManyMessage () {
  Loading.hide()
  Dialog.create({
    //title: 'Erro',
    message: mensagemErroRepetido,
    position: 'bottom',
    class: 'text-white bg-red-4 q-pa-xs',
    dark: true,

    ok: {
      color: 'red-5'
    },

  })


}




