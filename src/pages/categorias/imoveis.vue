<template>

  <div class="q-pa-none">

    <!-- <div v-if="isMobile || telaWidth < 1024 || grid === true">
      <latyouAnunciosMobile />
    </div> -->
    <!-- <div v-else> -->
    <latyouAnunciosDesktop />
    <!-- </div> -->

  </div>
</template>

<script>
import latyouAnunciosMobile from 'src/components/anuncios/layoutAnunciosMobile'
import latyouAnunciosDesktop from 'src/components/anuncios/layoutAnunciosDesktop'
import mixinUtils from 'src/mixins/mixin-utils'


export default {
  name: 'Imoveis',
  mixins: [mixinUtils],

  data () {
    return {
      list: null,
      grid: false,

    }
  },

  components: {
    latyouAnunciosMobile,
    latyouAnunciosDesktop
  }
}
</script>
