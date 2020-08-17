<template>
  <q-header class="bg-transparent">
    <q-toolbar class="q-px-none bg-color6 text-color1">
      <ac-page-cont>
        <div class="row no-wrap items-center q-gutter-x-lg text-no-wrap">
          <div class="text-ts3 q-py-xs cursor-pointer hover-color-primary">
            О компании
          </div>

          <div class="text-ts3 q-py-xs cursor-pointer hover-color-primary">
            Доставка
          </div>

          <div class="text-ts3 q-py-xs cursor-pointer hover-color-primary">
            Оплата
          </div>

          <div class="text-ts3 q-py-xs cursor-pointer hover-color-primary">
            Гарантии, обмен и возврат
          </div>

          <div class="text-ts3 q-py-xs cursor-pointer hover-color-primary">
            Адреса магазинов
          </div>

          <div class="text-ts3 q-py-xs cursor-pointer hover-color-primary">
            <div class="row no-wrap items-center q-gutter-x-sm">
              <ac-icon-tenge class="col-auto"/>

              <div>
                Бонусы
              </div>
            </div>
          </div>

          <q-space/>

          <div class="text-ts3 text-primary q-py-xs cursor-pointer non-selectable">
            <div class="row no-wrap items-center">
              <q-icon name="place" color="primary" size="1.3rem"/>

              <div class="q-pl-xs">
                Нур-Султан(Астана)
              </div>

              <q-icon name="arrow_drop_down" color="color3" size="1rem"/>
            </div>

            <q-menu content-class="no-border-radius" auto-close>
              <div class="text-ts1 text-color1 bg-color6 q-py-md q-px-lg">
                Выберите Ваш город
              </div>

              <div class="q-py-md q-px-lg">
                <div class="row no-wrap q-gutter-x-xl text-no-wrap">
                  <div>
                    <div v-for="city in citiesPart1" :key="`city-${city.ID}`">
                      <div class="text-ts3 text-color3 q-py-xs cursor-pointer hover-color-primary non-selectable">
                        {{ city.NAME }}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div v-for="city in citiesPart2" :key="`city-${city.ID}`">
                      <div class="text-ts3 text-color3 q-py-xs cursor-pointer hover-color-primary non-selectable">
                        {{ city.NAME }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </q-menu>
          </div>

          <div class="text-ts3 q-py-xs cursor-pointer non-selectable">
            <div class="row no-wrap items-center">
              <q-icon name="person" size="1.3rem"/>

              <div class="q-pl-xs">
                Личный кабинет
              </div>
            </div>
          </div>
        </div>
      </ac-page-cont>
    </q-toolbar>
  </q-header>
</template>

<script>
import _ from 'lodash'

export default {
  props: {},
  computed: {
    cities () {
      return this.$store.getters['app/cities']
    },
    citiesPart1 () {
      if (this.cities.length < 8) {
        return this.cities
      }
      return this.cities.slice(0, Math.ceil(this.cities.length / 2))
    },
    citiesPart2 () {
      return _.reject(this.cities, x => _.includes(this.citiesPart1, x))
    },
    phones () {
      return this.$store.getters['app/phones']
    },
  },
  methods: {},
}
</script>
