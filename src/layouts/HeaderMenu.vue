<template>
  <div>
    <q-toolbar class="q-pt-sm">

      <q-btn
        flat
        icon="home"
        type="a"
        label="OLC"
        to="/"
      />

      <q-space></q-space>

      <div v-if="userEstaLogado">
        <q-btn-dropdown
          unelevated
          v-model="userInfoOpen"
          no-caps
        >

          <template v-slot:label>
            <div class="row items-right no-wrap">
              <div class="text-right q-pa-xs">
                <q-icon name="account_circle" /> {{labelUsuario}}
              </div>
            </div>
          </template>

          <user-info></user-info>
        </q-btn-dropdown>
      </div>

      <div v-if="!userEstaLogado">
        <div
          class="row items-right no-wrap"
          @click="auth"
        >
          <q-btn
            flat
            dense
            no-wrap
            icon="account_circle"
            :to="{ name: 'auth'}"
            no-caps
            label="Entrar"
            class="q-pa-xs"
          />
        </div>
      </div>
    </q-toolbar>

    <q-card class="q-pa-sm no-border-radius text-indigo">
      <q-toolbar>
        <div class="q-gutter-md">

          <Menu />

          <div
            class="absolute-right q-mx-xs"
            style="top:-23px"
          >
            <q-btn
              dark
              dense
              unelevated
              icon="search"
              class="q-ma-sm"
              @click="showSearchToolbar = !showSearchToolbar"
            ></q-btn>

            <q-btn
              class="q-ml-xs q-py-sm"
              size="large"
              label="ANUNCIAR"
              flat
            />
          </div> <!-- ANUNCIAR -->

        </div>
      </q-toolbar>

      <q-toolbar
        v-if="showSearchToolbar"
        class="q-ma-xs"
      >
        <q-input
          v-model="searchQuery"
          debounce="500"
          filled
          placeholder="Buscar"
          clearable
          class="full-width "
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-toolbar>
    </q-card>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import UserInfo from '../components/menu/userinfo.vue';
import Menu from './Menu'
import mixinUtils from 'src/mixins/mixin-utils'

export default {
  name: 'MainLayout',
  mixins: [mixinUtils],

  components: {
    UserInfo,
    Menu
  },

  data () {
    return {
      leftShown: true,
      settingsOpen: false,
      userInfoOpen: false,
      showSearchToolbar: false,
      text: null,
      dense: null

    };
  },
  computed: {
    labelUsuario () {
      return this.nomeUserLogado !== null ? this.nomeUserLogado : this.emailUserLogado
    }
  },
  methods: {
    auth () {
      this.$router.push('/auth')
    }
  }


};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
