<template>
  <div>
    <div class="text-ts7 text-bold text-color2">
      Доставка в Нур-Султан (Астана)
    </div>

    <div class="text-ts3 text-color2 q-pt-md">
      Курьером – <span class="text-green-7">Бесплатно</span>
    </div>

    <div class="text-ts2 text-color4">
      Доставим {{ dt }}
    </div>

    <div class="text-ts3 text-color2 q-pt-md">
      Самовывоз – <span class="text-green-7">Бесплатно</span>
    </div>

    <div class="text-ts2 text-color4">
      Заберите товар самостоятельно в одном из<br/>
      магазинов «{{ $cns.AppNameRu }}».
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dt: { type: String },
  },
}
</script>
