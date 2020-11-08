<template>
  <div class="justify-center flex q-gutter-xs">
    <q-btn-group
      v-for="tab in tabs"
      :key="tab.id"
    >
      <q-btn
        :color=" pageActive == tab.name ? 'orange' : 'primary'"
        style="width:110px; height: 90px;"
        no-caps
        @click="categoriaClick(tab)"
        push
      >
        <div class="text-center">
          <q-icon
            size="3em"
            :name="tab.icon"
          /><br>
          <span>{{tab.label}}</span>
        </div>
        <q-tooltip content-class="bg-accent">{{tab.label}}</q-tooltip>
      </q-btn>
    </q-btn-group>
  </div>
</template>
<style>
.q-btn__wrapper {
  padding: 0px;
}
</style>

<script>
import tabsJson from 'src/dados/TabsIndex.json'
export default {
  data () {
    return {
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
  },
  methods: {
    categoriaClick (value) {
      console.log(value)
    }
  }
}
</script>
