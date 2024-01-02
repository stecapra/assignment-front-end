<script setup>

import { useLabels } from '~/composables/labels';

const labels = useLabels();
const props = defineProps(['car'])

</script>

<template>
  <div class="flex flex-col justify-between bg-white p-6 sm:w-[304px] shadow-lg ">
    <!-- Header -->
    <div class="flex justify-between w-full">
      <div class="flex flex-col">
        <span class="text-secondary-500 font-bold text-xl leading-30 tracking-wide">{{ props.car.name }}</span>
        <span class="text-secondary-300 font-bold text-sm leading-21 tracking-tighter">{{ props.car.type }}</span>
      </div>
      <div>
        <img src="../../../assets/svg/heart.svg">
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col mt-[50px] mb-6">
      <div class="mb-[50px] w-56 mx-auto">
        <img :src="props.car.img">
      </div>
      <div class="flex">
        <div class="flex flex-auto items-center justify-start">
          <img class="pr-1.5" src="../../../assets/svg/gas-station.svg">
          <span class="text-secondary-300 font-medium text-sm leading-21 tracking-tighter">{{ props.car.gasolineLiter }}L</span>
        </div>
        <div class="flex flex-auto items-center justify-center">
          <img class="pr-1.5" src="../../../assets/svg/car.svg">
          <span class="text-secondary-300 font-medium text-sm leading-21 tracking-tighter">{{ props.car.kindOfTransition }} </span>
        </div>
        <div class="flex flex-auto items-center justify-end">
          <img class="pr-1.5" src="../../../assets/svg/profile-2user.svg">
          <span class="text-secondary-300 font-medium text-sm leading-21 tracking-tighter">{{ props.car.people }} {{ labels.standard.People }}</span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between w-full">
      <span class="text-secondary-500 font-bold text-xl leading-normal">
        ${{ props.car.pricePerDay }}/
        <span class="text-secondary-300 font-bold text-sm leading-normal">{{ labels.standard.day }}</span>
      </span>
      <BaseButton />
    </div>
  </div>
</template>

<style scoped>

</style>
