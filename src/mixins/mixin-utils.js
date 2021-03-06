import { mapState, mapActions, mapGetters } from 'vuex'
import { Screen } from 'quasar'
import smoothscroll from 'smoothscroll-polyfill';

import { date } from 'quasar'
import serviceLocalizacao from "src/services/localizacao/services-consulta-localizacao";
import { notifyGenericPositive, notifyGenericNegative } from 'src/functions/functions-notify'


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


    //http://iamdustan.com/smoothscroll/
    scrollBottom () {
      window.scroll({ top: 2500, left: 0, behavior: 'smooth' })
    },

    scrollTop () {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    },

    descer (value) {
      window.scrollBy({ top: value, left: 0, behavior: 'smooth' });
    },

    subir100 () {
      window.scrollBy({ top: -100, left: 0, behavior: 'smooth' });
    },

    getLocalizacao () {
      navigator.geolocation.getCurrentPosition(position => {

        this.getEnderecoLocalizacao(position.coords.latitude, position.coords.longitude)

      }, erro => {
        console.log(erro)
        notifyGenericNegative('Localização bloqueada pelo navegador!')
      }, { timeout: 7000 })
    },

    getEnderecoLocalizacao (latitude, longitute) {
      serviceLocalizacao.BuscarLocalizacaoService(latitude, longitute).then((resposta) => {
        console.log(resposta)
      })
    }



  },

  //Inserir v-focus onde pretende deixar onfocus
  directives: {
    focus: {
      // definição da diretiva
      inserted: function (el) {
        //console.log(el.innerHTML)
        el.focus()
      }
    }
  },

  filters: {
    dataFormatada (value) {
      return date.formatDate(value, 'D/M/YYYY')
    }
  }
}