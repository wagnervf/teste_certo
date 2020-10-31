<template>

  <div class="auth-tabs">
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

      <div class="row q-pa-sm">
        <div
          class="col text-center clickable"
          @click="goHome"
          style="cursor: pointer"
        >
          <q-tooltip>Voltar para o início.
          </q-tooltip>
          <div class="text-h5 q-mt-sm q-mb-xs">O Lugar Certo</div>
          <div class="text-caption text-grey">
            Desapegar do que você já não é mais apegado.
          </div>
        </div>

        <div
          class="col-3"
          v-if="!isMobile"
        >
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
          <page-login @tab-register="tabRegister" />

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
import mixinUtils from 'src/mixins/mixin-utils'

export default {

  mixins: [mixinUtils],

  components: {
    PageLogin,
    PageRegister
  },

  data () {
    return {
      tab: 'login'
    }
  },

  methods: {
    //$emit que vem do Login.vue
    tabRegister (value) {
      this.tab = value
    },

    goHome () {
      this.$router.push('/index').catch(err => { })
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