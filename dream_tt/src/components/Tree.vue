<template>
  <q-expansion-item :label="name" :style="padding" expand-separator active-class>
    <tree 
      v-for="menu in menus" 
      :key="menu.ID"
      :menus="menu.MENU" 
      :name="menu.NAME"
      :depth="depth + 1"
    >
    </tree>
  </q-expansion-item>
</template>

<script>
  export default {
    props: ['name', 'menus', 'depth'],
    name: 'Tree',
    computed: {
      padding () {
        return { transform: `translate(${this.depth * 5}px)` }
      }
    }
  }
</script>
