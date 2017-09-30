// If user token already there in users storage intialize that data at first place
export default ({ app, store }) => {
  return store.dispatch('fetch')
}
