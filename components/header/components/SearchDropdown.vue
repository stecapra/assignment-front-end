<script setup lang="ts">

import type { ICar } from '~/models/Car.interfaces';

const props = defineProps(['cars'])
const emit = defineEmits(['carSelected']);
const car = props.cars as ICar[];

</script>

<template>
  <div class="flex flex-col overflow-y-auto max-h-[300px] w-[75%] bg-white border rounded-lg mt-3">
    <div v-for="car in props.cars" @click="emit('carSelected', car)" class="flex h-16 w-full p-2 border justify-between cursor-pointer">
      <div class="flex flex-1">
        <img :src="car.img">
      </div>
      <div class="flex flex-1 flex-col">
        <span class="flex justify-end">{{ car.name }}</span>
        <span class="flex justify-end">{{ car.type }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
