<template>
  <div v-if="data.length" class="full-width">
    <q-carousel v-model="selectedI"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                infinite
                :padding="false"
                :height="height"
                class="full-width q-ma-none bs1">
      <q-carousel-slide v-for="(item, itemI) in data" :key="`item-${itemI}`" :name="itemI" class="q-pa-none">
        <q-img :src="item" contain spinner-size="1.4rem" spinner-color="primary" class="fit"/>
      </q-carousel-slide>
    </q-carousel>

    <div v-if="data.length > 1" class="full-width q-pt-sm">
      <div class="full-width bg-grey-3 relative-position" style="height: 4px; border-radius: 2px">
        <div class="bg-grey-7 absolute-top-left" style="height: 4px; border-radius: 2px" :style="stepperStyle"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: { type: Array, default: () => [] },
      height: { default: '400px' },
    },
    data () {
      return {
        selectedI: 0,
      }
    },
    computed: {
      stepperStyle () {
        if (!this.data.length) return undefined
        let ss = 100 / this.data.length
        return {
          width: ss + '%',
          left: (ss * this.selectedI) + '%',
        }
      },
    },
  }
</script>
