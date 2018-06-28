<template>
  <List :items=items :categories=categories />
</template>

<script>
  import config from '~/nuxt.config'
  import { mapState } from 'vuex'
  import List from '~/components/List.vue'

  export default {
    head() {
      const categorySlug = this.$store.state.route.params.category
      const allCategories = this.$store.state.categories
      const currentCategory = allCategories.find(c => c.slug == categorySlug)
      const categoryName = currentCategory && currentCategory.name
      const title = categoryName ? categoryName + ' ・ ' + config.head.title : config.head.title
      return {
        title,
        meta: [
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'twitter:title', name: 'twitter:title', content: title },
        ],
      }
    },
    components: {
      List
    },
    computed: {
      ...mapState(['items', 'categories'])
    },
  }
</script>

<style></style>
