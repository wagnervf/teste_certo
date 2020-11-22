<template>

  <div class="q-pa-xs row items-start q-gutter-md justify-center gucci1 ">
    <q-card
      class="my-card"
      tabindex="0"
    >
      <q-img
        :ratio="4/3"
        src="https://cdn.quasar.dev/img/mountains.jpg"
      />

      <q-card-section class="q-pt-none">
        <label class="text-weight-bold">R$ 550</label>
        <p>Locação de Chácara para temporada, final de semana, aniversário, casamento etc</p>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-img
        :ratio="4/3"
        src="https://cdn.quasar.dev/img/linux-avatar.png"
      />

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p>Locação de Chácara para temporada, final de semana, aniversário, casamento etc</p>
      </q-card-section>
    </q-card>

    <q-card
      class="my-card"
      bordered
    >
      <q-img
        :ratio="4/3"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline gucci1">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

    </q-card>

    <q-card
      class="my-card"
      tabindex="0"
    >
      <q-img
        :ratio="4/3"
        src="https://cdn.quasar.dev/img/donuts.png"
      />
      <q-card-section class="q-pt-none">
        R$ 550
        Locação de Chácara para temporada, final de semana, aniversário, casamento etc

      </q-card-section>
    </q-card>

    <q-card
      class="my-card"
      tabindex="0"
    >
      <q-img
        :ratio="4/3"
        src="https://cdn.quasar.dev/img/chicken-salad.jpg"
      />

      <q-card-section class="q-pt-none">
        R$ 550
        Locação de Chácara para temporada, final de semana, aniversário, casamento etc

      </q-card-section>
    </q-card>
  </div>

</template>
<style lang="sass" scoped>
.my-card
  width: 20%
  max-width: 230px
  min-width: 230px
  cursor: pointer

.my-card:focus
.my-card:hover
  width: 21%
  //height: 410px
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
  transition: all 0.3s cubic-bezier(.25,.8,.25,1)
</style>


<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>