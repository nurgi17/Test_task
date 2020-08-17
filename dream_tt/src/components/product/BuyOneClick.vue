<template>
  <div class="q-py-xs q-px-md bs4 br4px">
    <div class="row items-center justify-between q-gutter-x-xs">
      <q-input type="tel"
               dense
               borderless
               v-model="phoneNumber"
               prefix="+7"
               mask="(###) ### ## ##"
               fill-mask="#"
               unmasked-value
               class="col-auto"
               style="width: 152px"/>

      <q-btn flat dense label="Купить в 1 клик" no-caps color="primary" class="text-bold" :ripple="false"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      phoneNumber: '',
    }
  },
}
</script>
