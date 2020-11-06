<template>
  <q-layout view="lHh lpR lFr">

    <q-header
      reveal
      :reveal-offset="5"
      class="bg-white text-indigo-10 shadow-1"
    >
      <headerMenu />

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      reveal
      class="bg-grey-1 text-caption "
      height-hint="10"
    >
      <!-- <q-toolbar class="background text-grey">
        <div class="q-pa-xs col-3 text-grey">
          <q-list separator>
            <span>Menu</span>
            <q-item
              clickable
              v-ripple
              dense
            >
              <q-item-section>Single line item</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              dense
            >
              <q-item-section style="border-bottom: 1px solid orange">
                <q-item-label>Item with caption</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              dense
            >
              <q-item-section>
                <q-item-label>OVERLINE</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-toolbar> -->

      <q-toolbar class="bg-grey-1 text-grey-8">
        <q-toolbar-title class="text-caption"><span class="material-icons">
            copyright
          </span> Wagner - 2020</q-toolbar-title>
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
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { computed } from '@vue/composition-api'
import mixinUtils from 'src/mixins/mixin-utils'
import UserInfo from '../components/menu/userinfo.vue';
import headerMenu from './HeaderMenu'



export default {
  name: 'LayoutAZ',

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
      text: '',



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

.q-tree__node-header-content {
  color: grey !important;
}
</style>