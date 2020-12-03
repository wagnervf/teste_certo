import { Notify } from 'quasar'

export function notifyEmailVerification () {

  Notify.create({
    type: 'negative',
    message: 'O endereço de e-mail já está sendo usado por outra conta!'
  })

}

export function notifyUserCreated () {

  Notify.create({
    type: 'positive',
    message: 'Usuário cadastrado!'
  })

}


export function notifyEmailNotExist () {

  Notify.create({
    progress: true,
    message: 'Não há registro desse e-mail cadastrado. O usuário pode ter sido excluído.',
    color: 'purple',
    icon: 'warning',

  })
}


export function notifyVerificationEnviado (email) {
  Notify.create({
    progress: true,
    message: 'Email de verificação foi enviado para: ' + email,
    color: 'teal',
    icon: 'done',
  })
}

export function notifyGenericPositive (mensagem) {

  Notify.create({
    progress: true,
    type: 'positive',
    message: mensagem
  })

}

export function notifyGenericNegative (mensagem) {

  Notify.create({
    progress: true,
    type: 'negative',
    message: mensagem

  })

}