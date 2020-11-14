<template>
  <div class="row ">
    <div
      class=""
      style="min-width: 300px;"
    ></div>
    <div class="col-12">
      <footer class="footerW ">
        <div class="col-3"></div>
        <div class="col-9">
          <q-toolbar class="justify-center">
            <q-list
              separator
              class="list-footerW"
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

          </q-toolbar>
        </div>

        <q-toolbar
          class="bg-grey-1 text-grey-8"
          style="top: 40px"
        >
          <span>Teste</span>
          <q-separator />
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
  </div>
</template>



<style>
</style>