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
      />
    </div>

    <q-separator class="q-ma-sm" />

  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['tab'],
  data () {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      },
      isPwd: true,
      name: null,
      age: null,
      accept: false,
      icons: ''
    }
  },

  methods: {
    ...mapActions('store_auth', ['loginUsuario']),

    onSubmit () {
      this.$refs.email.validate()
      this.$refs.password.validate()

      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        this.loginUsuario(this.formData)
      }

    },

    isValidEmail (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
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