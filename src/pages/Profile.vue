<template>
  <q-page class="q-pa-sm q-pt-lg">
    <div class="row q-col-gutter-sm justify-center">
      <q-form
        @submit="submitForm"
        @reset="onReset"
        class="col-lg-8 col-md-8 col-xs-12 col-sm-12"
      >
        <q-card>
          <q-card-section class="text-h6 ">
            <div class="text-h6">Editar Meus Dados</div>
          </q-card-section>
          <q-card-section class="q-pa-sm">
            <q-list class="row">
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section side>
                  <q-avatar size="100px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-btn
                    label="Adicionar Foto"
                    class="text-capitalize"
                    rounded
                    color="info"
                    style="max-width: 120px"
                  ></q-btn>
                </q-item-section>
              </q-item>

              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    v-model="formData.name"
                    ref="name"
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

                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    v-model="formData.email"
                    ref="email"
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
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    v-model="formData.cep"
                    ref="cep"
                    label="Cep"
                    class="q-py-md"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Obrigatório'] "
                    clearable
                  >
                    <template v-slot:prepend>
                      <q-icon name="account_box" />
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              :loading="loading"
              size="large"
              color="info"
              type="submit"
              con-right="send"
              class="text-capitalize"
            >
              Salvar Dados
              <template v-slot:loading>
                <q-spinner-hourglass class="on-left" />
                Salvando...
              </template>
            </q-btn>
          </q-card-actions>
        </q-card>

      </q-form>

      <pre>
          {{formData}}
      </pre>

      <pre>
          {{userLogado}}
      </pre>

      <!-- <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
      <q-card>
        <q-card-section class="text-h6 q-pa-sm">
          <div class="text-h6">Alterar Senha</div>
        </q-card-section>
        <q-card-section class="q-pa-sm row">
          <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-item-section>
              Senha Atual
            </q-item-section>
          </q-item>
          <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input
                type="password"
                dense
                outlined
                round
                v-model="password_dict.current_password"
                label="Senha Atual"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-item-section>
              Nova Senha
            </q-item-section>
          </q-item>
          <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input
                type="password"
                dense
                outlined
                round
                v-model="password_dict.new_password"
                label="Nova Senha"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-item-section>
              Confirmar Nova Senha
            </q-item-section>
          </q-item>
          <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input
                type="password"
                dense
                outlined
                round
                v-model="password_dict.confirm_new_password"
                label="Confirmar Nova Senha"
              />
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn class="text-capitalize bg-info text-white">Salvar Nova Senha</q-btn>
        </q-card-actions>

      </q-card>
    </div> -->

    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import mixinUtils from 'src/mixins/mixin-utils'

export default {
  name: "UserProfile",
  mixins: [mixinUtils],

  data () {
    return {
      formData: {
        uid: '',
        name: '',
        email: '',
        cep: '',
        created: '',
        ultimoLogin: '',
        permission_id: '',
        active: '',
        photoUrl: ''
      },
      user_details: {},
      password_dict: {},



      isPwd: true,
      name: null,
      age: null,
      accept: false,
      icons: '',
      loading: false,
    }
  },
  mounted () {
    this.mapedDadosUser()
  },

  updated () {
    this.mapedDadosUser()
  },

  directives: {
    autofocus: {
      inserted (el) {
        el.focus()
      }
    }
  },

  components: {
    ...mapGetters('store_auth', ['getUserLogged'])

  },

  methods: {
    ...mapActions('store_auth', ['addUserProfileFB', 'updateProfileLogin']),

    mapedDadosUser () {
      this.formData.uid = this.getUserLogged.uid
      this.formData.name = this.getUserLogged.name
      this.formData.email = this.getUserLogged.email
      //formData.cep = '79051510'
      this.formData.created = this.getUserLogged.created
      this.formData.ultimoLogin = this.getUserLogged.ultimoLogin
      this.formData.permission_id = 1547
      this.formData.active = true

    },

    submitForm () {
      this.$refs.name.validate()
      this.$refs.email.validate()

      if (!this.$refs.name.hasError && !this.$refs.email.hasError) {
        this.simulateProgress()

        this.addUserProfileFB(this.formData)
        this.updateProfileLogin(this.formData)


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

