export default async (ctx) => {
  await ctx.store.dispatch('getDatas', ctx)
}
