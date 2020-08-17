import _ from 'lodash'
import { cns } from './cns'

let _store = null
let _router = null

const util = {
  fmtPhone (v) {
    if (!v) return ''
    return v.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1 ($2) $3-$4')
  },
  fmtNum (v, ext, vIfNil) {
    if (_.isNil(v)) return vIfNil || ''
    return v.toLocaleString() + (ext || '')
  },

  normalizeYoutubeURL (v) {
    let vid = this.extractYoutubeVideoId(v)
    if (vid) {
      return `https://www.youtube.com/embed/${vid}?feature=player_embedded&controls=1` // &playsinline=1
    }
    return v
  },
  extractYoutubeVideoId (v) {
    if (v.indexOf('youtu.be') > -1) {
      let matches = v.match(/youtu.be\/[^&]+/ig)
      if (matches && matches.length > 0) {
        return matches[0].slice(9)
      }
    }
    if (v.indexOf('youtube.com') > -1) {
      let matches = v.match(/v=[^&]+/ig)
      if (matches && matches.length > 0) {
        return matches[0].slice(2)
      }
    }
    return null
  },

  resolveRouterPath (o) {
    if (process.env.NODE_ENV === 'production') {
      return cns.AppUrl + decodeURI(_router.resolve(o).href)
    }
    return location.origin + location.pathname + decodeURI(_router.resolve(o).href)
  },
}

export default ({ Vue, store, router }) => {
  _store = store
  _router = router
  Vue.prototype.$u = util
}

export { util }
