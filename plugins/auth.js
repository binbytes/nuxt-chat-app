export default ({ commit, store }) => {
  store.dispatch('auth/fetch')
}
