import { VueRouter } from 'vue-router';
import { Dialog, Notify } from 'quasar'
import { firebaseAuth, firebaseDb } from 'boot/firebase'
import { emailVerificationEnviado } from 'src/functions/functions-notify'


export function alertEmailVerification (user, email) {
  Dialog.create({
    title: '<span class="text-grey-8"> Verifique seu e-mail </span>',
    html: true,
    message: '<h7><strong>' + user + '</strong>, para continuar, precisamos que você confirme o e-mail que enviamos, para: <br> <br>' +
      '<p class="text-orange text-subtitle1" style="border-bottom: 1px solid #ddd; border-radius: 6px; padding: 8px;"> ' + email + '</p> </h7> <br> <br>' + '<p class="text-grey-6"> Caso não tenha recebido o email, clique em reenviar o e-mail de verificação.</p>'
    ,
    // '<a href=""><button style="background: #ff9800; width:150px; height: 35px; border-radius: 6px; padding: 15px; cursor: pointer; color: #fff; border: none; font-size: 16px;">Meu Botão</button></a>',

    class: 'q-pa-md',
    persistent: true,

    ok: {
      color: 'orange'
    },
    cancel: {
      label: 'Reenviar e-mail de verificação',
      size: "small",
      flat: true
    }

  })
    .onOk(() => {
      location.reload()
    })
    .onCancel(() => {
      let user = firebaseAuth.currentUser
      firebaseAuth.currentUser.sendEmailVerification(actionCodeSettings)
        .then(function () {
          //  emailVerificationEnviado(user.email)
        })
    })
}


//Botão Continuar da mensagem de Verificação de email
// url deve ser liberada no Firebase
export const actionCodeSettings = {

  url: 'http://localhost:8000/auth'

}