<template>
  <div class="q-pa-md full-width">
    <div class="row">
      <div
        class="col"
        style="border-right: 1px solid #dddddd6b;"
      >
        <q-btn-dropdown
          dense
          color="indigo"
          class="q-pa-xs"
          flat
          icon="apps"
          label="Categorias"
          auto-close
          @click="leftShown = !leftShown"
        >

          <menuCards />

        </q-btn-dropdown>
      </div>

      <div class="col text-right">
        <q-btn
          dense
          color="indigo"
          class="q-pa-xs text-right"
          flat
          icon="filter_list"
          label="Categorias"
          auto-close
          @click="filtros = !filtros"
        />
      </div>
    </div>

    <q-toolbar
      v-if="filtros"
      class="text-grey-9"
    >
      <q-list class="full-width">
        <q-expansion-item group="somegroup">
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="house"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section class="text-subtitle2">
              Imóveis
            </q-item-section>
          </template>

          <q-list>
            <q-item
              clickable
              v-ripple
              class="q-pb-none"
              exact
              :to="{ name: 'novo-imovel'}"
            >
              <q-item-section>
                <q-item-label class="text-primary">Venda</q-item-label>
                <q-item-label caption>Casas e Apartamentos</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>

            <q-separator
              class="q-my-xs"
              spaced
            />

            <q-item
              clickable
              v-ripple
              class="q-pb-none"
            >
              <q-item-section>
                <q-item-label class="text-primary">Aluguel</q-item-label>
                <q-item-label caption>Casas e Apartamentos</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item
              clickable
              v-ripple
              class="q-pb-none"
            >
              <q-item-section>
                <q-item-label class="text-primary">Terrenos</q-item-label>
                <q-item-label caption>Sítios e Fazendas</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item
              clickable
              v-ripple
              class="q-pb-none"
            >
              <q-item-section>
                <q-item-label class="text-primary">Comércio</q-item-label>
                <q-item-label caption>Galpões e Indústrias</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>

            <q-separator spaced />

          </q-list>
        </q-expansion-item>

        <q-expansion-item group="somegroup">
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="directions_car"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section class="text-subtitle2">
              Auto Peças
            </q-item-section>
          </template>

          <q-list>
            <q-item
              clickable
              v-ripple
              class="q-pb-none"
            >
              <q-item-section>
                <q-item-label class="text-primary">Venda</q-item-label>
                <q-item-label caption>Casas e Apartamentos</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>

            <q-separator
              class="q-my-xs"
              spaced
            />

            <q-item
              clickable
              v-ripple
              class="q-pb-none"
            >
              <q-item-section>
                <q-item-label class="text-primary">Aluguel</q-item-label>
                <q-item-label caption>Casas e Apartamentos</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item
              clickable
              v-ripple
              class="q-pb-none"
            >
              <q-item-section>
                <q-item-label class="text-primary">Terrenos</q-item-label>
                <q-item-label caption>Sítios e Fazendas</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item
              clickable
              v-ripple
              class="q-pb-none"
            >
              <q-item-section>
                <q-item-label class="text-primary">Comércio</q-item-label>
                <q-item-label caption>Galpões e Indústrias</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>

            <q-separator spaced />

          </q-list>
        </q-expansion-item>

        <q-expansion-item group="somegroup">
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="sports_handball"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section class="text-subtitle2">
              Esportes
            </q-item-section>
          </template>

          <q-list>
            <q-item
              clickable
              v-ripple
              class="q-pb-none"
            >
              <q-item-section>
                <q-item-label class="text-primary">Venda</q-item-label>
                <q-item-label caption>Casas e Apartamentos</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>

            <q-separator
              class="q-my-xs"
              spaced
            />

            <q-item
              clickable
              v-ripple
              class="q-pb-none"
            >
              <q-item-section>
                <q-item-label class="text-primary">Aluguel</q-item-label>
                <q-item-label caption>Casas e Apartamentos</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item
              clickable
              v-ripple
              class="q-pb-none"
            >
              <q-item-section>
                <q-item-label class="text-primary">Terrenos</q-item-label>
                <q-item-label caption>Sítios e Fazendas</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item
              clickable
              v-ripple
              class="q-pb-none"
            >
              <q-item-section>
                <q-item-label class="text-primary">Comércio</q-item-label>
                <q-item-label caption>Galpões e Indústrias</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>

            <q-separator spaced />

          </q-list>
        </q-expansion-item>

      </q-list>
    </q-toolbar>

  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import UserInfo from 'src/components/menu/userinfo';
import menuCards from '../components/menu/menuCards.vue';
import mixinUtils from 'src/mixins/mixin-utils'
import tabsJson from 'src/dados/TabsIndex.json'


export default {
  name: 'MainLayout',
  mixins: [mixinUtils],

  components: {
    UserInfo,
    menuCards
  },

  data () {
    return {
      filtros: false,
      settingsOpen: false,
      userInfoOpen: false,
      showSearchToolbar: false,
      searchQuery: '',
      tabs: tabsJson,

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