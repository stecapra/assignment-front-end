<script setup lang="ts">

import ProfileUserIcon from '~/components/base/icons/ProfileUserIcon.vue';
import GasStationIcon from '~/components/base/icons/GasStationIcon.vue';
import CarIcon from '~/components/base/icons/CarIcon.vue';
import { useLabels } from '~/composables/labels';
import type { ICar } from '~/models/Car.interfaces';

const labels = useLabels();

const props = defineProps(['car'])
const car = props.car as ICar;
</script>

<template>
  <div class="flex flex-col justify-between bg-white p-6 sm:w-[304px] shadow-lg ">
    <!-- Header -->
    <div class="flex justify-between w-full">
      <div class="flex flex-col">
        <span class="text-secondary-500 font-bold text-xl leading-30 tracking-wide">{{ car.name }}</span>
        <span class="text-secondary-300 font-bold text-sm leading-21 tracking-tighter">{{ car.type }}</span>
      </div>
      <slot name="button-favorite"></slot>
    </div>

    <!-- Content -->
    <div class="flex flex-col mt-[50px] mb-6">
      <div class="mb-[50px] w-56 mx-auto relative">
        <div class="car-shadow absolute w-full h-[60%]"></div>
        <img :src="car.img">
      </div>
      <div class="flex">
        <div class="flex flex-auto items-center justify-start">
          <gas-station-icon />
          <span class="pl-1.5 text-secondary-300 font-medium text-sm leading-21 tracking-tighter">{{ car.gasolineLiter }}L</span>
        </div>
        <div class="flex flex-auto items-center justify-center">
          <car-icon />
          <span class="pl-1.5 text-secondary-300 font-medium text-sm leading-21 tracking-tighter">{{ car.kindOfTransition }} </span>
        </div>
        <div class="flex flex-auto items-center justify-end">
          <profile-user-icon />
          <span class="pl-1.5 text-secondary-300 font-medium text-sm leading-21 tracking-tighter">{{ car.people }} {{ labels.standard.People }}</span>
        </div>
      </div>
    </div>

    <slot name="footer" />
  </div>
</template>

<style scoped>
.car-shadow {
  bottom: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
}
</style>
