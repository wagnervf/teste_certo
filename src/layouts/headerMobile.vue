<template>
  <div
    class="row q-pa-sm bg-white text-grey-8 shadow-box shadow-1"
    style="margin-top:50px"
  >
    <!-- <div class="col-sm">
      <q-input
        class="q-px-xs"
        v-model="search"
        outlined
        placeholder="Buscar"
      >
        <template v-slot:prepend>
          <q-icon
            v-if="search === ''"
            name="search"
          />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="search = ''"
          />
        </template>
      </q-input>
    </div> -->

    <!-- <div class="col text-right q-mr-sm">
      <q-btn
        align="right"
        class="btn-fixed-width q-pa-sm"
        color="primary"
        label="Anunciar"
        rounded
        :to="{ name: 'index'}"
      />
    </div> -->
  </div>

</template>

<script>
import { computed } from '@vue/composition-api'
import { mapState, mapActions } from 'vuex'
import store from '../store/store'
import UserInfo from '../components/menu/userinfo.vue';


export default {
  name: 'LayoutPadrao',


  components: {
    UserInfo
  },

  data () {
    return {
      search: '',
      tab: 'mails',
      leftDrawerOpen: false,
      userInfoOpen: false,
      pesquisarVisible: true,
      tipoPlataforma: null

    }
  },


  computed: {
    ...mapState('store_auth', ['loggedIn']),
    ...mapState('store_plataform', ['mobile', 'desktop']),

    userEstaLogado () {
      return this.loggedIn
    },

    isMobile () {
      return this.mobile
    },


  },

  methods: {

  }


}
</script>


