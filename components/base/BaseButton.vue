<script setup lang="ts">

const props = defineProps(['title', 'link'])
const emit = defineEmits(['clicked'])
</script>

<template>
  <div @click="emit('clicked')">
    <button v-if="!link" data-test="title" class="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
      {{ title }}
    </button>
    <span v-else data-test="title-link" class="cursor-pointer text-primary-500 text-center font-semibold text-base leading-normal">{{ title }}</span>
  </div>
</template>

<style scoped>

</style>
