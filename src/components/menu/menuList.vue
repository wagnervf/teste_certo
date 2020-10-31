<template>
  <div class="q-pa-none full-width">
    <q-item class="text-indigo-10">
      <q-item-section>
        <q-item-label>Selcione a Categoria
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-list
      v-for="list in listaMenus"
      :key="list.id"
      class="full-width bg-primary"
    >

      <q-expansion-item
        group="somegroup"
        expand-icon="keyboard_arrow_right"
        expanded-icon="keyboard_arrow_down"
        expand-icon-class="text-white"
        style="border-bottom: 1px solid #b7b7b79e"
      >
        <template
          v-slot:header
          class="text-white"
        >
          <q-item-section avatar>
            <q-avatar
              :icon="list.icon"
              color="white"
              text-color="primary"
            />
          </q-item-section>
          <q-item-section class="text-subtitle2">
            {{list.label}}
          </q-item-section>
        </template>

        <q-list
          class="bg-white"
          v-for="listC in list.children"
          :key="listC.name"
        >
          <q-item
            clickable
            v-ripple
            class="q-pb-none"
            exact
            exact-active-class="orange"
            :to="listC.to"
          >
            <q-item-section>
              <q-item-label class="text-primary">{{listC.label}}</q-item-label>
              <q-item-label caption>{{listC.description}}</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-icon
                color="primary"
                name="arrow_right"
              />
            </q-item-section>
          </q-item>
          <q-separator class="q-ma-none" />
        </q-list>
      </q-expansion-item>
    </q-list>

    <q-separator spaced />

    <q-card class="shadow-1">
      <UserInfo />
    </q-card>

    <q-separator spaced />

    <!-- <q-list
      padding
      class="text-grey-9"
    >
      <div v-if="!userEstaLogado">
        <q-item
          class="q-py-md q-my-md full-width text-subtitle1 text-weight-bold"
          clickable
          v-ripple
          v-close-popup
          aria-hidden="true"
          name="Entrar"
          to="/auth"
          exact
        >
          <q-item-section avatar>
            <q-icon name="login" />
          </q-item-section>
          <q-item-section class="text-weight-bold">Entrar</q-item-section>
        </q-item>
      </div>

      <div v-else>
        <q-item
          class="q-py-xs full-width text-subtitle1 text-weight-bold"
          clickable
          v-ripple
          v-close-popup
          aria-hidden="true"
          name="sair"
          @click="logoutUser"
          exact
        >
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>Sair</q-item-section>
        </q-item>
      </div>
    </q-list> -->

  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import UserInfo from 'src/components/menu/userinfo'
import mixinUtils from 'src/mixins/mixin-utils'
import listaMenus from 'src/dados/listaMenus.json'


export default {
  name: 'MenuList',
  mixins: [mixinUtils],

  components: {
    UserInfo
  },

  data () {
    return {
      listaMenus: listaMenus,
      filtros: false,
      settingsOpen: false,
      userInfoOpen: false,
      showSearchToolbar: false,
      searchQuery: '',
      text: ''

    };
  },
}
</script>
<style>
.q-menu {
  max-width: none !important;
  width: 300px;
}
</style>