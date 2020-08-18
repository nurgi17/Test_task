import _ from 'lodash'

export function phones (state) {
  return state.headerData.PHONE_NUMS || []
}

export function cities (state) {
  return _.sortBy(_.values(state.headerData.CITIES), 'NAME')
}

export function menu_catalog (state) {
  return _.sortBy(_.values(state.headerData.MENU_CATALOG), 'NAME')
}
