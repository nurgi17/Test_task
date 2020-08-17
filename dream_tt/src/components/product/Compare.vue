<template>
  <div>
    <div class="text-ts1 text-bold text-color1">
      Сравните с похожими моделями
    </div>

    <div class="q-pt-md relative-position">
      <div class="scroll-x q-pt-xs q-pb-xs" @scroll="onScroll" ref="scroll_cont">
        <div class="q-pb-sm">
          <table class="text-left" style="table-layout: fixed; border-collapse: collapse;">
            <thead>
            <tr>
              <th v-for="(p, pI) in data.products" :key="`p-${pI}`"
                  class="text-weight-regular q-pa-none vertical-top"
                  :class="{'td-border-x td-border-top': !pI}"
                  style="max-width: 180px; min-width: 180px; border-bottom: 1px solid #F7F7F7;">
                <div class="q-px-sm q-pb-sm">
                  <q-img :src="p.img" width="100%" ratio="1"/>

                  <div class="text-ts2 text-color1 q-pt-sm">
                    {{ p.name }}
                  </div>

                  <div class="q-pt-sm">
                    <Rating :value="p.rating" :review-count="p.review_count" tp="small"/>
                  </div>

                  <div class="q-pt-md">
                    <Cost :value-without-discount="p.oCost" :value="p.cost" tp="small" keepDvSpace/>
                  </div>

                  <div class="q-pt-md">
                    <div class="row items-center q-gutter-x-md">
                      <q-btn unelevated label="Купить" no-caps color="primary" class="text-ts2 text-bold"
                             :ripple="false"/>

                      <FavouriteButton tp="small"/>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
            </thead>

            <tbody>
            <template v-for="(f, fI) in data.fields">
              <tr :key="`f-${f.id}-label`">
                <td v-for="(p, pI) in data.products" :key="`p-${pI}`"
                    class="q-pa-none vertical-top"
                    :class="{'td-border-x': !pI}">
                  <div v-if="!pI" class="text-ts2 text-color3 q-px-sm q-pt-md q-pb-sm">
                    {{ f.name }}
                  </div>
                </td>
              </tr>

              <tr :key="`f-${f.id}-value`">
                <td v-for="(p, pI) in data.products" :key="`p-${pI}`"
                    class="q-pa-none vertical-top bg-color6 relative-position"
                    :class="{'td-border-x': !pI, 'td-border-bottom': !pI && (fI === (data.fields.length - 1))}">
                  <div class="text-ts2 text-color1 q-px-sm q-py-md">
                    {{ p.values[f.id] || '-' }}
                  </div>
                </td>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
      </div>

      <q-btn v-if="showRightControl"
             unelevated dense round icon="chevron_right" color="color4"
             text-color="white" size=".7rem" :ripple="false"
             class="absolute" style="right: -.7rem; top: 80px"
             @click="onRightControlClick"/>

      <q-btn v-if="showLeftControl"
             unelevated dense round icon="chevron_right" color="color4"
             text-color="white" size=".7rem" :ripple="false"
             class="absolute" style="left: -.7rem; top: 80px"
             @click="onLeftControlClick"/>
    </div>
  </div>
</template>

<script>
import { dom, scroll } from 'quasar'
import Rating from 'components/product/Rating'
import Cost from 'components/product/Cost'
import FavouriteButton from 'components/product/FavouriteButton'

export default {
  props: {
    data: { type: Object, default: () => ({}) },
  },
  components: { FavouriteButton, Cost, Rating },
  data () {
    return {
      showRightControl: false,
      showLeftControl: false,
    }
  },
  methods: {
    refreshControls () {
      let ref = this.$refs.scroll_cont
      let contWidth = dom.width(ref)
      let scrollWidth = scroll.getScrollWidth(ref)
      let currentPos = scroll.getHorizontalScrollPosition(ref)
      this.showRightControl = (scrollWidth > contWidth) && (currentPos < (scrollWidth - contWidth))
      this.showLeftControl = (scrollWidth > contWidth) && (currentPos > 0)
    },
    onScroll () {
      this.refreshControls()
    },
    onRightControlClick () {
      let ref = this.$refs.scroll_cont
      let currentPos = scroll.getHorizontalScrollPosition(ref)
      scroll.setHorizontalScrollPosition(ref, currentPos + 160, 300)
    },
    onLeftControlClick () {
      let ref = this.$refs.scroll_cont
      let currentPos = scroll.getHorizontalScrollPosition(ref)
      scroll.setHorizontalScrollPosition(ref, currentPos - 160, 300)
    },
  },
  mounted () {
    this.refreshControls()
  },
}
</script>

<style lang="scss" scoped>
.td-border-x {
  border-left: 1px solid $color14;
  border-right: 1px solid $color14;
}

.td-border-top {
  border-top: 1px solid $color14;
}

.td-border-bottom {
  border-bottom: 1px solid $color14;
}
</style>
