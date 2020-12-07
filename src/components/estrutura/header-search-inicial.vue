<template>
  <div class="q-mx-sm col-xs-6 col-md-4">
    <q-input
      rounded
      dense
      outlined
      v-model="text"
      role="button"
      label="Pesquisar pelo site"
      tabindex="0"
    >
      <template v-slot:prepend>
        <q-icon
          v-if="text === ''"
          name="search"
        />
        <q-icon
          v-else
          name="clear"
          class="cursor-pointer"
          @click="text = ''"
        />
      </template>
    </q-input>
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