<template>
  <div v-if="variants.length" class="row items-start q-gutter-sm">
    <div v-for="item in variants" :key="`item-${item.id}`"
         class="model-item q-py-sm q-px-md cursor-pointer"
         :class="{'active sh1': item.id === value}"
         @click="$emit('input', item.id)">
      <div class="name text-ts3">
        {{ item.name }}
      </div>

      <div class="cost text-ts2">
        {{ $u.fmtNum(item.cost) }} ₸
      </div>
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
.model-item {
  border: 1px solid $color5;
  border-radius: 4px;
  transition: box-shadow .3s, border-color .3s;

  > .name {
    color: $color9;
    transition: color .3s;
  }

  > .cost {
    color: $color4;
    transition: color .3s;
  }

  &.active {
    border-color: transparent;

    > .name {
      color: $primary;
    }

    > .cost {
      color: $primary;
    }
  }
}
</style>
