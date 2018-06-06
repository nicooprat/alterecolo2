<template>
  <List :items=items :categories=categories />
</template>

<script>
  import { mapState } from 'vuex'
  import List from '~/components/List.vue'

  export default {
    name: 'Category',
    components: {
      List
    },
    computed: mapState([
      'items',
      'categories'
    ]),
  }
</script>

<style></style>
