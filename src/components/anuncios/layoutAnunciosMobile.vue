<template>
  <div class="q-pa-sm">
    <div class="row justify-center">
      <div class="col-2">
        <q-toolbar>
          <p>q Toolbar</p>
        </q-toolbar>

        <colunaFilter />
      </div>
      <div class="col-8">
        <q-table
          grid
          :card-container-class="cardContainerClass"
          :data="data"
          :columns="columns"
          row-key="name"
          :filter="filter"
          hide-header
          :pagination.sync="pagination"
          :rows-per-page-options="rowsPerPageOptions"
          style="justify-content: center"
          class="wrap"
        >
          <template
            v-slot:top-right
            class="q-px-xs"
          >
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>

          <template v-slot:item="props">
            <div class="q-pa-xs">

              <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

                <q-card-section>
                  <q-btn
                    fab
                    color="primary"
                    icon="place"
                    class="absolute"
                    style="top: 0; right: 12px; transform: translateY(-50%);"
                  />

                  <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
                      {{ props.row.name }}
                    </div>
                    <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                      <q-icon name="place" />
                      250 ft
                    </div>
                  </div>

                  <q-rating
                    v-model="stars"
                    :max="5"
                    size="32px"
                  />
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="text-subtitle1">
                    $・Italian, Cafe
                  </div>
                  <div class="text-caption text-grey">
                    Small plates, salads & sandwiches in an intimate setting.
                  </div>
                </q-card-section>

                <q-separator />

                <q-card-actions>
                  <q-btn
                    flat
                    round
                    icon="event"
                  />
                  <q-btn
                    flat
                    color="primary"
                  >
                    Reserve
                  </q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script>
import colunaFilter from 'src/components/menu/colunaFiltro'

const deserts = [
  'Frozen Yogurt',
  'Ice cream sandwich',
  'Eclair',
  'Cupcake',
  'Gingerbread',
  'Jelly bean',
  'Lollipop',
  'Honeycomb',
  'Donut',
  'KitKat'
]
const data = []

deserts.forEach(name => {
  for (let i = 0; i < 24; i++) {
    data.push({ name: name + ' (' + i + ')', calories: 20 + Math.ceil(50 * Math.random()) })
  }
})

data.sort(() => (-1 + Math.floor(3 * Math.random())))

export default {

  components: {
    colunaFilter
  },

  data () {
    return {
      stars: 4,
      filter: '',
      pagination: {
        page: 1,
        rowsPerPage: this.getItemsPerPage()
      },
      columns: [
        { name: 'name', label: 'Name', field: 'name' },
        { name: 'calories', label: 'Calories (g)', field: 'calories' }
      ],
      data
    }
  },

  computed: {
    cardContainerClass () {
      if (this.$q.screen.gt.xs) {
        return 'grid-masonry grid-masonry--' + (this.$q.screen.gt.sm ? '3' : '2')
      }

      return void 0
    },

    rowsPerPageOptions () {
      if (this.$q.screen.gt.xs) {
        return this.$q.screen.gt.sm ? [3, 6, 9] : [3, 6, 9]
      }

      return [3]
    }
  },

  watch: {
    '$q.screen.name' () {
      this.pagination.rowsPerPage = this.getItemsPerPage()
    }
  },

  methods: {
    getItemsPerPage () {
      const { screen } = this.$q
      if (screen.lt.sm) {
        return 3
      }
      if (screen.lt.md) {
        return 6
      }
      return 9
    }
  }
}
</script>

<style lang="sass">
.grid-masonry
  // flex-direction: column
  //height: 700px
  justify-content: center

  .my-card
    width: 100%
    max-width: 300px    

  &--2
    > div
      &:nth-child(2n + 1)
        order: 1
      &:nth-child(2n)
        order: 2

    &:before
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 1
  &--3
    > div
      &:nth-child(3n + 1)
        order: 1
      &:nth-child(3n + 2)
        order: 2
      &:nth-child(3n)
        order: 3

    &:before,
    &:after
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 2
</style>