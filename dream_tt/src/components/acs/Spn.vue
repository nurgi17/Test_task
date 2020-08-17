<template>
  <q-spinner-puff :color="color" :size="size"/>
</template>

<script>
  export default {
    props: {
      color: { type: String, default: 'primary' },
      size: { type: String, default: '2rem' },
    },
  }
</script>
