const gl = {
  async get () {
    // if (!Platform.is.cordova) return null

    try {
      if (navigator.geolocation) {
        return new Promise((resolve) => {
          try {
            navigator.geolocation.getCurrentPosition(position => {
              resolve({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              })
            }, err => {
              resolve(null)
            }, {
              timeout: 5000,
            })
          } catch (e) {
            resolve(null)
          }
        })
      }
    } catch (e) {
    }

    return null
  },
}

export default ({ Vue }) => {
  Vue.prototype.$geolocation = gl
}

export { gl }
