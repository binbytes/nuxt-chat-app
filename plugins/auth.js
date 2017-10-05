export default async ({ commit, store }) => {
  await store.dispatch('auth/fetch')
}
