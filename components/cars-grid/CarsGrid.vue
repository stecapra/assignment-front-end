<script setup lang="ts">

import CarCard from '~/components/cars-grid/car-card/CarCard.vue';
let cars = {data: []};
try {
  let { data: cars } = await useFetch('https://dm-assignment-commonshare.koyeb.app/api/cars');
} catch (e) {
  console.log('error')
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-[#f6f7f9]">
    <car-card v-for="c in cars.data" :car="c" />
  </div>

</template>

<style scoped>

</style>
