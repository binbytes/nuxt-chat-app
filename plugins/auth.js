export default async ({ commit, store }) => {
  console.log('auth plugin')
  await store.dispatch('auth/fetch')
}
