import { axios } from 'boot/axios'

export function getHeaderData ({ commit }) {
  return axios.get('header/index.php').then(resp => {
    commit('setHeaderData', resp.data)
  })
}
