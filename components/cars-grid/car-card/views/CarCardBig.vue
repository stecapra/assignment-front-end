<script setup lang="ts">

import type { ICar } from '~/models/Car.interfaces';
import { useLabels } from '~/composables/labels';

const labels = useLabels();
const props = defineProps(['car'])
const car = props.car as ICar;
</script>

<template>
  <div class="flex flex-col sm:flex-row">
  <div class="bg-[#000] h-8 w-[50%]">
      </div>
      <div class="bg-white rounded-lg flex flex-col p-6">
        <div class="flex">
          <span class="text-secondary-500 font-bold text-[32px] leading-150 tracking-tight mr-8">{{ car.name }}</span>
          <slot name="button-favorite"></slot>
        </div>
        <div class="flex mt-2.5">
          <base-rating :rating="2" />
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
