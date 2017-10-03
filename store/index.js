export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  }
}

export const getters = {
  loggedIn: function (state) {
    return state.authUser !== null
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit, dispatch }, { req }) {
    if (req.session && req.session.authUser) {
      dispatch('fetchUsers')
      commit('SET_USER', req.session.authUser)
    }
  },

  async login ({ commit }, { username, password }) {
    try {
      const { data } = await this.$axios.post('login', { username, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    await this.$axios.post('logout')
    commit('SET_USER', null)
  }
}
