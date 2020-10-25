<template>

  <div class="q-ma-sm">

    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
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
        <q-tab-panel name="users">
          <div class="text-h6">users</div>

          <q-btn
            @click="getAllUsers"
            label="Buscar"
            color="primary"
            con-right="send"
          />

          <q-table
            title="Treats"
            :data="data"
            :columns="columns"
            row-key="name"
            binary-state-sort
          >
            <template v-slot:body="props">

              <q-tr :props="props">
                <q-td
                  key="id"
                  :props="props"
                >{{ props.row.id }}</q-td>

                <q-td
                  key="name"
                  :props="props"
                >
                  {{ props.row.name }}
                  <q-popup-edit v-model="props.row.name">
                    <q-input
                      v-model="props.row.name"
                      dense
                      autofocus
                      counter
                    />
                  </q-popup-edit>
                </q-td>
                <q-td
                  key="email"
                  :props="props"
                >
                  {{ props.row.email }}
                  <q-popup-edit
                    v-model="props.row.email"
                    title="Update email"
                    buttons
                  >
                    <q-input
                      type="number"
                      v-model="props.row.email"
                      dense
                      autofocus
                    />
                  </q-popup-edit>
                </q-td>
                <q-td
                  key="permission_id"
                  :props="props"
                >
                  <div class="text-pre-wrap">{{ props.row.permission_id }}</div>
                  <q-popup-edit v-model="props.row.permission_id">
                    <q-input
                      type="textarea"
                      v-model="props.row.permission_id"
                      dense
                      autofocus
                    />
                  </q-popup-edit>
                </q-td>

                <q-td
                  key="active"
                  :props="props"
                >
                  <div class="text-pre-wrap">{{ props.row.active }}</div>
                  <q-popup-edit v-model="props.row.active">
                    <q-input
                      type="textarea"
                      v-model="props.row.active"
                      dense
                      autofocus
                    />
                  </q-popup-edit>
                </q-td>

                <q-td
                  key="created"
                  :props="props"
                >{{ props.row.created }}</q-td>
                <q-td
                  key="update"
                  :props="props"
                >{{ props.row.update }}</q-td>

              </q-tr>
            </template>
          </q-table>

        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

      </q-tab-panels>
    </q-card>

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
      right: true,
      tab: 'users',
      splitterModel: 150,
      data: [],
      columns: [
        {
          name: 'id',
          required: true,
          label: 'ID',
          align: 'left',
          sortable: true
        },
        {
          name: 'name',
          required: true,
          label: 'Nome',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'email', align: 'center', label: 'email', field: 'email', sortable: true },
        { name: 'permission_id', align: 'center', label: 'permission_id', field: 'permission_id', sortable: true },
        { name: 'active', align: 'center', label: 'active', field: 'active', sortable: true },
        { name: 'created', align: 'center', label: 'created', field: 'created', sortable: true },
        { name: 'update', align: 'center', label: 'update', field: 'update', sortable: true },

      ],

    }
  },

  computed: {

  },

  methods: {
    ...mapActions('store_db_firebase', ['getAllUsersDb']),


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
    }


  }

}
</script>