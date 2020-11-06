<template >
  <div class="row q-gutter-md q-pa-md justify-center">
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
      <colunaFilter />
    </div>

    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-xs-12">
      <div class="q-pa-sm bg-blue-grey-2">
        <div class="q-gutter-md row items-start">
          <div style="min-width: 250px; max-width: 300px">
            <q-badge
              color="secondary"
              class="q-mb-md"
            >
              Model: {{ modelSingle || '*none*' }}
            </q-badge>

            <q-select
              filled
              v-model="modelSingle"
              :options="options"
              use-chips
              stack-label
              label="Single selection"
            />
          </div>

          <div style="min-width: 250px; max-width: 300px">
            <q-badge
              color="secondary"
              class="q-mb-md"
            >
              Model: {{ modelMultiple || '[]' }}
            </q-badge>

            <q-select
              filled
              v-model="modelMultiple"
              multiple
              :options="options"
              use-chips
              stack-label
              label="Multiple selection"
            />
          </div>
        </div>
      </div>

      <div class=" row q-pa-sm bg-grey-1 col-12">

        <div class="col text-left q-pa-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el
              label="Home"
              icon="home"
              to="/index"
            />
            <q-breadcrumbs-el
              label="Components"
              icon="widgets"
            />
            <q-breadcrumbs-el label="Toolbar" />
          </q-breadcrumbs>
        </div>

        <q-space />

        <div class="col text-right">
          <q-btn
            flat
            round
            color="grey-9"
            icon="view_list"
          />
          <q-btn
            flat
            round
            color="grey-9"
            icon="view_module"
          />

        </div>

      </div>

      <div class="q-pa-sm">
        <q-table
          :data="data"
          :columns="columns"
          row-key="name"
          flat
        >
          <template v-slot:body-cell-name="props">
            <q-td :props="props">
              <div>
                <q-badge
                  color="purple"
                  :label="props.value"
                />
              </div>
              <div class="my-table-details">
                {{ props.row.details }}
              </div>
            </q-td>
          </template>
        </q-table>
      </div>

      <div class="q-pa-sm">
        <q-table
          :data="data"
          :columns="columns"
          row-key="name"
          flat
        >
          <template v-slot:body-cell-name="props">
            <q-td :props="props">
              <div>
                <q-badge
                  color="purple"
                  :label="props.value"
                />
              </div>
              <div class="my-table-details">
                {{ props.row.details }}
              </div>
            </q-td>
          </template>
        </q-table>
      </div>
    </div>

  </div>

</template>


<script>
import colunaFilter from 'src/components/menu/colunaFiltro'
import mixinUtils from 'src/mixins/mixin-utils'
import menuCards from 'src/components/menu/menuCards.vue';
import tabsJson from 'src/dados/TabsIndex.json'

export default {
  meta: {
    title: 'O LUgar Certo',
    titleTemplate: title => `${title} - Wagner`,
    meta: {
      description: { name: 'description', content: 'Page 1' },
      keywords: { name: 'keywords', content: 'Quasar website' },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
      // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
      ogTitle: {
        name: 'og:title',
        // optional; similar to titleTemplate, but allows templating with other meta properties
        template (ogTitle) {
          return `${ogTitle} - My Website`
        }
      }
    },
    // CSS tags
    link: {
      material: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    },
    // JS tags
    script: {
      ldJson: {
        type: 'application/ld+json',
        innerHTML: `{ "@context": "http://schema.org" }`
      }
    },
    // <html> attributes
    htmlAttr: {
      'xmlns:cc': 'http://creativecommons.org/ns#' // generates <html xmlns:cc="http://creativecommons.org/ns#">,
    },

    // <body> attributes
    bodyAttr: {
      'action-scope': 'xyz', // generates <body action-scope="xyz">
      empty: undefined // generates <body empty>
    },

    // <noscript> tags
    noscript: {
      default: 'This is content for browsers with no JS (or disabled JS)'
    }
  },

  mixins: [mixinUtils],
  components: {
    colunaFilter,
    menuCards
  },
  data () {
    return {
      tabs: tabsJson,
      modelSingle: 'Apple',
      modelMultiple: ['Facebook'],

      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],

      slide: 1,
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],

      data: [
        {
          name: 'Frozen Yogurt',
          details: 'A frozen dessert made with yogurt and sometimes other dairy products including non-dairy products',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          details: 'A frozen dessert consisting of ice cream between two skins, crusts, or other similar biscuit',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          details: 'An oblong pastry made with choux dough filled with a cream and topped with chocolate icing',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          details: 'A small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          details: 'A broad category of baked goods, typically flavored with ginger, cloves, nutmeg or cinnamon and sweetened with honey, sugar or molasses',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          details: 'Small bean-shaped sugar candies with soft candy shells and thick gel interiors',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          details: 'A type of sugar candy usually consisting of hard candy mounted on a stick and intended for sucking or licking',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          details: 'A mass of hexagonal prismatic wax cells built by honey bees in their nests to contain their larvae and stores of honey and pollen',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          details: 'A type of fried dough confection or dessert food',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          details: `A chocolate-covered wafer bar confection created by Rowntree's of York, United Kingdom, and is now produced globally by Nestlé`,
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    }
  }
}
</script>

<style>
.my-table-details {
  font-size: 0.85em;
  font-style: italic;
  max-width: 200px;
  white-space: normal;
  color: #555;
  margin-top: 4px;
}
</style>