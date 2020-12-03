<template>
  <div>
    <breadcrumbs :breadcrumbs="breadcrumbs" />

    <div class="row q-ma-xs">
      <div
        class="text-center col-12"
        role="banner"
        tabindex="0"
      >
        <h1
          v-focus
          tabindex="0"
          class="text-h5"
          aria-label="Selecione uma das categoria abaixo"
        >Selecione a categoria que pretende anunciar</h1>
      </div>
    </div>

    <div class="justify-center col-12 flex bg-grey-1 q-pa-none">

      <q-card
        bordered
        :class="imovelSelecionado === imovel.name ? 'w-card-selecionada' : 'w-card'"
        class="shadow-1"
        v-for="imovel in listaMenus"
        :key="imovel.id"
        @click="catergoriaSelecionada(imovel)"
        tabindex="0"
        role="link"
        @keypress="catergoriaSelecionada(imovel)"
      >
        <h3 class="text-h6 q-ma-none">{{imovel.label}}</h3>
        <q-card-section>
          <q-icon
            size="4em"
            :name="imovel.icon"
            :aria-placeholder="imovel.label"
            role="img"
            class="w-avatar"
          />
          <figcaption class="escondeVisualmente">{{imovel.label}}</figcaption>
        </q-card-section>

        <q-separator inset />
        <q-card-section class="q-pa-xs">
          <q-item-label role="link">{{ imovel.children.description }}</q-item-label>
        </q-card-section>

      </q-card>

    </div>

    <div class="row col-10 content-center q-ma-md">
      <q-btn
        @click="avancar()"
        color="primary"
        label="Avançar"
        class="full-width text-capitalize"
        size="large"
        icon-right="keyboard_arrow_right"
        tabindex="0"
      />
    </div>

    <q-banner
      v-if="banner"
      inline-actions
      class="text-white bg-red q-ma-sm"
      tabindex="0"
      aria-label="Selecione a categoria que pretende anunciar antes de avançar!"
    >
      <h6 class="q-my-none"> Selecione a categoria que pretende anunciar antes de avançar!</h6>
      <template v-slot:action>
        <q-btn
          flat
          color="white"
          @click="banner = !banner"
          label="Fechar"
        />
      </template>
    </q-banner>
  </div>

</template>



<script>
import mixinUtils from 'src/mixins/mixin-utils'
import categorias from 'src/dados/TabsIndex.json'
import listaMenus from 'src/dados/listaMenus.json'
import breadcrumbs from 'src/components/breadcrumbs'


export default {
  mixins: [mixinUtils],
  components: {
    breadcrumbs
  },

  data () {
    return {
      text: '',
      lorem: 'sdsdsa',
      tabs: categorias,
      listaMenus: listaMenus,
      imovelSelecionado: '',
      progress: 0.25,
      banner: false,
      goToSelecionado: '',

      breadcrumbs: [
        {
          'name': 'Home',
          'to': '/index'
        },

        {
          'name': 'Selecione a categoria',
          'to': '/categoria'
        }
      ]

    }
  },


  methods: {
    catergoriaSelecionada (value) {
      this.imovelSelecionado = value.name
      this.goToSelecionado = value.novo
      this.banner = false
      console.log(value)
      //mixin-utils
      this.scrollBottom()


    },

    avancar () {
      if (this.imovelSelecionado == '') {
        this.banner = true
      }

      //this.$router.push(this.goToSelecionado).catch(err => { })
      this.$router.push({ name: this.goToSelecionado }).catch(err => { })
    }


  }
}
</script>

