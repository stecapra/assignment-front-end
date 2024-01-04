<script setup lang="ts">

import type { ICar } from '~/models/Car.interfaces';
import { useLabels } from '~/composables/labels';
import CarCard from '~/components/widgets/cars-grid/car-card/CarCard.vue';
import CarsGrid from '~/components/widgets/cars-grid/CarsGrid.vue';
import RecommendedCars from '~/components/widgets/cars-grid/RecommendedCars.vue';

definePageMeta({
  middleware: [
    'car',
  ],
});

const route = useRoute()
const id = route.params?.id;

const { data } = await useFetch(`/api/cars/${id}`);
const car: ICar = data.value as ICar;
</script>

<template>
  <div class="mb-16">
    <car-card view="'big'" :car="car" />
  </div>
  <recommended-cars />
</template>

<style scoped>

</style>
