<template>
  <q-layout view="lHh lpR lFf">

    <q-header
      reveal
      class="background"
    >
      <headerMenu />

    </q-header>

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
import headerMenu from './HeaderMenu'


//import { Screen } from 'quasar'


export default {
  name: 'LayoutPadrao',

  mixins: [mixinUtils],

  components: {
    UserInfo,
    headerMenu
  },

  data () {
    return {
      drawer: false,
      leftShown: true,
      settingsOpen: false,
      userInfoOpen: false,
      tab: 'mails',



    }
  },

  computed: {
    labelUsuario () {
      return this.nomeUserLogado !== null ? this.nomeUserLogado : this.emailUserLogado
    }
  },

  methods: {
    auth () {
      this.$router.push('/auth')
    },




  }


}
</script>

<style>
.tituloC {
  color: rgb(255, 153, 0);
  font-size: x-large;
  font-family: system-ui;
  font-weight: bold;
}
</style>