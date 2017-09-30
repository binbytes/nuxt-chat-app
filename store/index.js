import Vuex from 'vuex'
import Cookie from 'cookie'
import Cookies from 'js-cookie'

const authStore = () => {
  return new Vuex.Store({
    state: () => ({
      token: null,
      user: null
    }),

    getters: {
      loggedIn(state) {
        return Boolean(state.user || state.token)
      }
    },

    mutations: {
      // SET_USER
      SET_USER(state, user) {
        state.user = user
      },

      // SET_TOKEN
      SET_TOKEN(state, token) {
        state.token = token
      }
    },

    actions: {
      updateToken({ commit }, token) {
        // Update state
        commit('SET_TOKEN', token)

        // Update localStorage
        if (process.browser && localStorage) {
          if (token) {
            localStorage.setItem('nuxt::auth::token', token)
          } else {
            localStorage.removeItem('nuxt::auth::token')
          }
        }

        // Update cookies
        if (process.browser) {
          // ...Browser
          if (token) {
            Cookies.set('token', token)
          } else {
            Cookies.remove('token')
          }
        } else {
          // ...Server
          // TODO: Use set-cookie header for this.$ctx.res
        }
      },

      fetchToken({ dispatch }) {
        let token

        // First try localStorage
        if (process.browser && localStorage) {
          token = localStorage.getItem('nuxt::auth::token')
        }

        // Then try to extract token from cookies
        if (!token) {
          const cookieStr = process.browser ? document.cookie : this.$ctx.req.headers.cookie
          const cookies = Cookie.parse(cookieStr || '') || {}
          token = cookies.token
        }

        if (token) {
          dispatch('updateToken', token)
        }
      },

      async invalidate({ dispatch, commit }) {
        commit('SET_USER', null)
        await dispatch('updateToken', null)
      },

      async fetch({ state, commit, dispatch }) {
        // Fetch and update latest token
        await dispatch('fetchToken')

        // Not loggedIn
        if (!state.token) {
          return
        }

        // Try to get user profile
        try {
          const userData = {
            'id': 121,
            'username': 'binbytes',
            'name': 'binbytes technolabs'
          }
          commit('SET_USER', userData)
        } catch (e) {
          return dispatch('invalidate')
        }
      },

      // Login
      async login({ dispatch }) {
        // set testing token
        await dispatch('updateToken', 'test_token')

        // Fetch authenticated user
        await dispatch('fetch')
      },

      // Logout
      async logout({ dispatch }) {
        // Unload user profile & token
        await dispatch('invalidate')
      }
    }
  })
}

export default authStore
