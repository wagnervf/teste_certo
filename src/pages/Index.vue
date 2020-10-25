<template>
  <div style="position: relative">

    <div class="full-width">
      <div class="col">
        <q-input
          v-model="search"
          filled
          placeholder="Buscar"
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
      </div>
    </div>

    <div class="q-gutter-y-sm full-width">
      <q-tabs
        outside-arrows
        mobile-arrows
        class="bg-white text-grey-9 shadow-2 "
        style="height: 100px;"
      >
        <q-route-tab
          v-for="tab in tabs"
          :key="tab.id"
          :name="tab.name"
          :icon="tab.icon"
          :label="tab.label"
          :to="tab.to"
          exact
        />
      </q-tabs>

      <!-- <q-tabs
        id="tabsEstados"
        outside-arrows
        mobile-arrows
        dense
        class="bg-grey-2 text-teal"
        align="center"
        style="height: 80px;"
      >
        <q-tab
          v-for="tab in tabsEstados"
          :key="tab.ID"
          :name="tab.Nome"
          :label="tab.Sigla"
        />

      </q-tabs> -->

    </div>

  </div>
</template>

<script>
import tabsJson from '../dados/TabsIndex.json'
import tabsEstados from '../dados/TabsEstados.json'
import { mapState, mapActions } from 'vuex'
import mixinUtils from 'src/mixins/mixin-utils'

export default {
  name: 'Index',

  mixins: [mixinUtils],

  data () {
    return {
      tabs: tabsJson,
      tabsEstados: tabsEstados,
      search: ''
    }
  },

  computed: {

  }
}
</script>
<style scoped>
#tabsEstados
  .q-tab.relative-position.self-stretch.flex.flex-center.text-center.q-tab--inactive.q-focusable.q-hoverable.cursor-pointer {
  padding-left: 0px;
  padding-right: 0px;
}
</style>



