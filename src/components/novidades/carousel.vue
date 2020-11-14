<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      control-type="regular"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="250px"
      class="rounded-borders"
      role="img"
    >
      <q-carousel-slide
        :name="1"
        class="col-12 no-wrap"
        title="Anúncios em Destaques"
        role="img"
      >
        <figure class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img
            class="rounded-borders col-md-3 col-sm-6 col-xs-12 full-height"
            src="https://cdn.quasar.dev/img/mountains.jpg"
            role="img"
          />
          <q-img
            class="rounded-borders col-md-3 col-sm-6 col-xs-12 full-height"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            role="img"
          />

          <q-img
            class="rounded-borders col-md-3 col-sm-6 col-xs-12 full-height"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            role="img"
          />
          <q-img
            class="rounded-borders col-md-3 col-sm-6 col-xs-12 full-height"
            src="https://cdn.quasar.dev/img/quasar.jpg"
            role="img"
          />
        </figure>
      </q-carousel-slide>

      <q-carousel-slide
        :name="2"
        class="col-6 no-wrap"
      >
        <figure class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img
            class="rounded-borders col-md-3 col-sm-6 col-xs-12 full-height"
            src="https://cdn.quasar.dev/img/cat.jpg"
            role="img"
            alt="Gato"
          />
          <q-img
            class="rounded-borders col-md-3 col-sm-6 col-xs-12 full-height"
            src="https://cdn.quasar.dev/img/linux-avatar.png"
            role="img"
            alt="Avatar linux"
          />

          <q-img
            class="rounded-borders col-md-3 col-sm-6 col-xs-12 full-height"
            src="https://cdn.quasar.dev/img/material.png"
            role="img"
          />
          <q-img
            class="rounded-borders col-md-3 col-sm-6 col-xs-12 full-height"
            src="https://cdn.quasar.dev/img/donuts.png"
            role="img"
          />
        </figure>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>