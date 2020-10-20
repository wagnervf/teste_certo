<template>

  <div class="auth-tabs q-py-md">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey q-py-sm"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab
          name="login"
          label="Entrar"
        />
        <q-tab
          name="register"
          label="Registrar"
        />
      </q-tabs>

      <q-separator />

      <div class="row q-pl-md q-pt-md ">
        <div class="col-8 q-pl-md text-center">
          <div class="text-h5 q-mt-sm q-mb-xs">O Lugar Certo</div>
          <div class="text-caption text-grey">
            Desapegar do que você já não é mais apegado.
          </div>
        </div>

        <div class="col-4 offset-md-4">
          <q-img
            class="rounded-borders"
            src="icons/olc/logo_olc2.png"
            alt="Logo olugarcerto"
            width="100px"
          />
        </div>
      </div>

      <q-tab-panels
        v-model="tab"
        animated
      >
        <q-tab-panel
          name="login"
          class="q-py-xs"
        >
          <page-login />

          <q-card-section class="q-pt-xs">
            <span class="text-grey q-pr-md">Não tem uma conta?</span>
            <div class="q-pa-xs q-gutter-sm">
              <q-btn
                left
                color="secondary full-width"
                label="Cadastre-se"
                @click="tab = 'register'"
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

        </q-tab-panel>

        <q-tab-panel name="register">
          <page-register />

          <q-card-section class="q-pt-sm">
            <div
              align="center"
              class="q-pa-0"
            >
              <q-btn
                class="q-pa-0 text-primary"
                flat
                rounded
                label="Já possuo uma conta!"
                exact
                @click="tab = 'login'"
              />
            </div>
          </q-card-section>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>

</template>

<script>
import PageLogin from './Login'
import PageRegister from './Register'

export default {


  components: {
    PageLogin,
    PageRegister
  },

  data () {
    return {
      tab: 'login'
    }
  },

  watch: {


  }

}

</script>
<style>
.auth-tabs {
  max-width: 600px;
  margin: 0 auto;
}
</style>