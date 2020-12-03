<template>

  <div>
    <!-- <q-btn
      label="Filter"
      icon="filter_list"
      outline
      rounded
      @click="open()"
    /> -->
    <q-dialog
      v-model="dialog"
      position='bottom'
      full-width
    >
      <q-card class="full-width q-pa-xs">
        <q-card-section class="row items-center q-pb-none">
          <q-btn
            icon="keyboard_arrow_left"
            flat
            round
            dense
            size="large"
            v-close-popup
            class="game6"
          />
          <div class="text-h6 col-9 text-center">Filtros</div>
        </q-card-section>

        <q-separator />

        <q-tabs
          v-model="tab"
          dense
          class="game6 "
          active-color="game6"
          indicator-color="game6"
          align="justify"
        >
          <q-tab
            name="mails"
            label="Básicos"
            class="text-capitalize"
          />
          <q-tab
            name="alarms"
            label="Tipos"
            class="text-capitalize"
          />
          <q-tab
            name="movies"
            label="Categorias"
            class="text-capitalize"
          />
        </q-tabs>

        <q-tab-panels
          v-model="tab"
          animated
        >
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            <div class="q-pa-md justify-between">
              <q-option-group
                v-model="group"
                :options="options"
                color="red-10"
                dense
                size="100px"
                inline
                tabindex="0"
                class="optionGroupFiltros"
              />

            </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-dialog>
  </div>
  <!-- <div>

    <q-btn
      flat
      @click="drawerRight = !drawerRight"
      round
      dense
      icon="filter_alt"
    />
    <q-drawer
      side="right"
      v-model="drawerRight"
      bordered
      :breakpoint="500"
      :width="200"
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          Drawer Right
        </div>
      </q-scroll-area>
    </q-drawer>
  </div> -->
</template>



<script>

export default {

  props: {
    openFiltro: ''
  },

  data () {
    return {
      text: '',
      dialog: false,
      maximizedToggle: true,
      expanded: false,
      dialog: false,
      drawerRight: false,
      tab: 'mails',
      color: 'cyan',
      group: 'op1',
      options: [
        {
          label: 'Option 1',
          value: 'op1'
        },
        {
          label: 'Option 2',
          value: 'op2'
        },
        {
          label: 'Option 3',
          value: 'op3'
        },
        {
          label: 'Option 4',
          value: 'op4'
        },
        {
          label: 'Option 5',
          value: 'op5'
        },
        {
          label: 'Option 6',
          value: 'op6'
        }
      ]
    }
  },

  created () {
    // recebe o comando e chama o método this.$root.$emit('open-filter', true)
    this.$root.$on('open-filter', this.open)
  },

  methods: {
    open () {
      this.dialog = true
    }
  },

  watch: {
    openFiltro (value) {
      console.log(value)
      this.open()
    }
  }
}
</script>

<style>
.q-drawer.q-drawer--right {
  top: 35%;
}

.q-dialog__inner.flex {
  height: 80%;
}

.q-dialog__inner--minimized > div {
  max-width: 100%;
}
</style>