<template>
  <q-layout class="bg-grey-1">

    <div v-if="isMobile || telaWidth < 1024">
      <DrawerMobile />
      <!-- <HeaderMobile /> -->
    </div>

    <q-header v-else>
      <HeaderDesktop />

      <div class="q-py-sm">
        <q-btn
          align="left"
          size="lg"
          class="btn-fixed-width q-px-md"
          color="primary"
          rounded
          :to="{ name: 'administracao'}"
          label="Administracao"
        />
      </div> <!-- Entrar -->
    </q-header>

    <!-- <Drawer /> -->

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
//import { mapState, mapActions } from 'vuex'
// import store from '../store/store'
// import { METHODS } from 'http'
import mixinUtils from 'src/mixins/mixin-utils'
import UserInfo from '../components/menu/userinfo.vue';

import HeaderDesktop from './headerDesktop'
import HeaderMobile from './headerMobile'
import Drawer from './Drawer'
import DrawerMobile from './DrawerMobile'

//import { Screen } from 'quasar'


export default {
  name: 'LayoutPadrao',

  mixins: [mixinUtils],

  components: {
    UserInfo,
    HeaderDesktop,
    Drawer,
    HeaderMobile,
    DrawerMobile
  },

  data () {
    return {
      search: '',
      tab: 'mails',
      leftDrawerOpen: false,
      openSearch: false,
      search: '',
      userInfoOpen: false,
      pesquisarVisible: true,
      tipoPlataforma: null

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
    // telaWidth () {
    //   return this.$q.screen.width
    // },

    // telaHeight () {
    //   return this.$q.screen.height
    // },



    title () {
      //return this.$route.fullPath == '/' ? 'Home' : this.$route.fullPath.substr(1).toLocaleUpperCase()
      // let currentPath = this.$route.fullPath
      // if (currentPath == '/') return 'FireChat'
      // else if (currentPath.includes('/chat')) return this.mixinOtherUserDetails.name
      // else if (currentPath == '/auth') return 'Login'
    },

    retornar () {
      //   return this.$route.fullPath.includes('/chat')
    },

    // mobile () {
    //   return this.tipoPlataforma.is.mobile
    // }
  },

  methods: {


    // isMobile (ssrContext) {
    //   this.tipoPlataforma = process.env.SERVER
    //     ? Platform.parseSSR(ssrContext)
    //     : Platform // otherwise we're on client

    //   console.log(this.tipoPlataforma.is.mobile)

    // }
  }


}
</script>
