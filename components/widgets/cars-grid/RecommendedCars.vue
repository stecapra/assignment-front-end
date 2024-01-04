<script setup lang="ts">

import CarsGrid from '~/components/widgets/cars-grid/CarsGrid.vue';
import { useLabels } from '~/composables/labels';
import { useCarsStore } from '~/stores/cars';
import type { ICar } from '~/models/Car.interfaces';

const labels = useLabels();
const carsStore = useCarsStore();
const cars = ref<ICar[]>([]);
const showNextPage = ref(true);
const currentPage = ref(1);
getCars();

async function getCars() {
  if (!carsStore.getRecommendationCarsByPage(currentPage.value)?.length) {
    await carsStore.fetchRecommendationCars(currentPage.value);
  }

  cars.value.push(...carsStore.getRecommendationCarsByPage(currentPage.value));

  showNextPage.value = currentPage.value < carsStore.getRecommendationCarsMetaInfo.lastPage;
}

async function showMore() {
  currentPage.value = currentPage.value + 1;
  await getCars();
}
</script>

<template>
  <cars-grid
      :title="labels.cars['Recomendation Car']"
      :cars="cars"
      :show-next-page="showNextPage"
      @showMore="showMore"
  />
</template>

<style scoped>

</style>
