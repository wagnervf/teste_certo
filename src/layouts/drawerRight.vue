<template>
  <div>

    <q-btn
      flat
      @click="drawerRight = !drawerRight"
      round
      dense
      icon="filter_alt"
    />
    <q-drawer
      side="right"
      v-model="drawerRight"
      bordered
      :breakpoint="500"
      :width="200"
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          Drawer Right
        </div>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>



<script>
export default {

  data () {
    return {
      text: '',

      drawerRight: false
    }
  }
}
</script>

<style>
</style>