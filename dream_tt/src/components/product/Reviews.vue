<template>
  <div v-if="data.length">
    <q-list>
      <q-expansion-item dense>
        <template #header>
          <div class="self-center text-ts1 text-bold text-color1">
            Отзывы <span class="text-color4">{{ totalCount }}</span>
          </div>

          <q-space/>
        </template>

        <div class="q-pt-md">
          <!--create new button-->
          <q-btn unelevated :ripple="false"
                 label="Оставить отзыв" no-caps color="primary" text-color="white"
                 class="full-width q-py-xs"/>

          <div class="q-pt-sm"/>

          <!--sort-->
          <q-select outlined
                    emit-value
                    map-options
                    label="Показать сначала"
                    v-model="sortValue"
                    :options="sortOpts"
                    input-class="q-py-md"/>

          <div class="q-pt-md"/>

          <!--list-->
          <div class="column items-stretch q-gutter-y-md">
            <div v-for="item in data" :key="`item-${item.id}`">
              <ReviewItem :data="item"/>
            </div>
          </div>
        </div>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
import ReviewItem from 'components/product/ReviewItem'

export default {
  props: {
    data: { type: Array },
    totalCount: { type: Number, default: 0 },
  },
  components: { ReviewItem },
  data () {
    return {
      sortValue: 'new',
    }
  },
  computed: {
    sortOpts () {
      return [
        { value: 'new', label: 'Новые' },
        { value: 'old', label: 'Старые' },
        { value: 'useful', label: 'Полезные' },
        { value: 'high_rate', label: 'С высокими оценками' },
        { value: 'low_rate', label: 'С низкими оценками' },
      ]
    },
  },
}
</script>
