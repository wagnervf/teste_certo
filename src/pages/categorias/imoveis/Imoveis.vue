<template>

  <div class="q-pa-md fit row wrap  ">
    <div class="q-pa-md-xs">
      <div class="row">
        <q-breadcrumbs>
          <q-breadcrumbs-el
            label="Home"
            icon="home"
            to="/index"
          />
          <q-breadcrumbs-el :label="this.$route.name" />
        </q-breadcrumbs>

      </div>
      <div class="row">
        <q-table
          grid
          :data="data"
          :columns="columns"
          row-key="name"
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

          <template
            v-slot:top
            class="q-px-none"
          >
            <div class="q-gutter-x-xs col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <q-input
                dense
                outlined
                debounce="300"
                v-model="filter"
                placeholder="Filtrar dados da tabela"
                label="Filtrar dados da tabela"
                title="Filtrar dados da tabela"
                class="col-xs-12"
                v-focus
                tabindex="0"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
            <q-space />

            <div class="q-gutter-x-sm ">
              <q-tabs
                v-model="tabOrdenacao"
                inline-label
                animated
                swipeable
                outside-arrows
                mobile-arrows
                class="text-primary text-right"
              >
                <span class="text-grey-9 q-px-xs">Ordenar Por: </span>
                <q-tab
                  name="titulo"
                  label="Titulo"
                  @click="ordenar('titulo')"
                  class="q-px-sm-xs"
                  role="button"
                  aria-label="filtrar dados da tabela pelo título"
                />|
                <q-tab
                  name="valor"
                  label="Menor Valor"
                  @click="ordenar('valor')"
                  role="button"
                  class="q-px-sm-xs"
                  aria-label="filtrar dados da tabela por menor valor"
                />|
                <q-tab
                  name="tipo"
                  label="Tipo"
                  @click="ordenar('tipo')"
                  role="button"
                  class="q-px-sm-xs"
                  aria-label="filtrar dados da tabela por tipo"
                />

              </q-tabs>
            </div>
          </template>

          <template v-slot:item="props">
            <div class="q-pa-xs">
              <list-dados :anuncioList="props.row" />
            </div>

          </template>

        </q-table>
      </div>
    </div>
  </div>

</template>

<script>
import mixinUtils from 'src/mixins/mixin-utils'
import listDados from './list'
import { firebaseAuth, firebaseDb } from 'boot/firebase'

export default {
  meta: {
    // sets document title
    title: 'Anúncio de Imóveis',
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    titleTemplate: title => `${title} - O Lugar Certo`,

    // meta tags
    meta: {
      description: { name: 'description', content: 'O Lugar Certo' },

      //habilitar ZOOM no celular
      description: { name: 'viewport', content: 'width=device-width' },

      keywords: { name: 'keywords', content: 'O Lugar Certo, olc' },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
      // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
      ogTitle: {
        name: 'og:title',
        // optional; similar to titleTemplate, but allows templating with other meta properties
        template (ogTitle) {
          return `${ogTitle} - O Lugar Certo`
        }
      }
    }

  },
  mixins: [mixinUtils],
  components: {
    listDados
  },
  data () {
    return {
      sortBy: 'valor',
      tabOrdenacao: 'titulo',

      filter: '',

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

      data: [],


      pagination: {
        descending: false,

        rowsPerPage: 10
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

    ordenar (value) {
      this.pagination.sortBy = value
    }

  },

  watch: {
    // tipoOrdenacao (value) {
    //   this.pagination.sortBy = value
    //   console.log(value)
    // }
  }
}
</script>

<style lang="stylus">
.q-table__grid-content.row {
  justify-content: center;
}

.q-table__top.relative-position.row.items-center {
  padding-left: 0px;
}
</style>
