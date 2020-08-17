<template>
  <div class="row items-center q-gutter-x-xs">
    <div>
      <q-rating :value="value" readonly size=".8rem" icon="star"
                color="grey-4" color-selected="color7" class="no-shadow"/>
    </div>

    <div v-if="isTpSmall" class="text-ts2 text-color4">
      ({{ reviewCount }})
    </div>

    <div v-else class="text-ts2 text-color4">
      {{ reviewCount }} отзывов
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Number, required: true },
    reviewCount: { type: Number, default: 0 },
    tp: { type: String, default: 'normal' }, // type of style: normal, small
  },
  computed: {
    isTpSmall () {
      return this.tp === 'small'
    },
  },
}
</script>
