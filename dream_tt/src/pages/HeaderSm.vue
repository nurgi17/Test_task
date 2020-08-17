<template>
  <q-header class="bg-transparent">
    <q-toolbar class="bg-primary">
      <q-toolbar-title>
        <ac-icon-logo_with_name class="fill-white" style="width: 114px; height: 17px"/>
        <!--<img src="~assets/logo.svg" style="width: 114px; height: 17px"/>-->
      </q-toolbar-title>

      <q-btn flat dense round icon="search"/>

      <q-btn flat dense round icon="phone" @click="onPhoneClick"/>

      <q-btn flat dense round icon="shopping_cart"/>

      <q-btn flat dense round icon="menu" @click="$emit('update:cabinet', true)"/>
    </q-toolbar>

    <q-toolbar class="row items-stretch q-pa-none">
      <div class="col-6" @click="$emit('update:catalog', true)">
        <div class="fit row items-center justify-center q-gutter-x-sm bg-color5">
          <q-icon>
            <ac-icon-catalog style="width: 14px; height: 14px"/>
          </q-icon>

          <div class="text-color1">
            Каталог товаров
          </div>

          <q-icon name="chevron_right" color="color1"/>
        </div>
      </div>

      <div class="col-6">
        <div class="fit row items-center justify-center q-gutter-x-sm bg-color6">
          <q-icon>
            <ac-icon-percent style="width: 14px; height: 14px"/>
          </q-icon>

          <div class="text-color1">
            Акции
          </div>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import DPhoneSelect from 'components/DPhoneSelect'

export default {
  props: {
    cabinet: { type: Boolean },
    catalog: { type: Boolean },
  },
  computed: {
    phones () {
      return this.$store.getters['app/phones']
    },
  },
  methods: {
    onPhoneClick () {
      this.$q.dialog({
        component: DPhoneSelect,
        parent: this,
        phones: this.phones,
      })
    },
  },
}
</script>
