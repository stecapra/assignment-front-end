<script setup lang="ts">

import type { ICar } from '~/models/Car.interfaces';

import CarCard from '~/components/widgets/cars-grid/car-card/CarCard.vue';
import { useLabels } from '~/composables/labels';

const labels = useLabels();
const router = useRouter();
const props = defineProps(['title', 'cars', 'showNextPage', 'collapsed']);
const emit = defineEmits(['showMore'])

function goToCarDetails(car: ICar): void {
  router.push(`/cars/${car.id}`);
}
</script>

<template>
  <div class="p-5 flex justify-between">
    <span class="text-secondary-300 font-semibold text-base leading-normal">
      {{ title }}
    </span>
    <base-button v-if="props.collapsed" :title="labels.standard['View All']" :link="true" />
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-[#f6f7f9]">
    <car-card v-for="c in cars" :car="c" :view="'small'" @click="goToCarDetails(c)"  />
  </div>
  <div v-if="props.showNextPage" class="flex p-14 justify-center">
    <base-button :title="labels.cars['Show More Car']" @clicked="emit('showMore')" />
  </div>

</template>

<style scoped>

</style>
