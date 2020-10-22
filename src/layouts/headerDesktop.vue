<template>
  <div class="q-pa-md bg-white text-grey-8 shadow-box shadow-1">

    <div class="row justify-center">
      <div class="col-12 col-md-2">
        <q-toolbar-title>
          <q-avatar @click="home">
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          O Lugar Certo
        </q-toolbar-title>
      </div>

      <div class="col-12 col-md-auto q-py-sm">
        <q-btn
          flat
          color="primary"
          label="Ver todos os anúncios"
        />
      </div>

      <div class="col-12 col-md-2 text-right">
        <q-btn
          align="left"
          size="lg"
          class="btn-fixed-width q-px-md"
          color="primary"
          label="Anunciar"
          rounded
          @click="profile"
        />
      </div>

      <div
        class="right-align q-py-sm"
        v-if="!userEstaLogado"
      >
        <q-btn
          flat
          dense
          no-wrap
          color="primary"
          icon="account_circle"
          :to="{ name: 'auth'}"
          no-caps
          label="Entrar"
          class="q-ml-sm q-px-md"
        />
      </div> <!-- Entrar -->

      <div
        class="right-align"
        v-if="userEstaLogado"
      >
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
      </div> <!-- User -->

    </div> <!-- Título -->

    <!-- <div class="row q-py-sm">
      <div class="col">
        <q-input
          class="q-px-sm"
          v-model="search"
          outlined
          placeholder="Buscar"
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
    </div> -->
  </div>

</template>

<script>
import { computed } from '@vue/composition-api'
import { mapState, mapActions } from 'vuex'
import store from '../store/store'
import { METHODS } from 'http'
import mixinUtils from 'src/mixins/mixin-utils'
import UserInfo from '../components/menu/userinfo.vue';



export default {
  name: 'LayoutPadrao',

  mixins: [mixinUtils],

  components: {
    UserInfo,
  },

  data () {
    return {
      search: '',
      leftDrawerOpen: false,
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
<style lang="sass">
</style>


