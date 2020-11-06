<template>
  <div class="justify-center row q-gutter-sm">
    <q-btn-group
      v-for="tab in tabs"
      :key="tab.id"
    >
      <q-btn
        :color=" pageActive == tab.name ? 'orange' : 'primary'"
        style="width:100px; height: 80px;"
        no-caps
        @click="categoriaClick(tab)"
      >
        <div class="text-center">
          <q-icon
            size="3em"
            :name="tab.icon"
          /><br>
          <span>{{tab.label}}</span>
          <q-tooltip content-class="bg-accent">{{tab.label}}</q-tooltip>
        </div>
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
