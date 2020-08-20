<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card
      class="full-width"
      style="max-width: 400px"
    >
      <q-tabs
        v-model="tabPage"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab
          name="login"
          label="Acessar"
          class="q-pa-sm q-pa-xs "
        />
        <q-tab
          name="register"
          label="Cadastra-se"
          class="q-pa-sm q-pa-xs"
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels
        v-model="tabPage"
        animated
        class="full-width"
      >
        <q-tab-panel name="login">
          <login-register :tab="tabPage" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <login-register :tab="tabPage" />
        </q-tab-panel>

      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Auth',
  components: {
    'login-register': require('components/LoginRegister.vue').default
  },
  data () {
    return {
      tabPage: 'login'
    }
  }
}
</script>
