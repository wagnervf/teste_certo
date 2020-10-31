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

    telaXL () {
      return this.$q.screen.xl
    },
    telaLG () {
      return this.$q.screen.lg
    },

    telaMD () {
      return this.$q.screen.md
    },

    telaSM () {
      return this.$q.screen.sm
    },
    telaXS () {
      return this.$q.screen.xs
    },

    userLogado () {
      return this.getUserLogged
    },

    nomeUserLogado () {
      return this.getUserLogged.name
    },
    emailUserLogado () {
      return this.getUserLogged.email
    },
    fotoUserLogado () {
      return this.getUserLogged.photoUrl
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