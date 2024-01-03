<script setup lang="ts">

import type { ICar } from '~/models/Car.interfaces';
import { useLabels } from '~/composables/labels';
import CarCard from '~/components/cars-grid/car-card/CarCard.vue';

definePageMeta({
  middleware: [
    'car',
  ],
});

const labels = useLabels();

const route = useRoute()
const id = route.params?.id;

const { data } = await useFetch(`https://dm-assignment-commonshare.koyeb.app/api/cars/${id}`);
const car: ICar = data.value as ICar;
console.log('car', car)
</script>

<template>
    <div class="mb-16">
      <car-card view="'big'" :car="car" />
    </div>
    <cars-grid />

</template>

<style scoped>

</style>
