<template>
  <div class="q-pa-none">

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

  components: {

  },

  data () {
    return {
      tabs: tabsJson,
      tabsEstados: tabsEstados,
      search: '',
      slide: 1,
      autoplay: true,
      stars: 4
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
.my-card {
  width: 100%;
  max-width: 300px;
}
</style>



