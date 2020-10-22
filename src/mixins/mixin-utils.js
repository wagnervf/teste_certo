import { mapState, mapActions } from 'vuex'
import { Screen } from 'quasar'

export default {
  computed: {
    ...mapState('store_auth', ['loggedIn']),
    ...mapState('store_plataform', ['mobile', 'desktop']),

    userEstaLogado () {
      return this.loggedIn
    },

    isMobile () {
      return this.mobile
    },
    telaWidth () {
      return this.$q.screen.width
    },

    telaHeight () {
      return this.$q.screen.height
    },

  },


  methods: {
    home () {
      this.$router.push('/').catch(err => { })
    },

    profile () {
      this.$router.push('/profile').catch(err => { })
    },


  }
}