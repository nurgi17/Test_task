<template>
  <q-page class="bg-white">
    <CardSm :data="data"/>

    <ac-spinner :showing="loading"/>
  </q-page>
</template>

<script>
  import CardSm from 'components/product/CardSm'

  export default {
    components: { CardSm },
    data () {
      return {
        loading: true,
        data: null,
      }
    },
    methods: {
      fetch () {
        this.loading = true
        this.$store.dispatch('product/get', {}).then(resp => {
          this.data = resp.data
        }, () => {}).then(() => {
          this.loading = false
        })
      },
    },
    created () {
      this.fetch()
    },
  }
</script>
