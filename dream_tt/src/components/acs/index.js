import { register as iconsRegister } from './icons'
import Spn from './Spn'
import Spinner from './Spinner'
import PageCont from './PageCont'
import Map from './Map'

export function register (Vue) {
  Vue.component('ac-spn', Spn)
  Vue.component('ac-spinner', Spinner)
  Vue.component('ac-page-cont', PageCont)
  Vue.component('ac-map', Map)
  iconsRegister(Vue)
}
