<template>
  <q-page class="flex">
    <div class="q-pa-md full-width">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          class="my-card full-width"
          flat
          bordered
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>

            <q-item-section class="q-pt-xs">
              <q-item-label caption>
                {{userDetails.name}}
              </q-item-label>
              <q-item-label>
                {{userDetails.email}}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
      </div>

      <q-separator />
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-toolbar-title>Usuários</q-toolbar-title>
      </q-toolbar>

      <q-list
        bordered
        class="full-width"
        separator
      >
        <q-item
          v-for="(user, key) in users"
          :key="key"
          :to="'/chat/' + key"
          class="q-my-sm"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-avatar
              color="primary"
              text-color="white"
            >
              {{ user.name.charAt(0) }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ user.name }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-badge
              class="q-pa-sm"
              :color="user.online ? 'light-green-5' : 'grey-4'"
            >{{user.online ? 'Online' : 'Offline'}}
            </q-badge>
          </q-item-section>
        </q-item>
        <q-separator />
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store/store'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'User',
  data () {
    return {}
  },
  computed: {
    // busca a variável users do store
    ...mapGetters('store', ['users']),
    ...mapState('store', ['userDetails']),

  },

  // methods: {

  // }

}
</script>
