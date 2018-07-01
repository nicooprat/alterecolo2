import Airtable from 'airtable'
import slugify from 'slugify'

export const state = () => ({
  checkeds: [],
  score: 0,
  items: [],
  categories: [],
  datasLoaded: false
})

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('getDatas')
  },
  async getDatas({commit}) {
    const base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base(process.env.AIRTABLE_BASE)
    const items = []
    const categories = []
    // Fetch new items
    return new Promise((res, rej) => {
      base('Alternatives').select({
        filterByFormula: '{Validé} = 1' // Only manually validated items
      }).eachPage((datas, fetchNextPage) => {
        // Load items in component
        items.push(...datas.map((item) => {
          const newItem = {
            ...item.fields,
            id: item.id,
            slug: slugify(item.fields.Alternative, {lower: true}),
            createdTime: item._rawJson.createdTime,
            cover: item.fields.Photo && item.fields.Photo[0], // Easier access
            categories: [],
          }
          // Push item categories
          item.fields.Catégorie.forEach((category) => {
            const slug = slugify(category, {lower: true})
            const existingCategory = categories.filter((c) => c.slug === slug)[0]
            // Push normalized categories in newItem
            const cat = {
              name: category,
              count: 1,
              slug
            }
            newItem.categories.push(cat)
            // Reduce global categories
            if (!existingCategory) {
              categories.push(cat)
            } else {
              existingCategory.count = existingCategory.count + 1
            }
          })
          // Push item itself
          return newItem
        }))
        // Load all datas
        fetchNextPage()
      }, (err) => {
        if(err) {
          rej(err)
        } else {
          commit('setDatas', {items, categories})
          res({items, categories})
        }
      })
    })
  }
}

export const mutations = {
  setDatas(state, {items, categories}) {
    state.items = items
    state.categories = categories
    state.datasLoaded = true
  },
  toggleCheckItem (state, {item}) {
    // Already checked?
    const index = state.checkeds.indexOf(item.id)
    if (index === -1) {
      // Push
      state.score += item.Difficulté
      state.checkeds.push(item.id)
    } else {
      // Pull
      state.score -= item.Difficulté
      state.checkeds.splice(index, 1)
    }
  },
}
