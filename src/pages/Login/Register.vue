<template>
  <div>
    <q-card-section class="q-pa-sm q-pa-xs">
      <q-input
        clearable
        outlined
        label="Nome"
        v-model="formData.name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Obrigatório']"
      >
        <template v-slot:prepend>
          <q-icon name="account_box" />
        </template>
      </q-input>

      <q-input
        v-model="formData.email"
        clearable
        outlined
        label="Email"
        class="q-py-md"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Obrigatório']"
      >
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>
      <q-input
        v-model="formData.password"
        clearable
        label="Senha"
        outlined
        class="q-py-md"
        lazy-rules
        :type="isPwd ? 'password' : 'text'"
        :rules="[ val => val && val.length > 0 || 'Obrigatório']"
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
        label="Cadastrar"
        type="submit"
        color="primary"
        con-right="send"
        class="full-width"
      />
    </q-card-actions>
    <q-separator />

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
        email: 'vanelli@teste.com',
        password: '123456'
      },
      isPwd: true,
      name: null,
      age: null,
      accept: false,
      icons: ''
    }
  },

  methods: {
    ...mapActions('store', ['registerUser', 'loginUser']),
    submitForm () {
      if (this.tab == 'login') {
        this.loginUser(this.formData)
      } else {
        this.registerUser(this.formData)

      }
    },
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }


}
</script>

<style lang="scss">
</style>
