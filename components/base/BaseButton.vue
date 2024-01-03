<script setup lang="ts">

const props = defineProps(['title', 'link'])
</script>

<template>
  <div>
    <button v-if="!link" class="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
      {{ title }}
    </button>
    <span v-else class="cursor-pointer text-primary-500 text-center font-semibold text-base leading-normal">{{ title }}</span>
  </div>
</template>

<style scoped>

</style>
