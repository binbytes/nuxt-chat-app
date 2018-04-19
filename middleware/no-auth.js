export default function ({ app, redirect }) {
  if (app.$auth.loggedIn) {
    return redirect('/')
  }
}
