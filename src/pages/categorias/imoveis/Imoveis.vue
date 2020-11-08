<template >
  <div>
    <!-- <q-page-container class="fit row no-wrap justify-start  content-start q-gutter-x-md ">
      <div class="col-3 self-start q-gutter-x-sm bg-grey-6">
        <colunaFilter />
      </div>

      <div class="fit flex justify-center self-start bg-grey q-gutter-y-md">
        <div class="fit justify-center items-start">
          <div class="row q-pa-xs bg-grey-1 col-12">

            <div class="col text-left text-primary q-pa-sm">
              <q-breadcrumbs>
                <q-breadcrumbs-el
                  label="Home"
                  icon="home"
                  to="/index"
                />
                <q-breadcrumbs-el :label="this.$route.name" />

              </q-breadcrumbs>
            </div>

            <q-space />

            <div class="col-4 q-pr-sm text-right">

              <q-btn
                flat
                color="grey-9"
                icon="view_list"
              />
              <q-btn
                flat
                color="grey-9"
                icon="view_module"
              />

            </div>

          </div>
        </div>

        <div
          v-for="anuncio in data"
          :key="anuncio.id"
          class="q-mx-sm"
        >

          <q-card
            class="col"
            style="min-width: 255px;"
          >
            <q-card-section class="text-center">
              <q-img
                :src="anuncio.foto"
                class="center"
                :ratio="4/3"
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
                :label="'R$ ' + anuncio.valor"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%);"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  {{anuncio.titulo}}
                </div>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">
                {{anuncio.tipo}}
              </div>
              <div class="text-subtitle1">
                {{anuncio.modalidade}}
              </div>
              <div class="text-caption text-grey">
                {{anuncio.descricao}}
              </div>
              <div class="col-auto text-grey justify-end text-caption q-pt-md row no-wrap items-center">
                <q-icon name="today" />
                {{anuncio.updated}}
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions class="justify-end text-secondary">
              <span class="q-px-xs">Vendedor</span>

              <q-icon
                class="q-px-xs"
                name="chat"
                de
              />

              <q-icon
                class="q-px-xs"
                name="call"
              />

              <q-rating
                v-model="stars"
                :max="5"
                size="18px"
              />
            </q-card-actions>

            <q-separator />

            <q-card-actions class="justify-end">
              <q-btn
                color="orange"
                no-caps
                @click="verAnuncio(anuncio)"
                label="Ver Anúncio"
              />
            </q-card-actions>
          </q-card>

        </div>

      </div>

    </q-page-container> -->

    <div class="fit row inline no-wrap justify-center  content-start  q-gutter-y-md">
      <div
        v-if="!telaXS"
        class="col-2 q-py-md"
      >
        <colunaFilter />
      </div>

      <!-- <div class="col-6 bg-grey-3 q-gutter-x-sm q-gutter-y-sm">
        <q-card
          v-for="anuncio in data"
          :key="anuncio.id"
          class="row"
        >
          <q-card-section
            class="col-12 col-md-4 q-pa-xs "
            style="border: 1px solid #ddd"
          >
            <q-img
              :src="anuncio.foto"
              :ratio="4/3"
              style="max-width: 300px; "
            />
            <div class="col absolute-bottom q-py-sm">
              <span class="q-px-xs">Vendedor</span>
              <q-icon
                class="q-px-xs"
                name="chat"
                color="green"
              />

              <q-icon
                class="q-px-xs"
                name="call"
                color="primary"
              />

              <q-rating
                v-model="stars"
                :max="5"
                size="18px"
              />
            </div>
          </q-card-section>

          <q-card-section class="col-12 col-md-8 q-pa-xs">
            <div class="col text-h6 ellipsis bg-grey-3 q-pa-sm">
              {{anuncio.titulo}}
            </div>
            <q-btn
              fab
              color="primary"
              :label="'R$ ' + anuncio.valor"
            />

            <div class="text-subtitle1">
              {{anuncio.tipo}}
            </div>
            <div class="text-subtitle1">
              {{anuncio.modalidade}}
            </div>
            <div class="text-caption text-grey">
              {{anuncio.descricao}}
            </div>
            <div class="col-auto text-grey justify-end text-caption q-pt-md row no-wrap items-center">
              {{anuncio.updated}}

            </div>

            <q-card-actions class="justify-end">
              <q-btn
                color="orange"
                no-caps
                @click="verAnuncio(anuncio)"
                label="Ver Anúncio"
              />
            </q-card-actions>

          </q-card-section>

        </q-card>

      </div> -->
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12 bg-grey-3  q-gutter-y-sm">
        <div class="q-pa-sm q-ma-none">
          <div class="row q-pa-xs bg-grey-1 col-12">

            <div class="col text-left text-primary q-pa-sm">
              <q-breadcrumbs>
                <q-breadcrumbs-el
                  label="Home"
                  icon="home"
                  to="/index"
                />
                <q-breadcrumbs-el :label="this.$route.name" />

              </q-breadcrumbs>
            </div>

            <q-space />

            <div class="col-4 q-pr-sm text-right">

              <q-btn
                flat
                color="grey-9"
                icon="view_list"
              />
              <q-btn
                flat
                color="grey-9"
                icon="view_module"
              />

            </div>

          </div>

          <div class="row q-pa-xs bg-white col-12">
            <div class="col-12 q-pr-sm text-right text-primary">
              <span class="text-grey-9">Ordenar Por:</span>
              <q-btn
                outline
                flat
                label="Titulo"
                class="q-px-sm"
                @click="ordenar('titulo')"
              />
              <q-btn
                flat
                label="Valor"
                class="q-px-sm"
                @click="ordenar('valor')"
              />
              <q-btn
                flat
                label="Tipo"
                class="q-px-sm"
                @click="ordenar('tipo')"
              />
            </div>
          </div>
        </div>

        <q-table
          grid
          title="Anúncios"
          :data="data"
          :columns="columns"
          row-key="id"
          :filter="filter"
          binary-state-sort
          :pagination.sync="pagination"
        >
          <template v-slot:header="props">
            <q-tr
              :props="props"
              class="q-px-none q-mx-none q-gutter-x-none"
            >
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                class="text-primary text-capitalize q-px-none q-mx-none"
              >
                <q-btn
                  flat
                  :label="col.label"
                  class="q-px-md text-capitalize"
                />

              </q-th>
            </q-tr>
          </template>

          <template v-slot:item="props">
            <!-- {{props.row}} -->
            <div class="q-pa-xs col-12">
              <q-card class="row">
                <q-card-section
                  class="col-12 col-md-4 q-pa-xs "
                  style="border: 1px solid #ddd"
                >
                  <!-- <q-img
                    :src="props.row.foto"
                    :ratio="4/3"
                    style="max-width: 300px; "
                  /> -->
                  <q-card-section class="text-center">
                    <q-img
                      :src="props.row.foto"
                      class="center"
                      :ratio="4/3"
                      style="max-width: 300px; "
                    >
                      <div class="absolute-bottom-left text-subtitle2">
                        <q-icon name="photo_camera" /> 4
                      </div>
                    </q-img>
                  </q-card-section>

                </q-card-section>

                <q-card-section class="col-12 col-md-8 q-pa-xs">
                  <div class="col text-h6 ellipsis bg-grey-1 q-pa-sm">
                    {{props.row.titulo}}
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="text-subtitle1">
                        {{props.row.tipo}}
                      </div>

                    </div>

                    <div class="col text-right">
                      <q-btn
                        flat
                        size="large"
                        class="q-pa-sm "
                        color="primary"
                        :label="'R$ ' + props.row.valor"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <div class="text-caption text-grey">
                        {{props.row.descricao}}
                      </div>
                    </div>

                  </div>

                  <q-separator />

                  <div class="row">

                    <div class="col-12 flex q-py-sm">
                      <span class="q-px-xs">Vendedor</span>
                      <q-icon
                        class="q-px-sm"
                        name="chat"
                        color="green"
                        style="top:3px"
                      />

                      <q-icon
                        class="q-px-sm"
                        name="call"
                        color="primary"
                        style="top:3px"
                      />

                      <q-rating
                        v-model="stars"
                        :max="5"
                        size="18px"
                      />
                    </div>
                  </div>

                  <q-card-actions class="row q-pb-xs">
                    <div class="col-left text-grey text-caption">
                      {{props.row.modalidade}} |
                      {{props.row.estado}} |
                      {{props.row.updated}}
                    </div>

                    <div class="col text-right">
                      <q-btn
                        color="orange"
                        flat
                        no-caps
                        @click="verAnuncio(props.row)"
                        label="Ver Anúncio"
                      />
                    </div>
                  </q-card-actions>

                </q-card-section>

              </q-card>
            </div>
          </template>
          <template v-slot:top-right>
            <q-input
              dense
              outlined
              debounce="300"
              v-model="filter"
              placeholder=Filtrar
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>

      </div>
    </div>

    <!-- <q-btn
        @click="getAllUsers"
        label="Buscar"
        color="primary"
        class="q-pa-md"
      /> -->

  </div>

