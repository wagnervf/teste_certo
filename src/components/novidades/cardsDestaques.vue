<template>
  <div class="q-pa-md q-pt-none fit">
    <q-tabs
      v-model="tabOrdenacao"
      inline-label
      class="text-grey-9"
    >
      <div
        v-for="item in 10"
        :key="item"
      >
        <q-tab
          name="Filtros"
          role="button"
          aria-label="filtrar dados da tabela"
        >
          <q-card class="my-card">
            <q-img
              style="width: 180px; height: 150px"
              src="https://cdn.quasar.dev/img/linux-avatar.png"
            />

            <q-card-section
              title="Título do anúncio"
              class="q-px-none"
            >
              <h2 class="tituloAnuncio q-my-xs">Our Changing Planet</h2>
            </q-card-section>

            <!-- <q-card-section class="q-pt-none">
              <p class="resumoAnuncio" title="Resumo do anúncio">
                Locação de Chácara para temporada, final de semana, aniversário,
                casamento etc
              </p>
            </q-card-section> -->

            <q-card-section
              class="q-pa-sm"
              style="height: 100px"
            >
              <span class="resumoAnuncio">
                Locação de Chácara para temporada, final de semana, aniversário,
                casamento etc
              </span>
            </q-card-section>
          </q-card>
        </q-tab>
      </div>
    </q-tabs>
  </div>
</template>


<style lang="sass" >
.q-tab
  white-space: normal!important
  padding: 0 5px !important

.my-card
  width: 20%
  max-width: 180px
  min-width: 180px
  cursor: pointer
  text-align: left

.my-card:focus
.my-card:hover
  width: 21%
  max-width: 190px
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
  transition: all 0.3s cubic-bezier(.25,.8,.25,1)

.q-tabs--horizontal .q-tabs__arrow--right
  top: 50%
.q-tabs--horizontal .q-tabs__arrow--left
  top: 50%

.q-tabs--horizontal .q-tabs__arrow
  height: fit-content
  border: 1px solid #344973
  border-radius: 50%
  min-width: auto
  width: 44px
  height: 44px
  font-size: 44px
  background-color: #fff

.q-tabs--horizontal .q-tabs__arrow:focus
.q-tabs--horizontal .q-tabs__arrow:hover
  background-color: #bb2158
  color: #fff
  border: 1px solid #fff
</style>


<script>
export default {
  data () {
    return {
      slide: 1,
      tabOrdenacao: "",
    };
  },
};
</script>