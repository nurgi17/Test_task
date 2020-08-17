<template>
  <div>
    <div class="text-ts1 text-bold text-color1">
      Магазины и сервисные центры
    </div>

    <div class="q-pt-md">
      <q-tabs dense v-model="selectedOptValue" no-caps :breakpoint="300" active-color="primary" narrow-indicator>
        <q-tab v-for="opt in opts" :key="`opt-${opt.value}`"
               align="center" :ripple="false"
               :name="opt.value" :label="opt.label"/>
      </q-tabs>
      <q-separator/>
    </div>

    <div class="q-pt-lg">
      <div class="full-width" style="height: 350px">
        <ac-map :placeMarks="placeMarks"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, default: () => ({}) },
  },
  data () {
    return {
      selectedOptValue: 'shops',
    }
  },
  computed: {
    opts () {
      return [
        { label: 'Магазины', value: 'shops' },
        { label: 'Сервис-центры', value: 'services' },
      ]
    },
    placeMarks () {
      switch (this.selectedOptValue) {
        case 'shops':
          return this.data.shops || []
        case 'services':
          return this.data.services || []
      }
      return []
    },
  },
}
</script>
