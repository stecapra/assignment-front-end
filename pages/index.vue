<script setup lang="ts">

import GridCars from '~/components/cars-grid/CarsGrid.vue';
import Ads from '~/components/ads/Ads.vue';
</script>

<template>
  <div class="pt-8 px-16 bg-[#F6F7F9]">
    <div class="flex justify-between flex-col sm:flex-row space-x-8">
      <ads></ads>
      <ads></ads>
    </div>
    <grid-cars></grid-cars>
  </div>
</template>

<style scoped>

</style>
