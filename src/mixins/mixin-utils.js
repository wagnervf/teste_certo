import { mapState, mapActions, mapGetters } from 'vuex'
import { Screen } from 'quasar'

export default {
  computed: {
    ...mapState('store_auth', ['loggedIn']),
    ...mapState('store_plataform', ['mobile', 'desktop']),
    ...mapGetters('store_auth', ['getUserLogged']),
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

    telaMd () {
      return this.$q.screen.md
    },

    telaSM () {
      return this.$q.screen.md
    },

    userLogado () {
      return this.getUserLogged
    },

    nomeUserLogado () {
      return this.getUserLogged.name
    },
    emailUserLogado () {
      return this.getUserLogged.email
    }



  },

  methods: {
    ...mapActions('store_auth', ['logoutUser']),

    home () {
      this.$router.push('/').catch(err => { })
    },

    profile () {
      this.$router.push('/profile').catch(err => { })
    },




  }
}