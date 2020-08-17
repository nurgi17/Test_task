<template>
  <div v-if="data">
    <div class="panel1 bg-white q-pa-md">
      <!--name/dt/city-->
      <div>
        <span class="text-ts3 text-bold text-color2">
          {{ data.usr_name }}
        </span>

        &nbsp;

        <span class="text-ts2 text-color4">
          {{ data.dt }}, {{ data.city }}
        </span>
      </div>

      <!--rate/use_period-->
      <div class="row items-center q-gutter-x-sm q-pt-sm">
        <q-rating :value="data.rate" readonly size=".8rem" icon="star"
                  color="grey-4" color-selected="color7" class="no-shadow vertical-middle"/>

        <div class="text-ts2 text-color2">
          {{ data.use_period }}
        </div>
      </div>

      <!--note-->
      <div class="text-ts4 text-color1 q-pt-md">
        {{ data.note }}
      </div>

      <!--positive-->
      <div class="text-ts4 q-pt-md">
        <div class="text-bold text-color12 q-pb-xs">
          Достоинства
        </div>

        <div class="text-color1">
          {{ data.positive_aspects }}
        </div>
      </div>

      <!--negative-->
      <div class="text-ts4 q-pt-md">
        <div class="text-bold text-color13 q-pb-xs">
          Недостатки
        </div>

        <div class="text-color1">
          {{ data.negative_aspects }}
        </div>
      </div>

      <!--like/dislike-->
      <div class="q-pt-md">
        <div class="row items-center q-gutter-x-sm">
          <div class="text-ts3 text-color4">
            Отзыв полезен?
          </div>

          <div>
            <div class="q-py-xs q-px-sm">
              <div class="row items-center q-gutter-x-sm text-color12">
                <q-icon name="thumb_up" size="1.2rem"/>

                <div v-if="data.like_count">
                  {{ data.like_count }}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="q-py-xs q-px-sm">
              <div class="row items-center q-gutter-x-sm text-color13">
                <q-icon name="thumb_down" size="1.2rem"/>

                <div v-if="data.dislike_count">
                  {{ data.dislike_count }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--actions-->
      <div class="q-pt-sm">
        <div class="row items-center q-gutter-x-md">
          <div>
            <q-btn flat dense label="Ответить" no-caps color="primary" :ripple="false"/>
          </div>

          <div v-if="hasReply">
            <q-btn flat dense no-caps color="primary" :ripple="false" @click="repliesExpanded = !repliesExpanded">
              <div class="row items-center q-gutter-x-xs">
                <div>
                  {{ data.replies.length }}
                </div>

                <div v-if="data.replies.length">
                  ответ
                </div>

                <q-icon :name="repliesExpanded ? 'arrow_drop_down' : 'arrow_drop_up'" color="color2" size=".9rem"/>
              </div>
            </q-btn>
          </div>
        </div>
      </div>
    </div>

    <div v-if="hasReply && repliesExpanded" class="q-pt-md q-pl-md">
      <div class="column items-stretch q-gutter-y-md">
        <div v-for="item in data.replies" :key="`item-${item.id}`">
          <div class="br4px bg-color6 q-pa-md">
            <!--name/dt/city-->
            <div class="text-ts3 text-bold text-color2">
              <span>
                {{ item.usr_name }}
              </span>

              <span v-if="item.is_stuff" class="text-ts2 text-color4">
                - сотрудник "{{ $cns.AppNameRu }}"
              </span>
            </div>

            <!--dt-->
            <div class="text-ts2 text-color4 q-pt-sm">
              {{ item.dt }}
            </div>

            <!--note-->
            <div class="text-ts4 text-color1 q-pt-md">
              {{ item.note }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object },
  },
  data () {
    return {
      repliesExpanded: false,
    }
  },
  computed: {
    hasReply () {
      return this.data.replies && this.data.replies.length
    },
  },
}
</script>
