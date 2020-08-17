<template>
  <q-btn flat dense :ripple="false" no-caps>
    <ac-icon-heart class="fill-color4" style="width: 20px; height: 18px; opacity: .5"/>

    <div v-if="!isTpSmall" class="text-ts3 text-color3 q-pl-sm">
      В избранное
    </div>
  </q-btn>
</template>

<script>
export default {
  props: {
    tp: { type: String, default: 'normal' }, // type of style: normal, small
  },
  computed: {
    isTpSmall () {
      return this.tp === 'small'
    },
  },
}
</script>
