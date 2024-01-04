<script setup lang="ts">

import CarCard from '~/components/widgets/cars-grid/car-card/CarCard.vue';
import RecommendedCars from '~/components/widgets/cars-grid/RecommendedCars.vue';
import { useCarsStore } from '~/stores/cars';

definePageMeta({
  middleware: [
    'car',
  ],
});

const carsStore = useCarsStore();
const car = carsStore.current_car;

useHead({
  title: `Assignment Front end - details - ${car?.name}`,
  meta: [
    { name: 'description', content: `Specific meta tag for ${car?.name}` }
  ],
})
</script>

<template>
  <div class="mb-16">
    <car-card view="'big'" :car="car" />
  </div>
  <recommended-cars />
</template>

<style scoped>

</style>
