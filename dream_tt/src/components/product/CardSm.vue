<template>
  <div v-if="data" class="q-py-lg" style="min-height: auto">
    <!--name-->
    <div class="q-px-md text-ts1">
      {{ data.name }}
    </div>

    <!--rating-->
    <div class="q-px-md q-pt-sm">
      <Rating :value="data.rating" :reviewCount="data.review_count"/>
    </div>

    <!--fotos-->
    <div class="q-px-md q-pt-lg">
      <PhotoSlider :data="data.photos"/>
    </div>

    <!--gift-->
    <div class="q-px-md q-pt-lg">
      <div class="q-pt-md"/>

      <GiftInput/>
    </div>

    <!--color-->
    <div class="q-px-md q-pt-lg">
      <div class="text-ts3 text-color3 q-pb-sm">
        Цвет
      </div>

      <ColorInput v-model="selectedColor" :variants="data.colors"/>
    </div>

    <!--model-->
    <div class="q-px-md q-pt-lg">
      <div class="text-ts3 text-color3 q-pb-sm">
        Модель
      </div>

      <ModelInput v-model="selectedModel" :variants="data.models"/>
    </div>

    <!--cost-->
    <div class="q-px-md q-pt-lg">
      <Cost :value="cost" :discount="data.discount"/>
    </div>

    <!--buy buttons-->
    <div class="q-px-md q-pt-lg">
      <BuyButtons/>
    </div>

    <!--buy one click-->
    <div class="q-px-md q-pt-lg">
      <div class="q-pt-md"/>

      <BuyOneClick/>
    </div>

    <!--favourite and compare buttons-->
    <div class="q-px-md q-pt-lg">
      <div class="q-pt-md"/>

      <div class="row items-center justify-around q-gutter-x-md">
        <FavouriteButton/>

        <ToCompareButton/>
      </div>
    </div>

    <!--specs lite-->
    <div class="q-px-md q-pt-lg">
      <div class="q-pt-md"/>

      <SpecsTable :data="[{items: data.specs.sm}]"/>

      <div class="q-pt-sm">
        <q-btn flat dense label="Все характеристики" no-caps color="color11" :ripple="false" class="text-underline"/>
      </div>
    </div>

    <!--delivery-->
    <div class="q-px-md q-pt-lg">
      <div class="q-pt-md"/>

      <Delivery :dt="data.deliveryDate"/>
    </div>

    <!--payment-->
    <div class="q-px-md q-pt-lg">
      <div class="q-pt-md"/>

      <Payment/>
    </div>

    <!--availability-->
    <div class="q-px-md q-pt-lg">
      <div class="q-pt-md"/>

      <Availability :addresses="data.availabilityAddresses"/>
    </div>

    <!--description-->
    <div class="q-px-md q-pt-lg">
      <div class="q-pt-md"/>

      <Description :value="data.description"/>
    </div>

    <!--specs-->
    <div class="q-px-md q-pt-lg">
      <Specs :data="data.specs.lg"/>
    </div>

    <!--videos-->
    <div class="q-px-md q-pt-lg">
      <Videos :data="data.videos"/>
    </div>

    <!--reviews-->
    <div v-if="data.review_count" class="q-px-md q-pt-lg">
      <Reviews :data="data.reviews" :total-count="data.review_count"/>
    </div>

    <!--compare-->
    <div v-if="data.compare.products.length" class="q-px-md q-pt-lg">
      <div class="q-pt-sm"/>

      <Compare :data="data.compare"/>
    </div>

    <!--map_addresses-->
    <div class="q-px-md q-pt-lg">
      <div class="q-pt-md"/>

      <MapAddresses :data="data.locations"/>
    </div>

    <!--register-->
    <div class="q-px-md q-pt-lg">
      <div class="q-pt-md"/>

      <Register/>
    </div>

    <div class="q-px-md q-pt-lg">
      <div class="q-pt-sm"/>
      <q-separator size="2px"/>
    </div>

    <!--about-->
    <div class="q-px-md q-pt-lg">
      <div class="q-pt-sm"/>

      <About/>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import Rating from 'components/product/Rating'
import PhotoSlider from 'components/product/PhotoSliderSm'
import GiftInput from 'components/product/GiftInput'
import ColorInput from 'components/product/ColorInput'
import ModelInput from 'components/product/ModelInput'
import Cost from 'components/product/Cost'
import BuyButtons from 'components/product/BuyButtons'
import BuyOneClick from 'components/product/BuyOneClick'
import FavouriteButton from 'components/product/FavouriteButton'
import ToCompareButton from 'components/product/ToCompareButton'
import SpecsTable from 'components/product/SpecsTable'
import Delivery from 'components/product/Delivery'
import Payment from 'components/product/Payment'
import Availability from 'components/product/Availability'
import Description from 'components/product/Description'
import Specs from 'components/product/Specs'
import Videos from 'components/product/Videos'
import Reviews from 'components/product/Reviews'
import Compare from 'components/product/Compare'
import MapAddresses from 'components/product/MapAddresses'
import Register from 'components/product/Register'
import About from 'components/product/About'

export default {
  components: {
    About,
    Register,
    MapAddresses,
    Compare,
    Reviews,
    Videos,
    Specs,
    Description,
    Availability,
    Payment,
    Delivery,
    SpecsTable,
    ToCompareButton,
    FavouriteButton,
    BuyOneClick,
    BuyButtons,
    Cost,
    ModelInput,
    ColorInput,
    GiftInput,
    PhotoSlider,
    Rating,
  },
  props: {
    data: { type: Object },
  },
  data () {
    return {
      selectedColor: null,
      selectedModel: null,
    }
  },
  computed: {
    cost () {
      if (!this.data || !this.selectedModel) return null
      return (_.find(this.data.models, { id: this.selectedModel }) || {}).cost || null
    },
  },
  watch: {
    data: 'init',
  },
  methods: {
    init () {
      this.selectedColor = null
      this.selectedModel = null
      if (this.data) {
        this.selectedColor = (_.head(this.data.colors) || {}).id || null
        this.selectedModel = (_.head(this.data.models) || {}).id || null
      }
    },
  },
  created () {
    this.init()
  },
}
</script>
