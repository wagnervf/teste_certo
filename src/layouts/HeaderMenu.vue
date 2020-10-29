<template>
  <div>
    <q-toolbar class="q-py-sm q-pr-xs">
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

      <q-space />
      <div v-if="!isMobile">
        <div class="q-pa-sm q-my-xs col-6">
          <q-input
            dark
            dense
            standout
            placeholder="Buscar"
            v-model="text"
            input-class="text-right"
            class="q-ml-md"
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
        </div><!-- Buscar todo site -->

        <div class="text-capitalize">
          <q-btn
            class="q-pa-xs bg-orange"
            rounded
            flat
            size="large"
            label="ANUNCIAR"
          />
        </div><!-- Anunciar -->
      </div>

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
                style="margin-rigth: -10px!important"
              >
                <q-icon
                  v-if="isMobile"
                  name="account_circle"
                  class="q-ml-none"
                />

                olá, {{labelUsuario}}
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

    <q-drawer
      side="left"
      behavior="mobile"
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-2"
    >
      <q-scroll-area style="height: calc(100% - 100px); margin-top: 100px; border-right: 0px solid #ddd">
        <q-list
          padding
          class="text-grey-9"
        >

          <template v-for="(menuItem, index) in menuList">
            <q-item
              :key="index"
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
              class="text-subtitle1 text-weight-bold"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator
              :key="'sep' + index"
              v-if="menuItem.separator"
            />
          </template>

        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top q-pa-xs"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 100px"
      >
        <div
          class="bg-transparent"
          style="padding-left: 2px; padding-right: 2px; padding-bottom: 1px; padding-top: 4px "
        >
          <div
            class="row"
            v-if="userEstaLogado"
          >

            <q-avatar
              size="36px"
              class="q-ma-xs"
            >
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-item class="text-weight-bold text-subtitle1 q-pa-xs">Olá, {{nomeUserLogado}}</q-item>
            <q-item
              class="q-py-xs full-width"
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

          <div v-else>
            <q-item
              class="q-py-md q-my-md full-width"
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

        </div>

      </q-img>
    </q-drawer>

    <q-toolbar v-if="isMobile">
      <q-input
        dark
        dense
        standout
        placeholder="Buscar"
        v-model="text"
        input-class="text-right"
        class="q-ma-sm q-pa-sm col"
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

      <div class="text-capitalize">
        <q-btn
          class="q-pa-xs bg-orange"
          rounded
          flat
          label="ANUNCIAR"
        />
      </div>

    </q-toolbar> <!-- Buscar todo site Mobile -->

    <!-- <q-toolbar class="q-py-sm">
      <q-input
        dark
        dense
        debounce="500"
        standout
        rounded
        placeholder="Pesquisar"
        v-model="text"
        input-class="text-left text-grey"
        class="q-pa-xs full-width"
        style="background-color: #fff; border-radius:28px"
      >
        <template v-slot:append>
          <div class="btnBuscar">
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
          </div>
        </template>
      </q-input>
    </q-toolbar> -->

    <q-toolbar
      v-if="!isMobile"
      class="q-px-none bg-white shadow-2"
    >
      <div class="full-width">
        <q-tabs
          outside-arrows
          mobile-arrows
          class="text-grey-9 q-py-md"
          active-color="orange"
          align="justify"
        >
          <q-route-tab
            v-for="tab in tabs"
            :key="tab.id"
            :name="tab.name"
            :icon="tab.icon"
            :label="tab.label"
            :to="tab.to"
            class="shadow-1"
            exact
            replace
          />

          <q-btn-dropdown
            v-if="telaMd || telaSM"
            auto-close
            stretch
            flat
            label="More..."
          >
            <q-list>
              <q-item
                clickable
                :to="tab.to"
                exact
              >
                <q-item-section>{{tab.label}}</q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>
        </q-tabs>
      </div>
    </q-toolbar>

    <q-toolbar class="q-px-none bg-white shadow-2">
      <Menu />
    </q-toolbar>

    <!-- 
    <q-toolbar>
      <div class="q-pa-none full-width">
        <q-card class="no-border-radius full-width">
          <q-tabs
            v-model="tab"
            dense
            class="bg-grey-2 full-width"
            align="justify"
            narrow-indicator
            inline-label
            outside-arrows
            mobile-arrows
          >
            <q-tab
              class="text-capitalize q-px-xs"
              name="buscar"
            >
              <q-btn-dropdown
                flat
                size="small"
                class="q-pa-none q-ma-none text-capitalize text-orange full-width"
                label="Buscar"
              >
                <q-card class="my-card bg-grey-1 full-width">

                  <q-list
                    bordered
                    padding
                  >
                    <q-item-label header>Filtros</q-item-label>

                    <q-item
                      clickable
                      v-ripple
                    >
                      <q-item-section>
                        <q-item-label>Content filtering</q-item-label>
                        <q-item-label caption>
                          Set the content filtering level to restrict
                          apps that can be downloaded
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item
                      clickable
                      v-ripple
                    >
                      <q-item-section>
                        <q-item-label>Password</q-item-label>
                        <q-item-label caption>
                          Require password for purchase or use
                          password to restrict purchase
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-separator spaced />
                    <q-item-label header>General</q-item-label>

                    <q-item
                      tag="label"
                      v-ripple
                    >
                      <q-item-section
                        side
                        top
                      >
                        <q-checkbox v-model="check1" />
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>Notifications</q-item-label>
                        <q-item-label caption>
                          Notify me about updates to apps or games that I downloaded
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item
                      tag="label"
                      v-ripple
                    >
                      <q-item-section
                        side
                        top
                      >
                        <q-checkbox v-model="check2" />
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>Sound</q-item-label>
                        <q-item-label caption>
                          Auto-update apps at anytime. Data charges may apply
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item
                      tag="label"
                      v-ripple
                    >
                      <q-item-section
                        side
                        top
                      >
                        <q-checkbox v-model="check3" />
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>Auto-add widgets</q-item-label>
                        <q-item-label caption>
                          Automatically add home screen widgets
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-separator spaced />
                    <q-item-label header>Notifications</q-item-label>

                    <q-item
                      tag="label"
                      v-ripple
                    >
                      <q-item-section>
                        <q-item-label>Battery too low</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-toggle
                          color="blue"
                          v-model="notif1"
                          val="battery"
                        />
                      </q-item-section>
                    </q-item>
                  </q-list>

                  <q-card-actions class="justify-end text-orange">
                    <q-btn flat>Cancelar</q-btn>
                    <q-btn flat>Salvar</q-btn>
                  </q-card-actions>

                </q-card>
              </q-btn-dropdown>
            </q-tab>

            <q-tab
              class="text-capitalize q-px-xs"
              name="alarms"
            >
              <q-btn-dropdown
                flat
                size="small"
                class="q-pa-none q-ma-none text-capitalize text-orange full-width"
                label="Categorias"
              >
                <q-card class="my-card bg-grey-1 full-width">
                  <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                  </q-card-section>

                  <q-card-section>
                    Texto
                  </q-card-section>

                  <q-separator />

                  <q-card-actions class="justify-end text-orange">
                    <q-btn flat>Cancelar</q-btn>
                    <q-btn flat>Salvar</q-btn>
                  </q-card-actions>
                </q-card>
              </q-btn-dropdown>

            </q-tab>

            <q-tab
              class="text-capitalize q-px-xs"
              name="movies"
            >
              <q-btn-dropdown
                flat
                size="small"
                class="q-pa-none q-ma-none text-capitalize text-orange full-width"
                label="Tipos"
              >
                <q-card class="my-card bg-grey-1 full-width">
                  <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                  </q-card-section>

                  <q-card-section>
                    Texto
                  </q-card-section>

                  <q-separator />

                  <q-card-actions class="justify-end text-orange">
                    <q-btn flat>Cancelar</q-btn>
                    <q-btn flat>Salvar</q-btn>
                  </q-card-actions>
                </q-card>
              </q-btn-dropdown>
            </q-tab>

          </q-tabs>

          <q-separator />

        </q-card>
      </div>
    </q-toolbar> -->

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import UserInfo from '../components/menu/userinfo.vue';
import Menu from './Menu'
import mixinUtils from 'src/mixins/mixin-utils'
import tabsJson from 'src/dados/TabsIndex.json'

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
      text: '',
      tab: 'buscar',
      email: false,
      drawer: false,
      tabs: tabsJson,
      check1: false,
      check2: false,
      check3: false,

      notif1: true,
      notif2: true,
      notif3: false,

      volume: 6,
      brightness: 3,
      mic: 8,
      range: [0, 10000],
      menuList: [
        {
          icon: 'inbox',
          label: 'Inbox',
          separator: true
        },
        {
          icon: 'send',
          label: 'Outbox',
          separator: false
        },
        {
          icon: 'delete',
          label: 'Trash',
          separator: false
        },
        {
          icon: 'error',
          label: 'Spam',
          separator: true
        },

      ],

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
