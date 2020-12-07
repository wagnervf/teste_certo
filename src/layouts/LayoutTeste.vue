<template>
  <q-layout view="hHh lpR fff">
    <q-header
      bordered
      reveal
      dense
      class="w-header bg-white text-grey-9"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="drawer = !drawer"
        />

        <header-logo-inicial />

        <q-space />

        <header-user-login />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="drawer"
      side="left"
      role="menubar"
      :width="250"
      :breakpoint="700"
      bordered
    >
      <q-scroll-area class="fit">
        <drawerContent />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>

    <q-footer>
      <footer-princial />
    </q-footer>
  </q-layout>
</template>



<script>
import mixinUtils from "src/mixins/mixin-utils";
import footerPrincial from "src/components/estrutura/footer-principal";
import headerUserLogin from "src/components/estrutura/header-user-login";
import headerLogoInicial from "src/components/estrutura/header-logo-inicial";

import drawerContent from "./drawerContent";
export default {
  mixins: [mixinUtils],
  components: {
    footerPrincial,
    headerUserLogin,
    headerLogoInicial,
    drawerContent,
  },

  data () {
    return {
      text: "",
      drawer: false,
      drawerRight: false,
    };
  },
};
</script>