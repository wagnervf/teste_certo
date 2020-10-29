<template>

  <div class="q-ma-md">

    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey q-pa-sm"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab
          name="users"
          label="users"
        />
        <q-tab
          name="alarms"
          label="Alarms"
        />

      </q-tabs>

      <q-separator />

      <q-tab-panels
        v-model="tab"
        animated
      >
        <q-tab-panel
          name="users"
          class="q-pa-xs"
        >
          <q-btn
            @click="getAllUsers"
            label="Buscar"
            color="primary"
            con-right="send"
          />

          <template>
            <div class="q-pa-xs">
              <q-table
                title="Usuários Cadastrados"
                :data="data"
                :columns="columns"
                row-key="id"
                selection="single"
                :loading="loading"
                :filter="filter"
                :selected.sync="selected"
              >
                <template v-slot:top-right>
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

                <template v-slot:body-cell-action="props">
                  <q-td :props="props">
                    <q-btn
                      round
                      size="sm"
                      color="grey-9"
                      icon="edit"
                      @click="updateUser(props.row)"
                    />
                    <q-btn
                      round
                      size="sm"
                      color="red"
                      icon="delete"
                      @click="promptToDelete(props.row)"
                    />

                  </q-td>
                </template>
              </q-table>

              <div class="q-mt-md">
                Selected: {{ JSON.stringify(selected) }}
              </div>
            </div>
          </template>

        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

      </q-tab-panels>
    </q-card>

    <q-dialog
      v-model="updateU"
      persistent
    >
      <q-card>
        <q-card-section class="row items-center">

        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="Cancel"
            color="primary"
            v-close-popup
          />
          <q-btn
            flat
            label="Turn on Wifi"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-btn
      @click="getPermisisonsUser"
      label="Users"
      color="primary"
      con-right="send"
    />

  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import mixinUtils from 'src/mixins/mixin-utils'
import { firebaseAuth, firebaseDb } from 'boot/firebase'

export default {
  name: 'Administracao',

  mixins: [mixinUtils],
  components: {

  },


  data () {
    return {
      usersResult: [],
      selected: [],
      updateU: false,
      filter: '',
      loading: false,
      right: true,
      tab: 'users',
      splitterModel: 150,
      data: [],
      columns: [
        {
          name: 'action',
          label: 'action',
          field: 'action',
          align: 'left',
        },

        {
          name: 'id',
          label: 'ID',
          field: 'id',
          align: 'left',
        },
        {
          name: 'name',
          label: 'Nome',
          field: 'name',
          align: 'left',
          sortable: true
        },
        { name: 'email', align: 'center', label: 'email', field: 'email', sortable: true },
        { name: 'permission_id', align: 'center', label: 'permission_id', field: 'permission_id', sortable: true },
        { name: 'active', align: 'center', label: 'active', field: 'active', sortable: true },
        { name: 'created', align: 'center', label: 'created', field: 'created', sortable: true },
        { name: 'update', align: 'center', label: 'update', field: 'update', sortable: true },

      ]
    }
  },

  computed: {

  },

  watch: {

  },



  methods: {
    ...mapActions('store_db_firebase', ['getAllUsersDb']),
    ...mapActions('store_auth', ['deleteDataFirebase']),

    // Start listing users from the beginning, 1000 at a time.
    getAllUsers (nextPageToken) {
      let userTasks = firebaseDb.ref()
      //   userTasks.on("value", snapshot => {
      //     let values = snapshot.val()
      //     this.mapedUsers(Object.entries(snapshot.val()))

      //   }, function (errorObject) {
      //     console.log("The read failed: " + errorObject.code);
      //   });
      // Ler todos os dados dos users
      userTasks.on('child_added', snapshot => {
        let tasks = snapshot.val()
        this.mapedUsers(Object.entries(tasks.users))
      })

      // Monitora o banco e inicia sempre que há mudanças
      userTasks.on('child_changed', snapshot => {
        let tasks = snapshot.val()
        this.mapedUsers(Object.entries(tasks.users))
      })

      //Identificar dados deletados
      /* userTasks.on('child_removed', snapshot => {
         let taskId = snapshot.key
 
         console.log(taskId)
       })
       */
    },

    getPermisisonsUser () {
      var fb = firebaseDb.ref('olc_db')
      fb.child('users/0TiIWbsyXYXNPJeQMlAZ7dWiJeW2').once('value', function (userSnap) {
        fb.child('permissions').once('value', function (mediaSnap) {
          // extend function: https://gist.github.com/katowulf/6598238
          console.log(({}, userSnap.val(), mediaSnap.val()));
        });
      });
    },
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

    promptToDelete (value) {
      this.$q.dialog({
        title: 'Confirmação',
        message: 'Deseja deletar o usuário?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        if (value) {
          this.deleteDataFirebase(value.uid)
        }
      })
    },

    updateUser (value) {
      this.updateU = true
      console.log(value)
    }





  }

}
</script>