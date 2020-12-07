<template>
  <div class="breadcrumbs-w">
    <q-breadcrumbs
      v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb.to"
      class="q-pa-none"
    >
      <q-breadcrumbs-el
        :label="breadcrumb.name"
        :to="breadcrumb.to"
        exact
        class="q-pa-none text-grey"
      />
      <q-breadcrumbs-el style="display: none" />
    </q-breadcrumbs>
  </div>
</template>

<script>
export default {
  props: {
    title: '',
    breadcrumbs: ''
  }


}
</script>

<
