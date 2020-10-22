<template>
  <q-layout
    view="hHh lpR fFf"
    style="min-height: 0px"
  >
    <q-header
      class="q-pa-xs bg-white text-grey-8 shadow-box shadow-1"
      style="position: relative"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="left = !left"
        />

        <q-toolbar-title class="row q-py-sm">
          <div class="col text-left">
            <q-avatar @click="home">
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
            OLugarCerto
          </div>

          <div class="col text-right">
            <q-btn
              align="right"
              class="btn-fixed-width q-pa-sm"
              color="primary"
              label="Anunciar"
              size="sm"
              rounded
              @click="profile"
            />
            <!-- :to="{ name: 'auth'}" -->
          </div>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      side="left"
      behavior="mobile"
      bordered
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>

          <user-info></user-info>

        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar
            size="56px"
            class="q-mb-sm"
          >
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

  </q-layout>
</template>


<script>
import UserInfo from '../components/menu/userinfo.vue';
import { mapState, mapActions } from 'vuex'
import mixinUtils from 'src/mixins/mixin-utils'


export default {
  components: {
    UserInfo
  },

  mixins: [mixinUtils],

  data () {
    return {
      left: false
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
  }
}
</script>