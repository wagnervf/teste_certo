<template>
  <div class="q-pa-md row items-start q-gutter-md">

    <q-card
      class="my-card"
      flat
      bordered
    >>
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />

        <q-card-actions
          vertical
          class="justify-around"
        >
          <q-card
            class="my-card"
            flat
            bordered
          >
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Title</q-item-label>
                <q-item-label caption>
                  Subhead
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-card-section horizontal>
              <q-card-section>
                {{ lorem }}
              </q-card-section>

              <q-separator vertical />

              <q-card-section class="col-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </q-card-section>
            </q-card-section>
          </q-card>
        </q-card-actions>
      </q-card-section>
    </q-card>

  </div>
</template>

    <script>
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 650px
</style>