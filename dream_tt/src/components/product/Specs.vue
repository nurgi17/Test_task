<template>
  <div>
    <q-list>
      <q-expansion-item dense>
        <template #header>
          <div class="self-center text-ts1 text-bold text-color1">
            Характеристики
          </div>

          <q-space/>
        </template>

        <div class="q-pt-md">
          <SpecsTable :data="data"/>
        </div>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
import SpecsTable from './SpecsTable'

export default {
  props: {
    data: { type: Array },
  },
  components: { SpecsTable },
}
</script>
