<template>
  <div>
    <div class="text-ts7 text-bold text-color2">
      Наличие в магазинах
    </div>

    <div class="q-pt-md q-pr-md">
      <div v-for="(addr, addrI) in addresses" :key="`addr-${addrI}`"
           class="row items-center justify-between q-gutter-x-xs"
           :class="{'q-pt-sm': addrI}">
        <div class="text-ts3 text-color3">
          {{ addr.address }}
        </div>

        <div style="width: 36px">
          <q-linear-progress :value="addr.cnt/100" size="6px" color="primary"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addresses: { type: Array, default: () => [] },
  },
}
</script>
