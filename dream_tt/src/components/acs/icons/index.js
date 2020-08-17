import LogoWithName from './LogoWithName'
import Catalog from './Catalog'
import Percent from './Percent'
import Gift from './Gift'
import Heart from './Heart'
import Scales from './Scales'
import CardVisa from './CardVisa'
import CardMaster from './CardMaster'
import CardMaestro from './CardMaestro'
import Tenge from './Tenge'

/* social */
import Facebook from './Facebook'
import Twitter from './Twitter'
import Vk from './Vk'
import Ok from './Ok'
import Instagram from './Instagram'
import Youtube from './Youtube'

/* bank-cards */
import BcVisa from './BcVisa'
import BcMaster from './BcMaster'
import BcMaestro from './BcMaestro'
import BcProcessing from './BcProcessing'

export function register (Vue) {
  Vue.component('ac-icon-logo_with_name', LogoWithName)
  Vue.component('ac-icon-catalog', Catalog)
  Vue.component('ac-icon-percent', Percent)
  Vue.component('ac-icon-gift', Gift)
  Vue.component('ac-icon-heart', Heart)
  Vue.component('ac-icon-scales', Scales)
  Vue.component('ac-icon-card_visa', CardVisa)
  Vue.component('ac-icon-card_master', CardMaster)
  Vue.component('ac-icon-card_maestro', CardMaestro)
  Vue.component('ac-icon-tenge', Tenge)

  /* social */
  Vue.component('ac-icon-facebook', Facebook)
  Vue.component('ac-icon-twitter', Twitter)
  Vue.component('ac-icon-vk', Vk)
  Vue.component('ac-icon-ok', Ok)
  Vue.component('ac-icon-instagram', Instagram)
  Vue.component('ac-icon-youtube', Youtube)

  /* bank-cards */
  Vue.component('ac-icon-bc_visa', BcVisa)
  Vue.component('ac-icon-bc_master', BcMaster)
  Vue.component('ac-icon-bc_maestro', BcMaestro)
  Vue.component('ac-icon-bc_processing', BcProcessing)
}
