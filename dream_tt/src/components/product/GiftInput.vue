<template>
  <div class="bs2 br4px q-py-sm q-px-lg cursor-pointer">
    <div class="row items-center q-gutter-x-lg">
      <ac-icon-gift style="width: 36px; height: 40px"/>

      <div>
        <div class="text-ts3 text-bold text-color1">
          Выбрать подарок
        </div>

        <div class="text-ts2 text-color3">
          Выберите один из 3 подарков
        </div>
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
