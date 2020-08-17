<template>
  <div class="fit relative-position">
    <div class="fit" ref="map_container"/>

    <ac-spinner :showing="loading"/>
  </div>
</template>

<script>
import _ from 'lodash'

const defaultZoom = 14
const defaultLon = 71.41868989322256
const defaultLat = 51.09662699437465

export default {
  props: {
    lon: { type: Number },
    lat: { type: Number },
    placeMarks: { type: Array, default: () => [] },
  },
  data () {
    return {
      loading: true,
      map: null,
      selfDestroyed: false,
    }
  },
  watch: {
    placeMarks: 'refreshPlaceMarks',
  },
  methods: {
    async getBounds () {
      if (this.placeMarks.length < 2) return null
      return [
        [_.minBy(this.placeMarks, 'lat').lat - 0.01, _.minBy(this.placeMarks, 'lon').lon - 0.01],
        [_.maxBy(this.placeMarks, 'lat').lat + 0.01, _.maxBy(this.placeMarks, 'lon').lon + 0.01],
      ]
    },
    async getCenter () {
      if (this.placeMarks.length > 0) {
        return [this.placeMarks[0].lat, this.placeMarks[0].lon]
      }
      if (this.lon && this.lat) {
        return [this.lat, this.lon]
      }
      return this.$geolocation.get().then(pos => {
        return pos ? [pos.lat, pos.lon] : [defaultLat, defaultLon]
      })
    },
    refreshPlaceMarks () {
      if (this.selfDestroyed) return
      if (!this.map) return
      this.map.geoObjects.removeAll()
      if (this.placeMarks.length) {
        _.each(this.placeMarks, pm => {
          this.map.geoObjects.add(new ymaps.Placemark([pm.lat, pm.lon]))
        })
        this.map.setBounds(this.map.geoObjects.getBounds())
      }
    },
  },
  mounted () {
    this.loading = true
    Promise.all([
      this.getBounds(),
      this.getCenter(),
    ]).then(resp => {
      if (this.selfDestroyed) return
      return new Promise(resolve => {
        ymaps.ready(() => {
          if (this.selfDestroyed) return
          this.map = new ymaps.Map(this.$refs.map_container, _.omitBy({
            center: resp[1],
            zoom: defaultZoom,
            controls: ['zoomControl', 'geolocationControl'],
          }, _.isNil), {
            zoomControlPosition: { top: 7, right: 7 },
          })
          this.refreshPlaceMarks()
          resolve()
        })
      })
    }).catch(() => {}).then(() => {
      this.loading = false
    })
  },
  beforeDestroy () {
    this.selfDestroyed = true
  },
}
</script>
