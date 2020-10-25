<template>
  <q-layout view="hHh LpR fFf">
    <q-header
      class="text-grey-4 db-toolbar"
      height-hint="98"
    >
      <headerMenu />

      <!-- <div class="q-py-sm">
        <q-btn
          align="left"
          size="lg"
          class="btn-fixed-width q-px-md"
          color="primary"
          rounded
          :to="{ name: 'administracao'}"
          label="Administracao"
        />
      </div> -->
      <!-- Entrar -->
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import UserInfo from '../components/menu/userinfo.vue';
import mixinUtils from 'src/mixins/mixin-utils'
import headerMenu from './HeaderMenu'

export default {
  name: 'MainLayout',
  mixins: [mixinUtils],

  components: {
    UserInfo,
    headerMenu
  },

  data () {
    return {

    };
  },
}

</script>
