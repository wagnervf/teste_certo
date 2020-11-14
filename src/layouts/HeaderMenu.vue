<template>
  <div>
    <!-- <q-toolbar class="q-pa-sm">
      
      <q-space />

      <div class="text-capitalize">
       
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
    </q-toolbar> -->

    <div class="row no-wrap shadow-1">
      <q-toolbar class="bg-grey-2 q-pa-sm">
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="drawer = !drawer"
        />
        <q-toolbar-title>
          <q-btn
            dense
            flat
            to="/"
          > OL<span class="tituloC">C</span> </q-btn>

        </q-toolbar-title>
        <q-space />

        <div
          v-if="telaXL || telaMD"
          class="col-8"
        >
          <q-input
            outlined
            filled
            dense
            label="Pesquisar"
            v-model="text"
            input-class="text-right"
            class="q-ml-md col-12"
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
        </div>
        <q-space />

        <q-btn
          flat
          color="grey-9"
          icon="search"
          @click="pesquisar = true"
          class="q-mx-sm"
        />

        <div class="text-right">
          <q-btn
            class="q-py-xs q-px-md bg-orange text-white"
            push
            rounded
            flat
            label="ANUNCIAR"
            @click="goAnunciar()"
          />
          <q-btn
            flat
            round
            dense
            icon="more_vert"
          />
        </div>

      </q-toolbar>

      <q-dialog
        v-model="pesquisar"
        persistent
      >
        <q-card style="min-width: 350px">
          <q-card-section>
            <q-input
              dense
              outlined
              filled
              placeholder="Buscar"
              v-model="text"
              input-class="text-right"
              class="full-width"
              type="search"
            >
              <template v-slot:append>
                <q-icon
                  v-if="text === ''"
                  name="search"
                />
                <q-btn
                  v-else
                  push
                  name="clear"
                  class="q-py-xs q-px-md bg-orange text-white"
                  @click="text = ''"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions
            align="right"
            class="text-primary"
          >
            <q-btn
              flat
              color="red"
              label="Cancelar"
              v-close-popup
            />
            <q-btn
              label="Pesquisar"
              color="teal"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

    </div>

    <q-expansion-item
      icon="filter_list"
      label="Filtros"
      expand-separator
      class="text-indigo-10 "
      header-class="bg-white"
      expand-icon-class="text-indigo-10"
    >
      <div class="q-pa-md bg-white ">
        <q-list
          bordered
          padding
        >
          <q-item>
            <q-item-section>
              <q-item-label overline>OVERLINE</q-item-label>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>

            <q-item-section
              side
              top
            >
              <q-item-label caption>5 min ago</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator spaced />
          <q-item-label header>List Header</q-item-label>

          <q-item>
            <q-item-section avatar>
              <q-icon
                color="primary"
                name="bluetooth"
              />
            </q-item-section>
            <q-item-section>List item</q-item-section>
            <q-item-section side>
              <q-item-label caption>meta</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator
            spaced
            inset="item"
          />

          <q-item>
            <q-item-section
              top
              avatar
            >
              <q-avatar
                color="primary"
                text-color="white"
                icon="bluetooth"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label
                caption
                lines="2"
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>

            <q-item-section
              side
              top
            >
              <q-item-label caption>5 min ago</q-item-label>
              <q-icon
                name="star"
                color="yellow"
              />
            </q-item-section>
          </q-item>

          <q-separator
            spaced
            inset="item"
          />

          <q-item>
            <q-item-section
              top
              avatar
            >
              <q-avatar
                color="primary"
                text-color="white"
                square
                icon="bluetooth"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>

            <q-item-section
              side
              top
            >
              <q-item-label caption>meta</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator
            spaced
            inset="item"
          />

          <q-item>
            <q-item-section
              top
              avatar
            >
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>

            <q-item-section
              side
              top
            >
              <q-badge label="10k" />
            </q-item-section>
          </q-item>

          <q-separator
            spaced
            inset="item"
          />

          <q-item>
            <q-item-section
              top
              avatar
            >
              <q-avatar rounded>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>

            <q-item-section
              side
              top
            >
              <q-item-label caption>meta</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator spaced />

          <q-item>
            <q-item-section
              top
              thumbnail
              class="q-ml-none"
            >
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
            </q-item-section>

            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>

            <q-item-section
              side
              top
            >
              <q-item-label caption>meta</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
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
      text: '',
      pesquisar: false,


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
