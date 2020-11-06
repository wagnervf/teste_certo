<template>
  <div>
    <q-toolbar class="q-pa-sm">
      <div class="col-3">
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="drawer = !drawer"
        />
        <q-btn
          dense
          flat
          to="/"
        > OL<span class="tituloC">C</span> </q-btn>
      </div>

      <q-space />

      <div class="text-capitalize">
        <q-btn
          class="q-py-sm q-px-md bg-orange"
          push
          rounded
          flat
          label="ANUNCIAR"
          @click="goAnunciar"
        />
      </div>
      <q-space />

      <div v-if="userEstaLogado">
        <q-btn-dropdown
          unelevated
          v-model="userInfoOpen"
          no-caps
        >

          <template v-slot:label>
            <div class="row items-right no-wrap">
              <div
                class="text-right"
                style="margin-rigth: -80px!important"
              >
                {{labelUsuario}}
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

    <q-expansion-item
      icon="filter_list"
      label="Filtros"
      expand-separator
      class="shadow-1 text-indigo-10"
      header-class="bg-grey-3"
      expand-icon-class="text-indigo-10"
    >
      <q-card>
        <q-input
          dense
          outlined
          filled
          placeholder="Buscar"
          v-model="text"
          input-class="text-right"
          class="q-ma-sm q-pa-sm"
          type="search"
        >
          <template v-slot:append>
            <q-icon
              v-if="text === ''"
              name="search"
            />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="text = ''"
            />
          </template>
        </q-input>

        <q-toolbar
          v-if="telaXS || telaSM"
          class="q-px-none bg-white shadow-1"
        >
          <Menu />
        </q-toolbar>
      </q-card>
    </q-expansion-item>

    <q-drawer
      side="left"
      behavior="mobile"
      v-model="drawer"
      show-if-above
      :width="isMobile ? telaWidth : (telaWidth * 0.3)"
      :breakpoint="500"
    >
      <q-scroll-area style="height: calc(100% - 130px); margin-top: 80px;">
        <MenuList />
      </q-scroll-area>

      <q-img
        class="absolute-top q-pa-xs"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 80px"
      >
        <div
          class="bg-transparent"
          style="padding-left: 2px; padding-right: 2px; padding-bottom: 8px; padding-top: 2px "
        >
          <div class="row">
            <q-avatar
              size="36px"
              class="q-ma-xs q-pa-xs"
            >
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>

            <div v-if="userEstaLogado">
              <q-item>
                <q-item-section class="text-center">
                  <q-item-label lines="1">
                    <div class="text-h5">Olá, {{nomeUserLogado}}</div>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>

          </div>

        </div>

      </q-img>

      <q-btn
        class="absolute-top-right q-pa-xs"
        round
        color="white"
        icon="close"
        size="large"
        outline
        flat
        @click="drawer = false"
      />

    </q-drawer>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MenuList from 'src/components/menu/menuList.vue';
import Menu from './Menu'
import mixinUtils from 'src/mixins/mixin-utils'

export default {
  name: 'MainLayout',
  mixins: [mixinUtils],

  components: {
    MenuList,
    Menu
  },

  data () {
    return {
      userInfoOpen: false,
      drawer: false,
      text: ''


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
    },
    goAnunciar () {
      this.$router.push('/imoveis/novo')
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

.btnBuscar {
  background: rgb(255, 153, 0);
  border: rgb(255, 153, 0);
  margin-right: -17px;
  border-radius: 28px;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}

// .my-card {
//    width: 100%;
// }

// .q-menu.q-position-engine.scroll {
//   left: 0px !important;
//   max-width: 100% !important;
// }
// .q-menu {
//   max-width: 100% !important;
//   width: 100% !important;
// }
</style>
