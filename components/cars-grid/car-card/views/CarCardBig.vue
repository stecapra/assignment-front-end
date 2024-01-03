<script setup lang="ts">

import type { ICar } from '~/models/Car.interfaces';
import { useLabels } from '~/composables/labels';

const labels = useLabels();
const props = defineProps(['car'])
const car = props.car as ICar;
const images = [car.img, ...car.images?.map(i => i.url)];
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:space-x-6">
    <div class="flex flex-col flex-1">
      <div class="flex flex-col p-6 bg-[#000] h-[380px] rounded-lg">
        <span class="text-primary-0 font-semibold text-2xl leading-150 tracking-tighter mb-4">Sports car with the best<br> design and acceleration</span>
        <span class="text-primary-0 font-medium text-base leading-150 tracking-tight">Safety and comfort while driving a<br> futuristic and elegant sports car</span>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-[26px]">
        <img v-for="img in images" class="rounded-lg w-full h-full" :src="img">
      </div>
    </div>
    <div class="bg-white rounded-lg flex flex-1 flex-col p-6">
      <div class="flex">
        <span class="text-secondary-500 font-bold text-[32px] leading-150 tracking-tight mr-8">{{ car.name }}</span>
        <slot name="button-favorite"></slot>
      </div>
      <div class="flex mt-2.5">
        <base-rating :rating="4" />
        <span class="pl-2 text-secondary-400 font-medium text-sm leading-normal tracking-wide">440+ Reviewer</span>
      </div>
      <span class="my-8 text-secondary-400 font-normal text-base leading-200 tracking-tight">{{ car.description }}</span>
      <div class="mb-[108px] grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div class="flex justify-between">
          <span class="text-secondary-300 font-normal text-base leading-150 tracking-tight">{{ labels.standard['Type Car']}}</span>
          <span class="text-secondary-400 font-semibold text-base leading-150 tracking-tight">{{ car.type }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-secondary-300 font-normal text-base leading-150 tracking-tight">{{ labels.standard['Capacity']}}</span>
          <span class="text-secondary-400 font-semibold text-base leading-150 tracking-tight">{{ car.people }} {{ labels.standard.People }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-secondary-300 font-normal text-base leading-150 tracking-tight">{{ labels.standard['Gasoline']}}</span>
          <span class="text-secondary-400 font-semibold text-base leading-150 tracking-tight">{{ car.gasolineLiter }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-secondary-300 font-normal text-base leading-150 tracking-tight">{{ labels.standard['Steering']}}</span>
          <span class="text-secondary-400 font-semibold text-base leading-150 tracking-tight">{{ car.kindOfTransition }}</span>
        </div>
      </div>

      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>

</style>
