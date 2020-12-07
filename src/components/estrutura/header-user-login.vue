<template>
  <div>
    <q-btn
      flat
      dense
      icon="account_circle"
      role="button"
      title="Menu"
      class="btnPadrao"
    >
      <q-menu
        fit
        class="q-pa-sm"
      >

        <q-separator />

        <q-list class="q-ma-md textLinkMenu">
          <q-item
            clickable
            v-ripple
            active-class="game6"
            tabindex="0"
          >
            <q-item-section class="gucci1 q-pa-sm text-weight-medium">

              <div v-if="userEstaLogado">
                <q-item-section><span class="text-h6">Olá, João</span>
                  <span class="text-caption">Usuário Free</span>
                </q-item-section>
              </div>

              <div v-if="!userEstaLogado">

                <q-item
                  clickable
                  v-ripple
                  aria-hidden="true"
                  name="Entrar"
                  to="/auth"
                  exact
                  class="text-primary"
                >
                  <q-item-section avatar>
                    <q-icon name="login" />
                  </q-item-section>
                  <q-item-section>Entrar</q-item-section>
                </q-item>

              </div>

            </q-item-section>
          </q-item>
          <q-separator />
          <q-item
            clickable
            v-ripple
            active-class="game6"
            tabindex="0"
          >
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section>Minha Conta</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            tabindex="0"
          >
            <q-item-section avatar>
              <q-icon name="notifications" />
            </q-item-section>
            <q-item-section>Notificações</q-item-section>
          </q-item>

          <!-- <q-item
            clickable
            v-ripple
            tabindex="0"
          >
            <q-item-section avatar>
              <q-icon name="build" />
            </q-item-section>
            <q-item-section>Configurações</q-item-section>
          </q-item> -->

          <q-item
            clickable
            v-ripple
            v-close-popup
            aria-hidden="true"
            :to="{ name: 'administracao'}"
          >
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>Configurações</q-item-section>
          </q-item>
          <q-separator />

          <q-item
            clickable
            v-ripple
            tabindex="0"
          >
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section>Sair</q-item-section>
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