<template>
  <q-drawer :value="value"
            no-swipe-open
            no-swipe-close
            side="left"
            :width="$q.screen.width"
            content-class="bg-grey-1"
            @input="$emit('input', $event)">
    <q-layout view="lHh Lpr lFf" :style="{'width': `${$q.screen.width}px`, 'height': `${$q.screen.height}px`}">
      <q-page-container class="fit">
        <q-page class="fit text-color1">
          <q-carousel v-model="view"
                      transition-prev="slide-right"
                      transition-next="slide-left"
                      animated
                      class="fit">
            <q-carousel-slide name="l1" class="q-pa-none">
              <q-list class="q-py-sm q-pl-md q-pr-md">
                <q-item dense v-for="item in l1Items" :key="`item-${item.ID}`"
                        clickable @click="onL1ItemClick(item)">
                  <q-item-section class="q-py-sm">
                    {{ item.NAME }}
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="chevron_right" size=".9rem" color="color1"/>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-carousel-slide>

            <q-carousel-slide name="l2" class="q-pa-none">
              <q-list class="q-py-sm q-pl-md q-pr-md">
                <template v-for="item in l2Items">
                  <q-item :key="`item-${item.ID}`" dense
                          tag="a" :href="item.url"
                          clickable @click="onL2ItemClick(item)">
                    <q-item-section class="text-primary q-py-sm">
                      {{ item.NAME }}
                    </q-item-section>
                  </q-item>

                  <q-item v-for="child in item.MENU" :key="`item-${item.ID}-child-${child.ID}`" dense
                          tag="a" :href="child.url"
                          clickable @click="onL2ItemClick(item)">
                    <q-item-section class="q-py-sm">
                      {{ child.NAME }}
                    </q-item-section>
                  </q-item>
                </template>
              </q-list>
            </q-carousel-slide>
          </q-carousel>
        </q-page>
      </q-page-container>

      <q-header class="bg-color5 text-color1">
        <q-toolbar>
          <q-btn v-if="isViewL1" flat dense :ripple="false" icon="close" label="Каталог товаров" no-caps
                 @click="hide"/>

          <q-btn v-if="isViewL2" flat dense :ripple="false" icon="chevron_left" label="Назад" no-caps
                 @click="view = 'l1'"/>
        </q-toolbar>
      </q-header>
    </q-layout>
  </q-drawer>
</template>

<script>

export default {
  props: {
    value: { type: Boolean },
  },
  data () {
    return {
      view: 'l1',
      selectedL1Item: null,
    }
  },
  computed: {
    isViewL1 () {
      return this.view === 'l1'
    },
    isViewL2 () {
      return this.view === 'l2'
    },
    l1Items () {
      return this.$store.getters['app/menuCatalog']
    },
    l2Items () {
      return (this.selectedL1Item || {}).MENU || []
    },
  },
  watch: {
    value (v) {
      if (!v) {
        this.view = 'l1'
      }
    },
  },
  methods: {
    hide () {
      this.$emit('input', false)
    },
    onL1ItemClick (item) {
      this.selectedL1Item = item
      this.view = 'l2'
    },
    onL2ItemClick (item) {
      this.hide()
    },
  },
  // created () {
  //   console.log(this.$store.getters['app/menuCatalog'])
  // },
}
</script>
