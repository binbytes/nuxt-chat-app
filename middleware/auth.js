export default function({ store, redirect }) {
  if (!store.getters['loggedIn']) {
    return redirect('/login')
  }
}
