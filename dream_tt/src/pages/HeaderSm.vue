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
      <div class="col-6" @click="$emit('update:catalog', show = !show)">
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

    <q-drawer
        v-model="show"
        show-if-above
        :width="350"
        :breakpoint="700"
        elevated
        content-class="text-black"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-md" style="max-width: 340px">
            <q-list>
              <tree
                v-for="mc in menu_catalog"
                :key="mc.ID"
                :name="mc.NAME"
                :menus="mc.MENU"
                :depth="0"
              />
            </q-list>
          </div>
        </q-scroll-area>
      </q-drawer>

  </q-header>
</template>

<script>
import DPhoneSelect from 'components/DPhoneSelect'
import Tree from 'components/Tree'
export default {
  data () {
    return {
      show: this.catalog
    }
  },
  components: {
    Tree
  },
  props: {
    cabinet: { type: Boolean },
    catalog: { type: Boolean },
  },
  computed: {
    phones () {
      return this.$store.getters['app/phones']
    },
    menu_catalog () {
      return this.$store.getters['app/menu_catalog']
    }
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
