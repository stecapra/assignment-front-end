<script setup lang="ts">

import CarsGrid from '~/components/widgets/cars-grid/CarsGrid.vue';
import { useLabels } from '~/composables/labels';
import { useCarsStore } from '~/stores/cars';
import type { ICar } from '~/models/Car.interfaces';

const labels = useLabels();
const carsStore = useCarsStore();
const cars = ref<ICar[]>([]);

if (!carsStore.getPopularCars?.length) {
  await carsStore.fetchPopularCars();
}

cars.value = carsStore.getPopularCars;
</script>

<template>
  <cars-grid :title="labels.cars['Popular Car']" :collapsed="true" :cars="cars" />
</template>

<style scoped>

</style>
