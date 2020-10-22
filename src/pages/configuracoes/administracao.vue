<template>

  <div>
    <q-splitter
      v-model="splitterModel"
      reverse
      unit="px"
      style="height: 900px"
    >

      <template v-slot:after>
        <div class="q-pa-md">
          <q-tabs
            v-model="tab"
            vertical
            class="text-teal"
          >
            <q-tab
              name="users"
              icon="account_circle"
              label="users"
            />
            <q-tab
              name="configs"
              icon="alarm"
              label="configs"
            />

          </q-tabs>
        </div>
      </template>

      <template v-slot:before>
        <q-card>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="users">
              <div class="text-h4 q-mb-md">users</div>
              <div class="q-pa-md">
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
              </div>
            </q-tab-panel>

            <q-tab-panel name="configs">
              <div class="text-h4 q-mb-md">configs</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

          </q-tab-panels>
        </q-card>
      </template>

    </q-splitter>

  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import mixinUtils from 'src/mixins/mixin-utils'
import { firebaseAuth, firebaseDb } from 'boot/firebase'

export default {
  name: 'Administracao',

  mixins: [mixinUtils],

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
      let results = {}
      let userTasks = firebaseDb.ref("olc_db/olc_db/users")

      userTasks.on("value", snapshot => {

        let values = snapshot.val()

        console.log(Object.keys(snapshot.val()))
        // console.log(Object.values(snapshot.val()))
        //  console.log(Object.entries(snapshot.val()))



        //this.data = Object.entries(snapshot.val())

        this.mapedUsers(Object.entries(snapshot.val()))



      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);

      });

      //  this.data = this.mapedUsers()
      // console.log(this.data)


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