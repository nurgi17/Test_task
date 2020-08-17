<template>
  <div>
    <div class="text-center text-ts1 text-bold text-color1 q-px-md">
      Получи доступ к <span class="text-primary">закрытому&nbsp;разделу</span> сайта
    </div>

    <div class="q-pt-md">
      <div class="text-center text-ts7 text-color3 q-px-md">
        На котором есть ну очень вкусные скидки и предложения
      </div>
    </div>

    <div class="q-pt-md">
      <q-input outlined type="email" v-model="email" label="Ваш Email"/>
    </div>

    <div class="q-pt-sm">
      <q-btn unelevated label="Получить доступ" no-caps color="primary"
             class="full-width text-ts1 q-py-xs" :ripple="false"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      email: '',
    }
  },
}
</script>
