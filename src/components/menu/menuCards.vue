<template>
  <div class="justify-center row">

    <q-btn-group
      v-for="tab in tabs"
      :key="tab.id"
      class="q-pa-xs q-ma-xs"
    >
      <q-btn
        outline
        flat
        :color=" pageActive == tab.name ? 'orange' : 'primary'"
        class="q-pa-xs"
        style="width:130px; height: 80px;"
        no-caps
        push
        :to="tab.to"
      >
        <div class="text-center">
          <q-icon
            size="3em"
            :name="tab.icon"
          /><br>
          {{tab.label}}
          <q-tooltip content-class="bg-accent">{{tab.label}}</q-tooltip>
        </div>
      </q-btn>
    </q-btn-group>
  </div>
</template>

<script>
import tabsJson from 'src/dados/TabsIndex.json'
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet',
      tabs: tabsJson,
    }
  },
  mounted () {
    console.log(this.$route)
  },
  computed: {

    pageActive () {
      return this.$route.name
    }

  }
}
</script>
