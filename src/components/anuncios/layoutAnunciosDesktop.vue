<template>
  <div class="row q-ma-md justify-center">

    <div
      class="col-md-3 q-ma-auto"
      style="max-width: 300px;"
    >
      <q-list
        bordered
        padding
      >
        <q-item-label header>User Controls</q-item-label>

        <q-item
          clickable
          v-ripple
        >
          <q-item-section>
            <q-item-label>Content filtering</q-item-label>
            <q-item-label caption>
              Set the content filtering level to restrict
              apps that can be downloaded
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
        >
          <q-item-section>
            <q-item-label>Password</q-item-label>
            <q-item-label caption>
              Require password for purchase or use
              password to restrict purchase
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header>General</q-item-label>

        <q-item
          tag="label"
          v-ripple
        >
          <q-item-section
            side
            top
          >
            <q-checkbox v-model="check1" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Notifications</q-item-label>
            <q-item-label caption>
              Notify me about updates to apps or games that I downloaded
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          tag="label"
          v-ripple
        >
          <q-item-section
            side
            top
          >
            <q-checkbox v-model="check2" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Sound</q-item-label>
            <q-item-label caption>
              Auto-update apps at anytime. Data charges may apply
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          tag="label"
          v-ripple
        >
          <q-item-section
            side
            top
          >
            <q-checkbox v-model="check3" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Auto-add widgets</q-item-label>
            <q-item-label caption>
              Automatically add home screen widgets
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header>Notifications</q-item-label>

        <q-item
          tag="label"
          v-ripple
        >
          <q-item-section>
            <q-item-label>Battery too low</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle
              color="blue"
              v-model="notif1"
              val="battery"
            />
          </q-item-section>
        </q-item>

        <q-item
          tag="label"
          v-ripple
        >
          <q-item-section>
            <q-item-label>Friend request</q-item-label>
            <q-item-label caption>Allow notification</q-item-label>
          </q-item-section>
          <q-item-section
            side
            top
          >
            <q-toggle
              color="green"
              v-model="notif2"
              val="friend"
            />
          </q-item-section>
        </q-item>

        <q-item
          tag="label"
          v-ripple
        >
          <q-item-section>
            <q-item-label>Picture uploaded</q-item-label>
            <q-item-label caption>Allow notification when uploading images</q-item-label>
          </q-item-section>
          <q-item-section
            side
            top
          >
            <q-toggle
              color="red"
              v-model="notif3"
              val="picture"
            />
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header>Other settings</q-item-label>

        <q-item>
          <q-item-section side>
            <q-icon
              color="teal"
              name="volume_down"
            />
          </q-item-section>
          <q-item-section>
            <q-slider
              v-model="volume"
              :min="0"
              :max="10"
              label
              color="teal"
            />
          </q-item-section>
          <q-item-section side>
            <q-icon
              color="teal"
              name="volume_up"
            />
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section side>
            <q-icon
              color="deep-orange"
              name="brightness_medium"
            />
          </q-item-section>
          <q-item-section>
            <q-slider
              v-model="brightness"
              :min="0"
              :max="10"
              label
              color="deep-orange"
            />
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section side>
            <q-icon
              color="primary"
              name="mic"
            />
          </q-item-section>
          <q-item-section>
            <q-slider
              v-model="mic"
              :min="0"
              :max="50"
              label
            />
          </q-item-section>
        </q-item>
      </q-list>

    </div>

    <div class="col-md-6">

      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        navigation
        padding
        arrows
        height="300px"
        class="bg-grey-1 shadow-2 rounded-borders"
      >
        <q-carousel-slide
          :name="1"
          class="column no-wrap"
        >
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/mountains.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="2"
          class="column no-wrap"
        >
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/quasar.jpg"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>

      <div class="bg-white textrey-9">
        <q-card
          class="row"
          flat
        >

          <div class="col text-left q-pa-sm">
            <q-breadcrumbs
              active-color="orange"
              style="font-size: 14px"
            >
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

        </q-card>
      </div>
      <q-table
        title="Todos Anúncios"
        :data="data"
        :columns="columns"
        row-key="name"
        no-hover
        class="wrap"
        :dense="this.$q.screen.lt.sm"
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            outlined
            debounce="300"
            v-model="filter"
            placeholder="Buscar"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body-cell-name="props">
          <q-td
            :props="props"
            no-hover
            auto-width
          >
            <q-card
              class="my-card"
              flat
            >

              <q-card-section horizontal>
                <q-card-section class="col-3">
                  <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg">

                    <div class="absolute-bottom-left text-subtitle2">
                      <q-icon name="photo_camera"></q-icon>
                      4
                    </div>
                  </q-img>
                </q-card-section>

                <q-card-section
                  class="col"
                  style="white-space: normal"
                >
                  <q-item-label class="text-subtitle1">{{props.row.name}}</q-item-label>
                  <q-item-label caption>
                    {{props.row.details}}
                  </q-item-label>

                  <q-card-actions class="absolute-bottom-right">
                    <q-item-label class="text-subtitle1">{{props.row.valor}}</q-item-label>
                  </q-card-actions>

                  <q-card-actions class="absolute-bottom-left">
                    <q-item-label>{{props.row.date}}</q-item-label>
                  </q-card-actions>

                </q-card-section>

              </q-card-section>
            </q-card>

          </q-td>

        </template>
      </q-table>
    </div>

  </div>
