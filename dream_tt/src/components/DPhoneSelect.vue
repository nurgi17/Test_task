<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card style="width: 400px; max-width: 400px">
      <q-card-section>
        <q-list separator>
          <q-item v-for="pn in phones" :key="`phone-${pn}`" tag="a" :href="`tel:${pn}`" @click="onOk">
            <q-item-section side>
              <q-icon name="phone" size="1rem"/>
            </q-item-section>

            <q-item-section>
              {{ pn }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
  export default {
    props: {
      phones: { type: Array, default: () => [] },
    },
    methods: {
      show () {
        this.$refs.dialog.show()
      },
      hide () {
        this.$refs.dialog.hide()
      },
      onDialogHide () {
        this.$emit('hide')
      },
      onOk () {
        this.$emit('ok')
        this.hide()
      },
      onCancel () {
        this.hide()
      },
    },
  }
</script>
