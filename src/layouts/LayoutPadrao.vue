<template>
  <q-layout
    view="hHh lpR lF"
    class="bg-grey-1"
  >
    <q-header class="bg-white text-grey-8 shadow-box shadow-1">

      <div class="row q-py-md">
        <div class="col-1"><span class="q-ml-sm">Título</span></div>

        <div class="col-sm ">
          <q-input
            class="col q-px-md"
            standout="bg-primary"
            v-model="search"
            placeholder="Pesquisar"
          >
            <template v-slot:prepend>
              <q-icon
                v-if="search === ''"
                name="search"
              />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="search = ''"
              />
            </template>
          </q-input>
        </div>

        <div class="right-align">
          <q-btn
            align="left"
            size="lg"
            class="btn-fixed-width q-px-md"
            color="primary"
            label="Anunciar"
            :to="{ name: 'index'}"
          />
          <q-btn
            flat
            dense
            no-wrap
            color="primary"
            icon="account_circle"
            no-caps
            label="Entrar"
            class="q-ml-sm q-px-md"
          />
          <q-btn-dropdown
            unelevated
            v-model="userInfoOpen"
            no-caps
            class="col"
          >
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <div class="text-center q-pa-sm">
                  John Smith
                </div>
              </div>
            </template>
            <user-info></user-info>
          </q-btn-dropdown>
        </div>

      </div>

    </q-header>

    <Drawer />

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-1 text-grey-8 text-caption">
      <q-toolbar>
        <q-toolbar-title class="text-caption"><span class="material-icons">
            copyright
          </span> Wagner - 2020</q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>

</template>

<script>
import { computed } from '@vue/composition-api'
import { mapState, mapActions } from 'vuex'
import store from '../store/store'
import { METHODS } from 'http'
import mixinOtherUserDetails from 'src/mixins/mixin-other-user-details'
import UserInfo from '../components/menu/userinfo.vue';
import Drawer from './Drawer'


//import Drawer from './Drawer'

export default {
  name: 'LayoutPadrao',

  mixins: [mixinOtherUserDetails],

  components: {
    UserInfo,
    Drawer
  },

  data () {
    return {
      search: '',
      tab: 'mails',
      leftDrawerOpen: false,
      openSearch: false,
      search: '',
      userInfoOpen: false,
      pesquisarVisible: true

    }
  },

  computed: {
    ...mapState('store', ['userDetails']),


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
  },


}
</script>
<style lang="sass">
</style>


