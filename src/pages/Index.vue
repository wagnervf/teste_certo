<template>
  <div class="q-px-0">
    <div class="q-gutter-y-md full-width pa-0">
      <q-tabs
        outside-arrows
        mobile-arrows
        class="bg-primary text-white shadow-2 py-0"
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

      <q-tabs
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

      </q-tabs>

    </div>
  </div>
</template>

<script>
import tabsJson from '../dados/TabsIndex.json'
import tabsEstados from '../dados/TabsEstados.json'
export default {
  name: 'Index',

  data () {
    return {
      tabs: tabsJson,
      tabsEstados: tabsEstados
    }
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



