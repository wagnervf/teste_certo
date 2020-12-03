<template>
  <!-- :class="telaXS ? 'mycard2' : 'mycard'" -->
  <q-card
    class="my-card shadow-1"
    aria-label="card com o anúncio"
  >
    <h2
      tabindex="0"
      aria-label="Descrição do anúncio"
      role="banner"
      class="escondeVisualmente"
    > Anúncio de um {{anuncioList.titulo}} do tipo {{anuncioList.tipo}} a modalidade {{anuncioList.modalidade}}
      possui como descrição {{anuncioList.descricao}} sua última atualização foi {{anuncioList.updated}} com valor de {{anuncioList.valor}}.
    </h2>

    <q-card-section class="text-center q-pa-none">
      <q-img
        :src="anuncioList.foto"
        class="center cursor-pointer"
        :ratio="4/3"
        @click="verAnuncio(anuncioList)"
        role="link"
        alt=""
        aria-label="Imagem clicável para ver o anúncio completo"
        style="border-radius: 10px 10px 0px 0px"
      >
        <div class="absolute-bottom-left text-subtitle2">
          <q-icon name="photo_camera" /> 4
        </div>
      </q-img>
    </q-card-section>

    <q-card-section class="q-pa-xs">
      <h2 class="tituloAnuncio q-my-xs q-py-xs">{{anuncioList.titulo}} </h2>

      <div class="subTituloAnuncio">
        {{anuncioList.tipo}} | {{anuncioList.modalidade}}
      </div>
    </q-card-section>

    <q-card-section
      class="q-pa-sm"
      style="height: 70px;"
    >
      <span class="resumoAnuncio">
        {{anuncioList.descricao}}
      </span>

    </q-card-section>

    <q-separator />

    <q-card-section class="valor">
      R$ {{anuncioList.valor}},00

    </q-card-section>

    <q-separator />

    <q-card-actions
      tabindex="-1"
      class="q-px-none"
    >
      <div class="vendedor">
        <!-- <span class="q-px-none">Vendedor</span> -->
        <q-icon
          class="q-px-none"
          name="person_pin"
          title="Vendedor"
          size="x-large"
        />

        <q-icon
          class="q-px-xs"
          name="chat"
        />
        <q-icon
          class="q-px-xs"
          name="call"
        />
        <q-rating
          class="q-px-none"
          v-model="stars"
          :max="5"
          size="16px"
          aria-label="Estrela que informa pontuação do vendedor total de 5"
        />
      </div>
    </q-card-actions>
    <!-- <q-card-actions tabindex="0">
      <div
        role="text"
        aria-label="Data de cadastro do anúncio"
        class="text-grey-5 text-right text-caption items-center absolute-bottom-right q-pr-sm"
      >
        {{anuncioList.updated | niceDate }}
      </div>
    </q-card-actions> -->

  </q-card>

</template>

<style lang="sass" scoped>
.valor
  color: #344973
  font-weight: bold
  //background-color: #1976D2
  font-size: 18px
  text-align: left
  padding: 3%

.mycard2
  min-width: 255px

.my-card
  width: 24%
  max-width: 255px
  min-width: 175px
  max-height: 430px
  //min-height: 430px
  cursor: pointer
  margin: 10px 5px 10px 5px
  border-radius: 10px 5px 10px 5px

.my-card:focus
.my-card:hover
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
  transition: all 0.3s cubic-bezier(.25,.8,.25,1)
</style>

<script>
import mixinUtils from 'src/mixins/mixin-utils'
import { date } from 'quasar'

export default {
  props: {
    anuncioList: ''
  },
  mixins: [mixinUtils],
  components: {

  },
  data () {
    return {
      stars: 3.5,

    }
  },

  methods: {
    verAnuncio (anuncio) {
      let link = "/imoveis/view/" + anuncio.id.split("-")[4];
      //this.$router.push(link);

    },
  },

  filters: {
    niceDate (value) {
      return date.formatDate(value, 'DD/MM/YY')
    }
  }





}
</script>



