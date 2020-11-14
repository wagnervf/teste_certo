<template>
  <q-layout view="hHh lpR lFf">

    <q-header
      bordered
      class="bg-white text-grey-9"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="drawer = !drawer"
        />

        <logoPrincipal />

        <q-space />

        <listPrincipal />

      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="drawer"
      side="left"
      bordered
      role="menubar"
    >
      <q-scroll-area class="fit">
        <drawerContent />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footerPrincial />

  </q-layout>
</template>



<script>
import mixinUtils from 'src/mixins/mixin-utils'
import footerPrincial from 'src/components/footer'
import listPrincipal from 'src/components/header/listPrincipal'
import logoPrincipal from 'src/components/header/logoInicial'

import drawerContent from "./drawerContent";
export default {
  mixins: [mixinUtils],
  components: {
    footerPrincial,
    listPrincipal,
    logoPrincipal,
    drawerContent
  },

  data () {
    return {
      text: '',
      drawer: false
    }
  }
}
</script>