<script setup lang="ts">

import type { ICar } from '~/models/Car.interfaces';

import CarCard from '~/components/cars-grid/car-card/CarCard.vue';
import { useCarsStore } from '~/stores/car';

interface ICarResponse {
  data: ICar[]
}

const router = useRouter();
const carsStore = useCarsStore();
const { data } = await useFetch('https://dm-assignment-commonshare.koyeb.app/api/cars');
const cars = data.value as ICarResponse;
cars.data.forEach(c => {
  carsStore.addRecommendationCar(c);
})
const recommendationCars = carsStore.getRecommendationCars;

function goToCarDetails(car: ICar): void {
  router.push(`/cars/${car.id}`);
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-[#f6f7f9]">
    <car-card v-for="c in recommendationCars" :car="c" :view="'small'" @click="goToCarDetails(c)"  />
  </div>

</template>

<style scoped>

</style>
