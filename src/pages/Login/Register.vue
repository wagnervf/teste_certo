<template>
  <div class="q-pa-sm">
    <q-card-section class="text-center">
      <div class="text-h5  text-grey">Crie sua conta. É grátis!</div>
    </q-card-section>

    <q-form
      @submit="submitForm"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-card-section class="q-pa-sm">
        <q-input
          v-model="formData.nome"
          ref="nome"
          outlined
          label="Nome"
          class="q-py-md"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Obrigatório'] "
          v-autofocus
          clearable
        >
          <template v-slot:prepend>
            <q-icon name="account_box" />
          </template>
        </q-input>

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
          clearable
          type="email"
        >
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>
        <q-input
          v-model="formData.senha"
          label="Senha"
          ref="senha"
          outlined
          class="q-py-md"
          lazy-rules
          :type="isPwd ? 'password' : 'text'"
          :rules="[
                val => !!val || '* Obrigatório',
                val => val.length >=6 || 'Digite no mínimo 6 caracteres.'
              ]"
          clearable
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
        class="q-pa-xs q-mt-none"
      >
        <q-btn
          :loading="loading"
          color="primary"
          type="submit"
          con-right="send"
          class="full-width"
          style="width: 150px"
        >
          Cadastrar
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            Cadastrando...
          </template>
        </q-btn>
      </q-card-actions>
    </q-form>

  </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {

  data () {
    return {
      formData: {
        nome: '',
        email: 'vanelli@teste.com',
        password: '123456'
      },
      isPwd: true,
      name: null,
      age: null,
      accept: false,
      icons: '',
      loading: false,
    }
  },

  directives: {
    autofocus: {
      inserted (el) {
        el.focus()
      }
    }
  },

  methods: {
    ...mapActions('store_auth', ['criarUsuario']),


    submitForm () {

      this.$refs.nome.validate()
      this.$refs.email.validate()
      this.$refs.senha.validate()

      if (!this.$refs.nome.hasError && !this.$refs.email.hasError && !this.$refs.senha.hasError) {
        this.simulateProgress()
        this.criarUsuario(this.formData)
      }


    },

    isValidEmail (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    simulateProgress () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
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
