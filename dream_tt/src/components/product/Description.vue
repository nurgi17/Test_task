<template>
  <div>
    <q-list>
      <q-expansion-item dense>
        <template #header>
          <div class="self-center text-ts1 text-bold text-color1">
            Описание
          </div>

          <q-space/>
        </template>

        <div v-html="value" class="q-pt-md"/>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' },
  },
}
</script>
