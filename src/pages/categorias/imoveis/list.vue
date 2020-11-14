<template>
  <q-card
    :class="telaXS ? 'mycard2' : 'mycard'"
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
        class="center"
        :ratio="16/9"
      >
        <div class="absolute-bottom-left text-subtitle2">
          <q-icon name="photo_camera" /> 4
        </div>
      </q-img>
    </q-card-section>

    <q-card-section>
      <q-btn
        fab
        color="primary"
        :label="'R$ ' + anuncioList.valor"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{anuncioList.titulo}}
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        {{anuncioList.tipo}}
      </div>
      <div class="text-subtitle1">
        {{anuncioList.modalidade}}
      </div>
      <div class="text-caption text-grey">
        {{anuncioList.descricao}}
      </div>
      <div class="col-auto text-grey justify-end text-caption q-pt-md row no-wrap items-center">
        <q-icon name="today" />
        {{anuncioList.updated}}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions
      class="justify-end text-secondary"
      tabindex="-1"
    >
      <span class="q-px-xs">Vendedor</span>
      <q-icon
        class="q-px-xs"
        name="chat"
      />
      <q-icon
        class="q-px-xs"
        name="call"
      />
      <q-rating
        v-model="stars"
        :max="5"
        size="18px"
        aria-label="Estrela que informa pontuação do vendedor total de 5"
      />
    </q-card-actions>

    <q-separator />

    <q-card-actions class="justify-end">
      <q-btn
        color="orange"
        no-caps
        @click="verAnuncio(anuncioList)"
        label="Ver Anúncio Completo"
        role="link"
        size="small"
        tabindex="0"
      />
    </q-card-actions>
  </q-card>
</template>

<style lang="stylus">
.mycard {
  width: 255px;
  min-width: 255px;
  max-width: 260px;
  min-height: 500px;
}

.mycard2 {
  min-width: 255px;
}
</style>

<script>
import mixinUtils from 'src/mixins/mixin-utils'

export default {
  props: {
    anuncioList: ''
  },
  mixins: [mixinUtils],
  components: {

  },
  data () {
    return {
      stars: 4,

    }
  },

  methods: {
    verAnuncio (anuncio) {
      console.log(anuncio)
    },
  }



}
</script>



