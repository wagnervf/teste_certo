<template>
  <div>
    <div class="justify-center q-pa-sm">
      <figure class="text-center">
        <q-img
          src="img/pinguin_s.jpg"
          style="max-width: 110px; width: 90px;"
          alt="Logo do site o lugar certo"
        />
        <figcaption
          class="text-caption"
          id="tituloDestaque1"
          style="visibility: hidden; height: 5px;"
        >
          Logo do site o lugar certo
        </figcaption>
      </figure>
    </div>

    <q-list
      padding
      class="font18"
      role="menu"
    >
      <!-- <q-item
        v-for="link in links1"
        :key="link.text"
        exact
        :to="link.to"
        v-ripple
        clickable
        role="menuitem"
        active-class="activeColor"
      >
        <q-item-section
          avatar
          style="min-width:0px"
        >
          <q-icon
            color="grey"
            :name="link.icon"
          />

        </q-item-section>
        <q-item-section role="menuitem">
          <q-item-label role="link">{{ link.text }}</q-item-label>
        </q-item-section>
      </q-item> -->

      <q-item role="link">
        <q-item-section role="link">
          <q-btn
            outline
            dense
            label="Todos Anúncios"
            role="link"
            icon="store_mall_directory"
            title="Todos Anúncios"
            :to="'/index'"
            tabindex="0"
            size="large"
            class="botoesIniciais"
          />
        </q-item-section>
      </q-item>

      <q-item role="link">
        <q-item-section role="link">
          <q-btn
            class="botoesIniciais"
            outline
            dense
            icon="add"
            size="large"
            label="Inserir Anúncio"
            title="Inserir Anúncio"
            role="button"
            tabindex="0"
            :to="'/categoria'"
          />
        </q-item-section>
      </q-item>

      <q-item role="link">
        <q-item-section role="link">
          <header-search-inicial />
        </q-item-section>
      </q-item>

      <q-separator class="q-my-md" />

      <q-item-label
        header
        class="text-weight-bold text-uppercase grey-9 bg-grey3"
      >
        <label class="game6">Categorias</label>
      </q-item-label>

      <q-list
        v-for="list in listaMenus"
        :key="list.id"
        padding
        class="font16 q-py-none"
        role="list"
      >
        <q-expansion-item
          group="somegroup"
          expand-icon="keyboard_arrow_right"
          expanded-icon="keyboard_arrow_down"
          expand-icon-class="text-grey-9"
          role="listitem"
        >
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                color="grey-3"
                :icon="list.icon"
              />
            </q-item-section>
            <q-item-section role="menuitem">
              <q-item-label role="lomk">{{ list.label }}</q-item-label>
            </q-item-section>
          </template>

          <q-list
            v-for="listC in list.children"
            :key="listC.name"
            role="menu"
          >
            <q-item
              clickable
              v-ripple
              exact
              :to="listC.to"
              class="q-ml-md"
              role="menuitem"
            >
              <q-item-section role="menuitem">
                <q-item-label role="link">{{listC.label}}</q-item-label>
                <q-item-label caption>{{listC.description}}</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  name="arrow_right"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-list>

      <q-separator class="q-mt-md q-mb-xs" />

      <q-item-label
        header
        class="text-weight-bold text-uppercase"
      >
        More from Youtube
      </q-item-label>

      <q-item
        v-for="link in links3"
        :key="link.text"
        v-ripple
        clickable
      >
        <q-item-section avatar>
          <q-icon
            color="grey"
            :name="link.icon"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ link.text }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator class="q-my-md" />

      <q-item
        v-for="link in links4"
        :key="link.text"
        v-ripple
        clickable
      >
        <q-item-section avatar>
          <q-icon
            color="grey"
            :name="link.icon"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ link.text }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator class="q-mt-md q-mb-lg" />

      <div class="q-px-md text-grey-9">
        <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
          <a
            v-for="button in buttons1"
            :key="button.text"
            class="YL__drawer-footer-link"
            href="javascript:void(0)"
          >
            {{ button.text }}
          </a>
        </div>
      </div>
      <div class="q-py-md q-px-md text-grey-9">
        <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
          <a
            v-for="button in buttons2"
            :key="button.text"
            class="YL__drawer-footer-link"
            href="javascript:void(0)"
          >
            {{ button.text }}
          </a>
        </div>
      </div>
    </q-list>

  </div>
</template>

<script>
import { fabYoutube } from '@quasar/extras/fontawesome-v5'
import headerSearchInicial from 'src/components/estrutura/header-search-inicial'
import listaMenus from 'src/dados/listaMenus.json'

export default {
  components: {
    headerSearchInicial
  },
  name: 'Drawer',
  data () {
    return {
      listaMenus: listaMenus,

      leftDrawerOpen: false,
      links1: [
        { icon: 'store_mall_directory', to: '/index', text: 'Todos Anúncios', active: true },
        // { icon: 'notifications', text: 'Notificações', active: false },
        // { icon: 'account_circle', text: 'Minha Conta', active: false }
      ],
      links2: [
        { icon: 'folder', text: 'Library' },
        { icon: 'restore', text: 'History' },
        { icon: 'watch_later', text: 'Watch later' },
        { icon: 'thumb_up_alt', text: 'Liked videos' }
      ],
      links3: [
        { icon: fabYoutube, text: 'YouTube Premium' },
        { icon: 'local_movies', text: 'Movies & Shows' },
        { icon: 'videogame_asset', text: 'Gaming' },
        { icon: 'live_tv', text: 'Live' }
      ],
      links4: [
        { icon: 'settings', text: 'Settings' },
        { icon: 'flag', text: 'Report history' },
        { icon: 'help', text: 'Help' },
        { icon: 'feedback', text: 'Send feedback' }
      ],
      buttons1: [
        { text: 'About' },
        { text: 'Press' },


      ],
      buttons2: [
        { text: 'Terms' },

      ]
    }
  },
  created () {
    this.fabYoutube = fabYoutube
  }
}
</script>

<style lang="sass">
.activeColor
  background-color: #bb21581c
  color: #bb2158
.YL
  &__toolbar-input-container
    min-width: 100px
    width: 55%
  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>