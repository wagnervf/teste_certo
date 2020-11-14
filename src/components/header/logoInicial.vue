<template>
  <div>
    <q-btn
      v-if="!telaXS"
      flat
      dense
      label="O Lugar Certo"
      role="button"
      title="O Lugar Certo"
      :to="'/index'"
      tabindex="0"
    >
      <q-tooltip>Voltar para o início</q-tooltip>
    </q-btn>

    <q-btn
      v-if="telaXS"
      flat
      dense
      size="x-large"
      label="OLC"
      role="button"
      title="OLC"
      :to="'/index'"
      tabindex="0"
      class="btnPadrao"
    >
      <q-tooltip>Voltar para o início</q-tooltip>
    </q-btn>
  </div>
</template>



<script>
import mixinUtils from 'src/mixins/mixin-utils'
export default {
  mixins: [mixinUtils],
  components: {
  },

  data () {
    return {
      text: '',
    }
  }
}
</script>