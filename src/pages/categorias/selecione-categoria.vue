<template>
  <div class="q-pa-md row items-start q-gutter-md justify-center flex q-gutter-sm col-12">
    <h2
      v-focus
      tabindex="0"
      class="col-12 justify-center text-h5 row gucci1"
      aria-label="Selecione uma das categoria abaixo"
    >Escolha uma categoria</h2>
    <div
      v-for="tab in tabs"
      :key="tab.id"
      class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 q-my-xs"
      id="divInicial"
    >
      <q-card
        class="my-card text-center gucci1 shadow-1 "
        @click="catergoriaSelecionada(tab)"
        tabindex="0"
        :aria-label="tab.label"
        role="link"
        @keypress="catergoriaSelecionada(tab)"
        style="border-radius: 15px!important"
      >
        <figure class="text-center justify-center q-pa-sm q-my-xs">
          <q-icon
            size="5em"
            :name="tab.icon"
            :aria-placeholder="tab.label"
            role="img"
            class="q-py-none q-my-none"
          /><br>
          <figcaption class="escondeVisualmente">{{tab.label}}</figcaption>
        </figure>
        <q-card-section class="q-py-xs">
          <h3 class="text-h6 q-my-xs">{{tab.label}}</h3>
          <!-- <div class="text-subtitle2">by John Doe</div> -->
        </q-card-section>
      </q-card>

    </div>

  </div>

  <!-- <q-tab-panel
          name="categoria"
          class="q-pa-none justify-center row"
        >
          
          <div class="justify-center flex q-gutter-sm col-12">

            <q-btn-group
              v-for="tab in tabs"
              :key="tab.id"
            >
              <q-btn
                class="game6"
                style="width:200px; height: 150px;"
                no-caps
                @click="categoriaClick(tab)"
                role="buttom"
              >
                <figure class="text-center justify-center">
                  <q-icon
                    size="5em"
                    :name="tab.icon"
                    :aria-placeholder="tab.label"
                    role="img"
                  /><br>
                  <figcaption>{{tab.label}}</figcaption>
                </figure>
                <q-tooltip
                  content-class="bg-accent"
                  role="alert"
                >{{tab.label}}</q-tooltip>
              </q-btn>
            </q-btn-group>

          </div>

        </q-tab-panel> -->
</template>



<script>
import mixinUtils from 'src/mixins/mixin-utils'
import categorias from 'src/dados/TabsIndex.json'

export default {
  mixins: [mixinUtils],
  components: {},

  data () {
    return {
      text: '',
      lorem: 'sdsdsa',
      tabs: categorias,

    }
  },



  methods: {
    catergoriaSelecionada (value) {
      this.$router.push(value.to).catch(err => { })
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
 // width: 100%
  //max-width: 400px
  cursor: pointer

.my-card:focus,
.my-card:hover
  overflow-y: 0.1s
  transform: translatey(-10px)
  box-shadow: -4px 4px 26px 2px hsla(184, 50%, 20%, .1)
  border-radius: 10px
  transition: all .3s

  color: #bb2158
  cursor: pointer
</style>