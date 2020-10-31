<template>
  <div class="q-pa-sm">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-card-section class="q-pa-xs">
        <q-input
          v-model="formData.email"
          ref="email"
          outlined
          label="Email"
          class="q-py-md"
          :rules="[
                val => !! val || '* Obrigatório',
                val => isValidEmail(val) || 'Digite um email válido!'
              ]"
          lazy-rules
          v-autofocus
          clearable
          type="email"
        >
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>
        <q-input
          v-model="formData.password"
          label="Senha"
          ref="password"
          outlined
          class="q-pt-sm"
          lazy-rules
          :type="isPwd ? 'password' : 'text'"
          :rules="[
                val => !!val || '* Obrigatório',
                val => val.length >=6 || 'Digite no mínimo 6 caracteres.'
              ]"
          clearable
          counter
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions
        align="right"
        class="q-pa-sm"
      >
        <q-btn
          label="Entrar"
          type="submit"
          color="primary"
          con-right="send"
          class="full-width"
        />
      </q-card-actions>
    </q-form>

    <div
      align="right"
      class="q-pa-sm"
    >
      <q-btn
        flat
        rounded
        label="Esqueceu a senha?"
        class="text-grey"
        @click="openDialogRedefinirSenha"
      />
    </div> <!-- Esqueceu a senha -->

    <q-separator class="q-ma-sm" />

    <div>
      <q-card-section class="q-pt-xs">
        <span class="text-grey q-pr-md">Não tem uma conta?</span>
        <div class="q-pa-xs q-gutter-sm">
          <q-btn
            left
            outline
            color="accent full-width"
            label="Cadastre-se"
            v-on:click="registerSelect"
          >
          </q-btn>

          <q-item-section class="content-center">
            <q-item-label caption>
              Ou acesse com sua conta
            </q-item-label>
          </q-item-section>

          <q-btn
            outline
            left
            color="primary full-width"
            label="Google"
            icon="img:icons/google_icon.png"
            :loading="false"
            @click="LoginWithGoogle"
          >
          </q-btn>

          <q-btn
            left
            outline
            color="primary full-width"
            label="Facebook"
            icon="img:icons/facebook_icon.png"
            :loading="false"
            @click="LoginWithFacebook"
          >
          </q-btn>
        </div>
      </q-card-section>
    </div> <!-- Acesso com Google ou Facebook -->

    <q-dialog
      v-model="dialogRedefinirSenha"
      persistent
    >
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">E-mail para redefinir</div>
        </q-card-section>

        <q-card-section class="q-pt-none">

          <q-input
            v-model="emailRedefinirSenha"
            ref="emailRedefinir"
            outlined
            dense
            class="q-py-md"
            :rules="[
                val => !! val || '* Obrigatório',
                val => isValidEmail(val) || 'Digite um email válido!'
              ]"
            lazy-rules
            autofocus
            type="email"
            clearable
            @keyup.enter="prompt = false"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="Cancelar"
            color="negative"
            v-close-popup
            class=" text-capitalize"
          />
          <q-btn
            flat
            color="primary"
            label="Enviar"
            class=" text-capitalize"
            v-close-popup
            @click="redefinirSenhaLogin"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['tab'],

  data () {
    return {
      formData: {
        displayName: '',
        email: 'maria@teste.com',
        password: '123456'
      },
      emailRedefinirSenha: null,
      dialogRedefinirSenha: false,
      isPwd: true,
      name: null,
      age: null,
      accept: false,
      icons: ''
    }
  },

  methods: {
    ...mapActions('store_auth', ['loginUsuario', 'redifirSenhaUsuario', 'loginInWithGoogle', 'loginInWithFacebook']),

    onSubmit () {
      this.$refs.email.validate()
      this.$refs.password.validate()
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        this.loginUsuario(this.formData)
      }

    },

    openDialogRedefinirSenha () {
      this.dialogRedefinirSenha = true
      this.emailRedefinirSenha = this.formData.email
    },

    redefinirSenhaLogin () {
      this.$refs.emailRedefinir.validate()
      if (!this.$refs.emailRedefinir.hasError) {
        console.log(this.emailRedefinirSenha)
        this.redifirSenhaUsuario(this.emailRedefinirSenha)
      }
    },

    LoginWithGoogle () {
      this.loginInWithGoogle()
    },

    LoginWithFacebook () {
      this.loginInWithFacebook()
    },


    isValidEmail (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    onReset () {
      // this.name = null
      // this.age = null
      // this.accept = false
    },

    registerSelect () {
      this.$emit('tab-register', 'register')
    }

  },

  //utilizado em coisas mais simples que não altera
  // filters: {
  //   camelCase (value) {
  //     return value.text - capitalize;
  //   }
  // }
  directives: {
    autofocus: {
      inserted (el) {
        el.focus()
      }
    }
  }


}
</script>

<style>
.auth-tabs {
  max-width: 600px;
  margin: 0 auto;
}
</style>