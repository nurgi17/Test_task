<template>
  <div v-if="data.length">
    <q-list>
      <q-expansion-item dense>
        <template #header>
          <div class="self-center text-ts1 text-bold text-color1">
            Видео
          </div>

          <q-space/>
        </template>

        <div class="q-pt-md">
          <q-video :src="$u.normalizeYoutubeURL(data[selectedIndex])" style="height: 200px"/>
        </div>

        <div class="scroll-x q-pt-sm">
          <div class="row no-wrap items-start q-gutter-x-md q-py-sm">
            <div v-for="(item, itemI) in data" :key="`item-${itemI}`" class="relative-position"
                 @click="selectedIndex = itemI">
              <q-video :src="$u.normalizeYoutubeURL(item)" style="width: 120px; height: 68px"/>

              <div class="absolute-full"/>
            </div>
          </div>
        </div>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Array },
  },
  data () {
    return {
      selectedIndex: 0,
    }
  },
}
</script>
