<template>
  <div>
    <div v-if="vWithoutDiscount || keepDvSpace"
         class="text-color4 text-strike"
         :class="{
           'text-ts2 q-pb-xs': isTpSmall,
           'text-ts3 q-pb-sm': !isTpSmall,
           'invisible': keepDvSpace && !vWithoutDiscount,
         }">
      {{ $u.fmtNum(vWithoutDiscount) }} ₸
    </div>

    <div class="text-bold text-color1"
         :class="isTpSmall ? 'text-ts3' : 'text-ts5'">
      {{ $u.fmtNum(v) }} ₸
    </div>
  </div>
</template>

<script>
export default {
  props: {
    discount: { type: Number, default: 0 },
    valueWithoutDiscount: { type: Number, default: 0 },
    value: { type: Number },
    tp: { type: String, default: 'normal' }, // type of style: normal, small
    keepDvSpace: { type: Boolean },
  },
  computed: {
    isTpSmall () {
      return this.tp === 'small'
    },
    vWithoutDiscount () {
      if (this.valueWithoutDiscount) {
        return this.valueWithoutDiscount
      }
      if (this.discount) {
        return this.value
      }
      return 0
    },
    v () {
      if (this.discount) {
        return this.value * ((100 - this.discount) / 100)
      }
      return this.value
    },
  },
}
</script>
