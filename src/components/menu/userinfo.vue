<template>

  <div
    class="q-pa-md"
    style="max-width: 280px"
  >
    <q-list
      class="text-grey-8"
      style="min-width: 100px; width: 260px"
    >
      <!-- <q-item>
        <q-item-section class="text-center">
          <q-item-label lines="1">
            <div class="text-h5">John Smith</div>
          </q-item-label>
        </q-item-section>
      </q-item> -->

      <!-- <q-separator spaced /> -->
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

        <q-item
          clickable
          v-ripple
          v-close-popup
          aria-hidden="true"
        >
          <q-item-section avatar>
            <q-icon name="notifications" />
          </q-item-section>
          <q-item-section>Notificações</q-item-section>
          <q-item-section side>
            <q-badge
              color="red"
              label="5"
            />
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          v-close-popup
          aria-hidden="true"
          name="sair"
          @click="logoutUser"
          exact
        >
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>Sair</q-item-section>
        </q-item>
      </div>

      <div v-else>
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
      </div>

      <q-separator spaced />

      <div v-if="userEstaLogado">
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

      <p>Conectado: <b> {{userEstaLogado}}</b> </p>

      <q-footer>
        <q-item
          clickable
          v-ripple
          v-close-popup
          aria-hidden="true"
        >
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>
          <q-item-section>Ajuda</q-item-section>
        </q-item>
      </q-footer>
    </q-list>

  </div>
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