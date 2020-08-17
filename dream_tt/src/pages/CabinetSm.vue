<template>
  <q-drawer :value="value"
            no-swipe-open
            no-swipe-close
            side="right"
            :width="$q.screen.width"
            content-class="bg-grey-1"
            @input="$emit('input', $event)">
    <q-layout view="lHh Lpr lFf" :style="{'width': `${$q.screen.width}px`, 'height': `${$q.screen.height}px`}">
      <q-page-container class="fit">
        <q-page class="fit text-color1">
        </q-page>
      </q-page-container>

      <q-header class="bg-color5 text-color1">
        <q-toolbar>
          <div class="row items-center q-gutter-x-md text-color1">
            <q-icon name="person" size="1.5rem"/>

            <div>Личный кабинет</div>
          </div>

          <q-space/>

          <q-btn flat dense round icon="close" color="color1" @click="hide"/>
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
    methods: {
      hide () {
        this.$emit('input', false)
      },
    },
  }
</script>
