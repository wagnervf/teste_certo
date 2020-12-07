<template>
  <!-- :class="telaXS ? 'mycard2' : 'mycard'" -->
  <q-card
    class="w-card-anuncios"
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

    <q-card-section class="text-center q-pa-sm">
      <q-img
        :src="anuncioList.foto"
        class="center cursor-pointer"
        :ratio="4/3"
        @click="verAnuncio(anuncioList)"
        role="link"
        alt=""
        aria-label="Imagem clicável para ver o anúncio completo"
      >
        <div class="absolute-bottom-left text-subtitle2">
          <q-icon name="photo_camera" /> 4
        </div>
      </q-img>
      <p class="text-caption text-grey q-ma-none text-right">
        <span v-if="anuncioList.updated">{{anuncioList.updated | dataFormatada }}</span>
        <span v-else>2020</span>
      </p> <!-- mixins -->
    </q-card-section>

    <q-card-section class="q-pa-xs q-mt-sm">

      <h2 class="tituloAnuncio q-my-xs q-py-xs">{{anuncioList.titulo}} </h2>

      <div class="subTituloAnuncio">
        {{anuncioList.tipo}} | {{anuncioList.modalidade}}
      </div>
    </q-card-section>

    <q-card-section
      class="q-pa-sm"
      style="height: 60px;"
    >
      <span class="resumoAnuncio">
        {{anuncioList.descricao}}
      </span>

    </q-card-section>

    <q-separator />

    <q-card-actions class="valor-anuncios ">
      <p class="q-ma-xs">R$ {{anuncioList.valor}},00</p>

      <!-- <div class="vendedor">
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
      </div> -->

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



