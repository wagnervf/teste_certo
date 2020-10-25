<template>
  <div>
    <q-btn-dropdown
      dense
      color="indigo"
      class="q-pa-xs"
      flat
      icon="menu"
      label="Categorias"
      auto-close
      @click="leftShown = !leftShown"
      style="border-right: 1px solid #dddddd6b;"
    >

      <q-list
        bordered
        class="rounded-borders"
      >
        <q-item-label header>Categorias</q-item-label>
        <div
          v-for="tab in tabs"
          :key="tab.id"
          style="max-width: 650px"
        >
          <q-item
            clickable
            v-ripple
            v-close-popup
            @click="leftShown"
            :to="tab.to"
            exact
            class="full-width"
          >
            <q-item-section avatar>
              <q-avatar
                :icon="tab.icon"
                color="primary"
                text-color="white"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">{{tab.label}}</q-item-label>
              <q-item-label
                caption
                lines="2"
              >
                <span class="text-weight-bold">Janet</span>
                -- I'll be in your
              </q-item-label>
            </q-item-section>

          </q-item>
          <q-separator inset="item" />
        </div>
      </q-list>

    </q-btn-dropdown>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import UserInfo from '../components/menu/userinfo.vue';
import mixinUtils from 'src/mixins/mixin-utils'
import tabsJson from 'src/dados/TabsIndex.json'


export default {
  name: 'MainLayout',
  mixins: [mixinUtils],

  components: {
    UserInfo
  },

  data () {
    return {
      leftShown: true,
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