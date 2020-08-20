<template>

  <div
    class="q-pa-md"
    style="max-width: 280px"
  >
    <q-list
      class="text-grey-8"
      style="min-width: 100px; width: 260px"
    >
      <q-item>
        <q-item-section class="text-center">
          <q-item-label lines="1">
            <div class="text-h5">John Smith</div>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />
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

      <q-separator spaced />
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

      <q-item
        clickable
        v-ripple
        v-close-popup
        aria-hidden="true"
        v-if="!userDetails.userId"
        name="Entrar"
        to="/login"
        exact
      >
        <q-item-section avatar>
          <q-icon name="login" />
        </q-item-section>
        <q-item-section>Entrar</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        v-close-popup
        aria-hidden="true"
        v-else
        @click="logoutUser"
        name="sair"
        to="/login"
        exact
      >
        <q-item-section avatar>
          <q-icon name="logout" />
        </q-item-section>
        <q-item-section>sair</q-item-section>
      </q-item>

    </q-list>

  </div>
</template>
<script>
import { computed } from '@vue/composition-api'
import { mapState, mapActions } from 'vuex'
import store from '../../store/store'
import { METHODS } from 'http'
import mixinOtherUserDetails from 'src/mixins/mixin-other-user-details'

export default {
  name: 'UserInfo',
  mixins: [mixinOtherUserDetails],
  data () {
    return {

    }
  },
  computed: {
    ...mapState('store', ['userDetails']),

    possuiID () {
      //    console.log(store.state.userDetails)
    },
    title () {
      //return this.$route.fullPath == '/' ? 'Home' : this.$route.fullPath.substr(1).toLocaleUpperCase()
      let currentPath = this.$route.fullPath
      if (currentPath == '/') return 'FireChat'
      else if (currentPath.includes('/chat')) return this.mixinOtherUserDetails.name
      else if (currentPath == '/auth') return 'Login'
    },

    retornar () {
      return this.$route.fullPath.includes('/chat')
    },

    // otherUserDetails () {
    //   return this.$store.state.store.users[this.$route.fullPath.substring(6)]
    // }
  },

  methods: {
    ...mapActions('store', ['logoutUser'])
  }


}
</script>