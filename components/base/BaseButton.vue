<script setup lang="ts">

const props = defineProps(['title'])
</script>

<template>
  <div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {{ title }}
    </button>
  </div>
</template>

<style scoped>

</style>
