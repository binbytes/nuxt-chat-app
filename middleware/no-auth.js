export default function ({ store, redirect }) {
  if (store.getters['auth/loggedIn']) {
    return redirect('/')
  }
}
