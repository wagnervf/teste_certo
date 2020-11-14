<template>
  <div>
    <q-btn
      flat
      dense
      icon="menu"
      role="button"
      title="Menu"
      class="btnPadrao"
    >
      <q-menu
        fit
        class="q-pa-sm"
      >
        <div class="gucci1 q-pa-md text-center">

          <div v-if="userEstaLogado">
            <span class="text-h6">Olá, {{nomeUserLogado}}</span> <br>
            <span class="text-caption">Minha Conta</span>
          </div>

          <div v-if="!userEstaLogado">

            <span class="text-h6">Olá, João</span> <br>
            <span class="text-caption">Minha Conta</span>
            <q-item-section
              avatar
              class="items-center"
            >
              <q-icon name="account_box" />
            </q-item-section>
          </div>

        </div>

        <q-separator />
        <q-list class="q-ma-md textLinkMenu">

          <q-item
            clickable
            v-ripple
            active-class="game6"
            tabindex="0"
          >
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section>Ver Todos Anúncios</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            tabindex="0"
          >
            <q-item-section avatar>
              <q-icon name="monetization_on" />
            </q-item-section>
            <q-item-section>Anunciar</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            tabindex="0"
          >
            <q-item-section avatar>
              <q-icon name="build" />
            </q-item-section>
            <q-item-section>Sobre</q-item-section>
          </q-item>
          <q-separator />

          <q-item
            clickable
            v-ripple
            tabindex="0"
          >
            <q-item-section avatar>
              <q-icon name="login" />
            </q-item-section>
            <q-item-section>Login</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<style scoped>
.q-item {
  min-width: 200px;
  padding: 0px;
}

.q-item:focus,
.q-item:hover {
  border-bottom: 1px solid #bb2158;
}
</style>

<script>
import mixinUtils from 'src/mixins/mixin-utils'
export default {
  mixins: [mixinUtils],
  components: {

  },

  data () {
    return {
      text: '',
      drawer: false
    }
  }
}
</script>