</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  height: 100%
.q-table__grid-content .row
  display: flex
  flex-wrap: none
</style>

<script>
import colunaFilter from 'src/components/menu/colunaFiltro'
import mixinUtils from 'src/mixins/mixin-utils'
import menuCards from 'src/components/menu/menuCards.vue';
import tabsJson from 'src/dados/TabsIndex.json'
import { firebaseAuth, firebaseDb } from 'boot/firebase'

export default {
  mixins: [mixinUtils],
  components: {
    colunaFilter,
    menuCards
  },
  data () {
    return {
      sortBy: 'valor',
      stars: 4,
      filter: '',
      tabs: tabsJson,
      modelSingle: 'Apple',
      modelMultiple: ['Facebook'],
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      slide: 1,
      columns: [
        // { name: 'foto', align: 'center', label: 'Foto', field: 'foto' },
        {
          name: 'titulo',
          required: true,
          label: 'Título',
          align: 'left',
          field: row => row.titulo,
          format: val => `${val}`,
          sortable: true
        },
        // { name: 'descricao', align: 'center', label: 'descricao', field: 'descricao', sortable: true },
        { name: 'tipo', label: 'Tipo', field: 'tipo', sortable: true },
        { name: 'categoria', label: 'Categoria', field: 'categoria', sortable: true },
        { name: 'modalidade', label: 'Modalidade', field: 'modalidade', sortable: true },
        { name: 'valor', label: 'Valor', field: 'valor', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        // { name: 'contato', label: 'Contato', field: 'contato', sortable: true },
        //  { name: 'user', label: 'User', field: 'user', sortable: true },
        //   { name: 'banheiros', label: 'Banheiros', field: 'banheiros', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }

      ],

      data: [
        // {
        //   titulo: 'Frozen Yogurt',
        //   descricao: 'A frozen dessert made with yogurt and sometimes other dairy products including non-dairy products',
        //   calories: 159,
        //   fat: 6.0,
        //   carbs: 24,
        //   protein: 4.0,
        //   sodium: 87,
        //   calcium: '14%',
        //   iron: '1%'
        // }     
      ],
      pagination: {

        descending: false
      },
    }
  },
  mounted () {
    this.getAllUsers()
  },

  methods: {


    getAllUsers () {
      let userTasks = firebaseDb.ref()
      // // Ler todos os dados dos users
      // userTasks.on('child_added', snapshot => {
      //   let tasks = snapshot.val()
      //   this.mapedUsers(Object.entries(tasks.users))
      // })

      // let fb = firebaseDb.ref('olc_db')
      // fb.child('imoveis_venda').once('value', function (userSnap) {
      //   //  fb.child('permissions').once('value', function (mediaSnap) {
      //   // extend function: https://gist.github.com/katowulf/6598238
      //   console.log(({}, userSnap.val()));
      //   this.data.push(({}, userSnap.val()));
      //   // });
      // });

      userTasks.on('child_added', snapshot => {
        let tasks = snapshot.val()

        console.log(Object.entries(tasks.imoveis_venda))
        // this.data.push(tasks.imoveis_venda)
        this.mapedUsers(Object.entries(tasks.imoveis_venda))
      })




      // Monitora o banco e inicia sempre que há mudanças
      // userTasks.on('child_changed', snapshot => {
      //   let tasks = snapshot.val()
      //   this.mapedUsers(Object.entries(tasks.users))
      // })

    },

    // getPermisisonsUser () {
    //   var fb = firebaseDb.ref('olc_db')
    //   fb.child('users/0TiIWbsyXYXNPJeQMlAZ7dWiJeW2').once('value', function (userSnap) {
    //     fb.child('permissions').once('value', function (mediaSnap) {
    //       // extend function: https://gist.github.com/katowulf/6598238
    //       console.log(({}, userSnap.val(), mediaSnap.val()));
    //     });
    //   });
    // },

    mapedUsers (values) {
      let result = []

      for (let index = 0; index < values.length; index++) {
        const element = values[index];
        let v0 = element[0]
        let v1 = element[1]
        v1.id = v0
        result.push(v1)
      }

      this.data = result
      console.log(this.data)
    },
    verAnuncio (anuncio) {
      console.log(anuncio)
    },

    ordenar (value) {
      this.pagination.sortBy = value
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