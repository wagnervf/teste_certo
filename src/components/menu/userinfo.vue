<template>
  <q-list class="full-width text-indigo-10">

    <div v-if="userEstaLogado">
      <q-item
        clickable
        v-ripple
        v-close-popup
        aria-hidden="true"
        :to="{ name: 'profile'}"
      >
        <q-item-section avatar>
          <q-icon name="account_circle" />
        </q-item-section>
        <q-item-section>Minha Conta</q-item-section>
      </q-item>
      <q-separator spaced />
      <q-item
        clickable
        v-ripple
        v-close-popup
        aria-hidden="true"
        name="sair"
        @click="logoutUser"
        exact
        class="text-indigo-10 text-h6"
      >
        <q-item-section avatar>
          <q-icon name="logout" />
        </q-item-section>
        <q-item-section>Sair</q-item-section>
      </q-item>
      <q-separator spaced />
      <q-separator spaced />
      <q-item
        clickable
        v-ripple
        v-close-popup
        aria-hidden="true"
        :to="{ name: 'administracao'}"
      >
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>
        <q-item-section>Configurações</q-item-section>
      </q-item>
    </div>

    <div v-else>
      <q-separator spaced />

      <q-item
        clickable
        v-ripple
        v-close-popup
        aria-hidden="true"
        name="Entrar"
        to="/auth"
        exact
        class="text-primary text-h6"
      >
        <q-item-section avatar>
          <q-icon name="login" />
        </q-item-section>
        <q-item-section>Entrar</q-item-section>
      </q-item>
      <q-separator spaced />

    </div>

  </q-list>
</template>
<script>
import { computed } from '@vue/composition-api'
import { mapState, mapActions } from 'vuex'
import store from '../../store/store'
import { METHODS } from 'http'
import mixinUtils from 'src/mixins/mixin-utils'

export default {
  name: 'UserInfo',
  mixins: [mixinUtils],
  data () {
    return {

    }
  },
  computed: {
    // ...mapState('store_auth', ['loggedIn']),
    // ...mapState('store_plataform', ['mobile', 'desktop']),

    // userEstaLogado () {
    //   return this.loggedIn
    // },

    // isMobile () {
    //   return this.mobile
    // },
  },

  methods: {
    ...mapActions('store_auth', ['logoutUser'])
  }


}
</script>