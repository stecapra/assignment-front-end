<script setup lang="ts">

import type { ICar } from '~/models/Car.interfaces';
import { useLabels } from '~/composables/labels';
import BaseInfoCard from '~/components/base/BaseInfoCard.vue';

const labels = useLabels();
const props = defineProps(['car'])
const car = props.car as ICar;
const images = [car.img, ...car.images?.map(i => i.url) ?? []];
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:space-x-6">
    <div class="flex flex-col flex-1 basis-1/3">
      <base-pattern-card :background-pattern="1">
        <base-info-card :title="'Sports car with the best design and acceleration'"
                   :subtitle="'Safety and comfort while driving a futuristic and elegant sports car'">
          <img class="h-full mx-auto" :src="car.img" alt="car image">
        </base-info-card>
      </base-pattern-card>
      <div class="grid grid-cols-3 gap-2 mt-[26px]">
        <div v-for="(img, index) in images" :class="`overflow-hidden rounded-lg ${index === 1 ? 'border border-primary-500 p2' : ''}`">
          <base-pattern-card v-if="index === 0" :background-pattern="1">
            <img class="w-full h-full" :src="img">
          </base-pattern-card>
          <img v-else class="w-full h-full" :src="img">
        </div>
      </div>
    </div>
    <div class="bg-white rounded-lg flex flex-1 basis-2/3 flex-col justify-between p-6">
      <div class="flex flex-col">
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
      </div>

      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.img-selected {
  border: 1px solid blue;

}
</style>