</template>
<style>
.q-table__middle .q-tablet.body.td:after {
  background: none !important;
}
.q-img__content > div {
  padding: 4px;
}
</style>
<style lang="sass" scoped>

x

.table .q-table tbody tr td.text-right
  vertical-align: top!important
</style>
<script>
import { Screen } from 'quasar'
export default {
  data () {
    return {
      slide: 1,
      filter: '',
      check1: true,
      check2: false,
      check3: false,

      notif1: true,
      notif2: true,
      notif3: false,

      volume: 6,
      brightness: 3,
      mic: 8,
      columns: [
        { name: 'name', align: 'left', label: "Anúncios", sortable: true },
      ],

      data: [
        {
          name: 'Frozen Yogurt',
          details: 'A frozen dessert made with yogurt and sometimes other dairy products including non-dairy products',
          valor: 'R$ 1250,32',
          date: '01/03/2020'

        },
        {
          name: 'Ice cream sandwich',
          details: 'A frozen dessert consisting of ice cream between two skins, crusts, or other similar biscuit',
          date: '10/05/2020',
          valor: 'R$ 1250,32'

        },
        {
          name: 'Eclair',
          details: 'An oblong pastry made with choux dough filled with a cream and topped with chocolate icing',
          date: '14/07/2020',
          valor: 'R$ 1250,32'

        },
        {
          name: 'Cupcake',
          details: 'A small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup',
          date: '25/02/2020',
          valor: 'R$ 1250,32'

        },
        {
          name: 'Gingerbread',
          details: 'A broad category of baked goods, typically flavored with ginger, cloves, nutmeg or cinnamon and sweetened with honey, sugar or molasses',
          date: '25/01/2020',
          valor: 'R$ 1250,32'

        },
        {
          name: 'Jelly bean',
          details: 'Small bean-shaped sugar candies with soft candy shells and thick gel interiors',
          date: '25/02/2020',
          valor: 'R$ 1250,32'

        },
        {
          name: 'Lollipop',
          details: 'A type of sugar candy usually consisting of hard candy mounted on a stick and intended for sucking or licking',
          date: '25/02/2020',
          valor: 'R$ 1250,32'

        },
        {
          name: 'Honeycomb',
          details: 'A mass of hexagonal prismatic wax cells built by honey bees in their nests to contain their larvae and stores of honey and pollen',
          date: '25/02/2020',
          valor: 'R$ 1250,32'


        },
        {
          name: 'Donut',
          details: 'A type of fried dough confection or dessert food',
          date: '25/02/2020',
          valor: 'R$ 1250,32'

        },
        {
          name: 'KitKat',
          details: `A chocolate-covered wafer bar confection created by Rowntree's of York, United Kingdom, and is now produced globally by Nestlé`,
          date: '25/02/2020',
          valor: 'R$ 1250,32'

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