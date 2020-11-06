<template>

  <formAdd />

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import mixinUtils from 'src/mixins/mixin-utils'
import formAdd from './form'

export default {
  name: "UserProfile",
  mixins: [mixinUtils],
  components: { formAdd },

  data () {
    return {

      dadosUpdate: true,


    }
  },
  mounted () {
  },



  comnputed: {
    ...mapGetters('store_auth', ['getUserLogged'])
  },

  methods: {
    ...mapActions('store_auth', ['addUserProfileFB', 'updateProfileLogin']),

    submitForm () {



    },


    onReset () {
      this.titulo = null
      this.age = null
      this.accept = false
    }
  }


}
</script>

