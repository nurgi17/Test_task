<template>
  <div id="q-app">
    <div v-if="loading" class="fullscreen">
      <ac-spinner showing/>
    </div>

    <div v-else-if="errMsg" class="fullscreen column flex-center">
      <div class="q-pb-lg">
        <q-icon name="warning" size="4rem" color="negative"/>
      </div>

      <div class="text-center text-ts7 text-negative q-px-lg">
        {{ errMsg }}
      </div>
    </div>

    <router-view v-else/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      errMsg: '',
    }
  },
  methods: {
    async init () {
      this.loading = true

      try {
        await Promise.all([
          this.$store.dispatch('app/getHeaderData'),
        ])
        console.log(this.$store.state.app.headerData)
      } catch (err) {
        console.error('app init error:', err)
        this.errMsg = 'Извините, сервис временно не работает'
      }

      this.loading = false
    },
  },
  created () {
    this.init()
  },
}
</script>
