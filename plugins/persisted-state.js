import createPersistedState from 'vuex-persistedstate'

// Fix SSR https://github.com/robinvdvleuten/vuex-persistedstate/issues/137#issuecomment-387538693
export default ({store, isHMR, app}) => {
  if (isHMR) return
  // add persisted state as a vue mounted mixin
  app.mixins = app.mixins || []
  app.mixins.push({
    mounted() {
      createPersistedState({
        paths: ['checkeds', 'score']
      })(store)
    }
  })
}
