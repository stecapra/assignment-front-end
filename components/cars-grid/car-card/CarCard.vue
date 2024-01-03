<script setup>

import { useLabels } from '~/composables/labels';
import { useCarsStore } from '~/stores/car';
import HeartIcon from '~/components/base/icons/HeartIcon.vue';
import GasStationIcon from '~/components/base/icons/GasStationIcon.vue';
import CarIcon from '~/components/base/icons/CarIcon.vue';
import ProfileUserIcon from '~/components/base/icons/ProfileUserIcon.vue';

const labels = useLabels();
const carsStore = useCarsStore();
const props = defineProps(['car'])

function onClickFavorite() {
  const id = props.car.id;
  carsStore.toggleCarFavorite(id);
  console.log('toggled')
}

</script>

<template>
  <div class="flex flex-col justify-between bg-white p-6 sm:w-[304px] shadow-lg ">
    <!-- Header -->
    <div class="flex justify-between w-full">
      <div class="flex flex-col">
        <span class="text-secondary-500 font-bold text-xl leading-30 tracking-wide">{{ props.car.name }}</span>
        <span class="text-secondary-300 font-bold text-sm leading-21 tracking-tighter">{{ props.car.type }}</span>
      </div>
      <button class="rounded-full" @click="onClickFavorite">
        <heart-icon :color="props.car.favorite ? 'red' : null"/>
      </button>
    </div>

    <!-- Content -->
    <div class="flex flex-col mt-[50px] mb-6">
      <div class="mb-[50px] w-56 mx-auto">
        <img :src="props.car.img">
      </div>
      <div class="flex">
        <div class="flex flex-auto items-center justify-start">
          <gas-station-icon />
          <span class="pl-1.5 text-secondary-300 font-medium text-sm leading-21 tracking-tighter">{{ props.car.gasolineLiter }}L</span>
        </div>
        <div class="flex flex-auto items-center justify-center">
          <car-icon />
          <span class="pl-1.5 text-secondary-300 font-medium text-sm leading-21 tracking-tighter">{{ props.car.kindOfTransition }} </span>
        </div>
        <div class="flex flex-auto items-center justify-end">
          <profile-user-icon />
          <span class="pl-1.5 text-secondary-300 font-medium text-sm leading-21 tracking-tighter">{{ props.car.people }} {{ labels.standard.People }}</span>
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
