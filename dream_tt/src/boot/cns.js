const cns = {
  AppName: 'Mechta',
  AppNameRu: 'Мечта',
  AppUrl: 'https://mechta.kz/',
  ApiUrl: 'http://dev.mechta.kz/api/main/',
  SystemErrMsg: 'Извините, произошла системная ошибка',
}

if (process.env.API_URL) {
  cns.ApiUrl = process.env.API_URL
}

export default ({ Vue }) => {
  Vue.prototype.$cns = cns
}

export { cns }
