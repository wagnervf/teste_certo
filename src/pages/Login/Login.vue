<template>
  <div class="flex flex-center q-pa-md">
    <q-card class="q-card q-pa-xs col-xs-12 col-sm-6 col-md-4">
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">O Lugar Certo</div>
          <div class="text-caption text-grey">
            Desapegar do que você já não é mais apegado.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="icons/olc/logo_olc2.png"
            alt="Logo olugarcerto"
            width="100px"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

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
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Obrigatório'] "
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
              ref="senha"
              outlined
              class="q-py-md"
              lazy-rules
              :type="isPwd ? 'password' : 'text'"
              :rules="[ val => val && val.length > 0 || 'Obrigatório']"
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
            <div
              align="right"
              class="q-pa-0"
            >
              <q-btn
                flat
                rounded
                label="Esqueceu a senha?"
                class="text-grey"
              />
            </div>

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

        <q-separator class="q-mb-md" />

        <q-card-section>
          <div class="text-right">
            <span class="text-grey q-pr-md">Não tem uma conta?</span>
            <q-btn
              size="sm"
              color="secondary"
              label="Cadastre-se"
              to="/register"
              exact
            />
          </div>
        </q-card-section>

        <q-card-section class="q-pt-md">
          <q-item-section class="content-center">
            <q-item-label caption>
              Ou acesse com sua conta
            </q-item-label>
          </q-item-section>

          <div class="q-pa-xs q-gutter-sm">
            <q-btn
              outline
              left
              color="primary full-width"
              label="Google"
              icon="img:icons/google_icon.png"
              :loading="false"
            >
            </q-btn>

            <q-btn
              left
              outline
              color="primary full-width"
              label="Facebook"
              icon="img:icons/facebook_icon.png"
              :loading="false"
            >
            </q-btn>
          </div>
        </q-card-section>
      </div>

    </q-card>

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
    ...mapActions('store', ['registerUser', 'loginUser']),

    // submitForm () {
    //if (this.tab == 'login') {
    //  this.loginUser(this.formData)
    //  } else {
    //    this.registerUser(this.formData)
    //  }
    // },
    onSubmit () {
      //if (this.tab == 'login') {
      this.loginUser(this.formData)

      // } else {
      //     this.registerUser(this.formData)
      //   }


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

<style lang="scss">
</style>
