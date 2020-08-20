<template>
  <q-layout
    view="lHh Lpr fff"
    class="bg-grey-1"
  >
    <q-header
      class="bg-white text-grey-8 shadow-box shadow-1"
      height-hint="90"
    >
      <q-toolbar
        class="GPL__toolbar"
        style="height: 90px"
      >

        <q-toolbar-title
          v-if="$q.screen.gt.sm"
          shrink
          class="row items-center no-wrap"
        >
          <span class="q-ml-sm">{{title}}</span>
        </q-toolbar-title>

        <q-space />

        <q-input
          class="GPL__toolbar-input"
          dense
          standout="bg-primary"
          v-model="search"
          placeholder="Search"
        >
          <template v-slot:prepend>
            <q-icon
              v-if="search === ''"
              name="search"
            />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="search = ''"
            />
          </template>
        </q-input>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            align="left"
            size="lg"
            class="btn-fixed-width"
            color="primary"
            label="Anunciar"
            :to="{ name: 'index'}"
          />

          <q-btn
            flat
            dense
            no-wrap
            color="primary"
            icon="account_circle"
            no-caps
            label="Entrar"
            class="q-ml-sm q-px-md"
          />

          <q-btn-dropdown
            unelevated
            v-model="userInfoOpen"
            no-caps
          >
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <div class="text-center q-pa-sm">
                  John Smith
                </div>
              </div>
            </template>
            <user-info></user-info>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-1 text-grey-8 text-caption">
      <q-toolbar>
        <q-toolbar-title class="text-caption"><span class="material-icons">
            copyright
          </span> Wagner - 2020</q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>

</template>

<script>
import { computed } from '@vue/composition-api'
import { mapState, mapActions } from 'vuex'
import store from '../store/store'
import { METHODS } from 'http'
import mixinOtherUserDetails from 'src/mixins/mixin-other-user-details'
import UserInfo from '../components/menu/userinfo.vue';


//import Drawer from './Drawer'

export default {
  name: 'LayoutPadrao',

  mixins: [mixinOtherUserDetails],

  components: {
    UserInfo,
  },

  data () {
    return {
      search: '',
      tab: 'mails',
      leftDrawerOpen: false,
      openSearch: false,
      search: '',
      userInfoOpen: false,

    }
  },

  computed: {
    ...mapState('store', ['userDetails']),


    title () {
      //return this.$route.fullPath == '/' ? 'Home' : this.$route.fullPath.substr(1).toLocaleUpperCase()
      let currentPath = this.$route.fullPath
      if (currentPath == '/') return 'FireChat'
      else if (currentPath.includes('/chat')) return this.mixinOtherUserDetails.name
      else if (currentPath == '/auth') return 'Login'
    },

    retornar () {
      return this.$route.fullPath.includes('/chat')
    },
  },


}
</script>
<style lang="sass">
.GPL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 55%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368
    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px
  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500
  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>


