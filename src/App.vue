<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";

export default {
  //name: 'App'
  methods: {
    ...mapActions("store", ["handleAuthStateChanged"]),
    ...mapActions("store_auth", ["onAuthStateChanged"]),
    ...mapActions("store_plataform", ["alterTipoPlataform", "setTamanhoTela"]),
  },
  mounted() {
    this.onAuthStateChanged();
    this.alterTipoPlataform();
  },
  updated() {
    this.alterTipoPlataform();
  },
};
</script>
