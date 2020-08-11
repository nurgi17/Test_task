import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    fetchUsers () {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:3000/api/user/', method: 'GET' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    createUser ({ commit }, user) {
      delete user.id
      delete user.items
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:3000/api/user/', data: user, method: 'POST' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    updateUser ({ commit }, user) {
      delete user.id
      delete user.items
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:3000/api/user/', data: user, method: 'PUT' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    deleteUser ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:3000/api/user/' + id, method: 'DELETE' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    deleteItem ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:3000/api/item/' + id, method: 'DELETE' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getUserById ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios({ url: 'http://localhost:3000/api/user/' + id, method: 'GET' })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
