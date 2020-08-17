<template>
  <div>
    <div class="row flex-center">
      <ac-icon-logo_with_name style="width: 209px; height: 32px" class="fill-primary"/>
    </div>

    <div class="text-center text-ts1 text-bold text-color1 q-pt-lg">
      Торговая сеть электроники “{{ $cns.AppNameRu }}”
    </div>

    <div class="text-center text-ts7 text-color3 q-pt-md">
      “{{ $cns.AppNameRu }}” - специализированная торговая сеть магазинов электроники и бытовой техники. Компания
      является одной из ведущих торговых сетей по продаже бытовой техники в Казахстане, в которой работает более 1500
      человек.
    </div>

    <div class="text-center text-ts7 text-color3 q-pt-md">
      <span class="text-bold text-color1">Наша миссия:</span> Вдохновленные “Мечтой”, мы раскрываем свой потенциал и
      делаем жизнь людей ярче, а быт комфортнее.
    </div>

    <div class="text-center text-ts7 text-color3 q-pt-md">
      <span class="text-bold text-color1">Наш девиз:</span> Качество во всем!
    </div>

    <div class="row flex-center q-pt-md">
      <q-btn flat dense label="Читать целиком ->" no-caps color="primary" :ripple="false"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
}
</script>
