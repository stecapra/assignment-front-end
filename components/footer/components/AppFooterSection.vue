<script setup lang="ts">

const props = defineProps(['title', 'links'])
</script>

<template>
  <div class="flex flex-col">
    <span class="text-secondary-500 font-semibold text-xl leading-30 tracking-tighter mb-6">{{ props.title }}</span>
    <div class="flex flex-col justify-around w-[152px] h-[188px]">
      <span v-for="link in props.links" class="text-gray-800 opacity-60 font-medium text-base leading-24 tracking-tighter">{{ link }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>
