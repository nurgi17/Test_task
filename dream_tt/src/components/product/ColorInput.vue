<template>
  <div v-if="variants.length" class="row items-center justify-around q-gutter-x-md q-gutter-y-sm">
    <div v-for="item in variants" :key="`item-${item.id}`"
         class="color-item flex flex-center cursor-pointer"
         :class="{'active sh1': item.id === value}"
         @click="$emit('input', item.id)">
      <div class="circle" :style="{'background-color': item.value}"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    variants: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped>
.color-item {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  transition: box-shadow .3s;

  > .circle {
    content: '';
    display: inline-block;
    width: 26px;
    height: 26px;
    border: 1px solid $color5;
    border-radius: 50%;
  }
}
</style>
