// If user token already there in users storage intialize that data at first place
export default async({ app, store }) => {
  await store.dispatch('fetch')
}
