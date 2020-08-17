<template>
  <q-layout view="LHh Lpr lFf">
    <template v-if="$q.screen.xs">
      <HeaderSm :cabinet.sync="cabinet" :catalog.sync="catalog"/>

      <CabinetSm v-model="cabinet"/>

      <q-page-container>
        <router-view/>
      </q-page-container>

      <Footer1Sm/>

      <Footer2Sm/>
    </template>

    <template v-if="$q.screen.gt.xs">
      <HeaderLg/>
    </template>
  </q-layout>
</template>

<script>
import HeaderSm from './HeaderSm'
import CabinetSm from './CabinetSm'
import Footer1Sm from 'pages/Footer1Sm'
import Footer2Sm from 'pages/Footer2Sm'
import HeaderLg from 'pages/HeaderLg'

export default {
  components: { HeaderLg, HeaderSm, CabinetSm, Footer1Sm, Footer2Sm },
  data () {
    return {
      cabinet: false,
      catalog: false,
    }
  },
}
</script>
