import _axios from 'axios'
import { cns } from './cns'

const RTO = 20000

let routerLink = null
let storeLink = null

// AXIOS
const axios = _axios.create({
  baseURL: cns.ApiUrl,
  responseType: 'json',
  timeout: RTO,
})

export default ({ Vue, store, router }) => {
  routerLink = router
  storeLink = store
  Vue.prototype.$axios = axios
}

export { axios }
