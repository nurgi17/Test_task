<template>
  <table v-if="data.length" style="border-collapse: collapse">
    <tbody>
    <template v-for="(grp, grpI) in data">
      <tr v-if="grp.name" :key="`grp-${grpI}-tr`">
        <td colspan="2">
          <div class="text-ts7 text-color3 q-pb-sm" :class="{'q-pt-md': grpI}">
            {{ grp.name }}
          </div>
        </td>
      </tr>

      <tr v-for="(item, itemI) in grp.items" :key="`grp-${grpI}-item-${itemI}`"
          :class="{'bg-color10': (itemI % 2) === 0}">
        <td style="width: 50%" class="text-ts2 text-color3 q-py-md q-pl-sm">
          {{ item.label }}
        </td>

        <td class="text-ts2 text-color2 q-py-md q-pl-md q-pr-sm">
          {{ item.value }}
        </td>
      </tr>
    </template>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: { type: Array, default: () => [] },
  },
}
</script>
