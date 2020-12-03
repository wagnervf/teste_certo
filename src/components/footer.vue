<template>
  <div>
    <footer class="row w-footer">
      <div class="col-3"></div>
      <div class="col-xs-12 col-sm-6 col-md-2 footers-two">

        <q-list
          separator
          class="list-w-footer"
          dense
        >
          <h3 class="font18">Menu</h3>

          <q-item
            clickable
            v-ripple
            dense
          >
            <q-item-label>Single line item</q-item-label>
          </q-item>

          <q-item
            clickable
            v-ripple
            dense
          >
            <q-item-label>Item with caption</q-item-label>
          </q-item>

          <q-item
            clickable
            v-ripple
            dense
          >
            <q-item-label>Item with caption</q-item-label>
          </q-item>

          <q-item
            clickable
            v-ripple
            dense
          >
            <q-item-label>Item with caption</q-item-label>
          </q-item>

          <q-item
            clickable
            v-ripple
            dense
          >
            <q-item-label>Item with caption</q-item-label>
          </q-item>
        </q-list>

      </div>

      <q-toolbar
        class="bg-grey-1 text-grey-8"
        style="top: 40px"
      >
        <address>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <h6>Contato</h6>
          </div>
        </address>
      </q-toolbar>

      <q-toolbar
        class="bg-grey-1 text-grey-8"
        style="top: 40px"
      >
        <q-toolbar-title class="text-caption"><span class="material-icons">
            copyright
          </span> Wagner - 2020</q-toolbar-title>
        <q-item
          clickable
          v-ripple
          v-close-popup
          aria-hidden="true"
        >
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>
          <q-item-section>Ajuda</q-item-section>
        </q-item>
      </q-toolbar>
    </footer>
  </div>
</template>



<style>
</style>