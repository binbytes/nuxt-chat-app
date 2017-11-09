import Vue from 'vue'
import socket from '~/plugins/socket.io'

export const state = () => ({
  users: {},
  conversations: {},
  currentConversationId: null,
  recipientUserID: null,
  fetched: false
})

export const getters = {
  currentConversation (state) {
    return state.currentConversationId ? state.conversations[state.currentConversationId] : null
  },
  recipientUser (state) {
    return state.users ? state.users[state.recipientUserID] : null
  }
}

export const mutations = {
  SET_FETCHED (state) {
    state.fetched = true
  },
  SET_USERS (state, users) {
    if (!users) return

    users.forEach(user => {
      createUser(state, user)
    })
  },
  SET_ONLINE_USERS (state, ids) {
    ids.forEach(id => {
      if (id && state.users[id]) {
        Vue.set(state.users[id], 'online', true)
      }
    })
  },
  SET_USER_OFFLINE (state, id) {
    Vue.set(state.users[id], 'online', false)
  },
  SET_CONVERSATIONS (state, conversations) {
    if (!conversations) return

    conversations.forEach(conversation => {
      createConversation(state, conversation)
    })
  },
  ADD_CONVERSATION (state, conversation) {
    createConversation(state, conversation)
  },
  SWITCH_CONVERSATION (state, id) {
    state.currentConversationId = id
  },
  SET_RECIPIENT_USER_ID (state, id) {
    state.recipientUserID = id
  },
  SET_MESSAGES (state, payload) {
    const conversation = state.conversations[payload.conversationId]

    Vue.set(conversation, 'messages', payload.messages)
    Vue.set(conversation, 'fetched', true)
  },
  PUSH_MESSAGE (state, message) {
    state.conversations[message.conversationId].messages.push(message)
  }
}

export const actions = {
  async fetchUsers ({ state, commit }, endpoint = '/users') {
    const users = await this.$axios.$get(endpoint)
    commit('SET_USERS', users)
  },

  async fetchConversations ({ state, commit }, endpoint = '/conversations') {
    const conversations = await this.$axios.$get(endpoint)
    commit('SET_CONVERSATIONS', conversations)
  },

  actionAfterLoggedin ({ state, dispatch, commit }) {
    if (state.fetched === false) {
      // state.fetched = true
      commit('SET_FETCHED')
      dispatch('fetchUsers')
      dispatch('fetchConversations')
    }
  },

  async switchConversation ({ state, commit }, recipientUserID) {
    let conversationId = Object.keys(state.conversations).find(id => state.conversations[id].participants.includes(recipientUserID))

    if (conversationId) {
      // Fetch messages if not already fetched
      commit('SWITCH_CONVERSATION', conversationId)

      let conversation = state.conversations[conversationId]

      // Check if messages is fetched already
      if (conversation.fetched === false) {
        const { data } = await this.$axios.get(`conversation\\${conversationId}`)

        commit('SET_MESSAGES', {
          conversationId: conversationId,
          messages: data
        })
      }
    } else {
      // create new conversation
      let conversation = await this.$axios.post('conversation', {
        recipient: recipientUserID
      })

      commit('ADD_CONVERSATION', conversation)
      commit('SWITCH_CONVERSATION', conversation._id)
    }

    commit('SET_RECIPIENT_USER_ID', recipientUserID)
  },

  pushMessage ({ commit }, message) {
    commit('PUSH_MESSAGE', message)
  },

  async sendMessage ({ state, dispatch }, message, endpoint = `send-message/${state.currentConversationId}`) {
    const { data } = await this.$axios.post(endpoint, {
      body: message
    })

    if (data) {
      await dispatch('pushMessage', data)
      socket.emit('send-message', data)
    }
  },

  setOnlineUsers ({ commit }, ids) {
    commit('SET_ONLINE_USERS', ids)
  },

  setOnline ({ commit }, id) {
    commit('SET_ONLINE_USERS', [id])
  },

  setOffline ({ commit }, id) {
    commit('SET_USER_OFFLINE', id)
  }
}

const createConversation = (state, conversation) => {
  conversation.messages = []
  conversation.isRead = true
  conversation.fetched = false

  Vue.set(state.conversations, conversation._id, conversation)

  if (socket) {
    socket.emit('enter-conversation', conversation._id)
  }
}

const createUser = (state, user) => {
  user.online = false

  Vue.set(state.users, user.id, user)
}
