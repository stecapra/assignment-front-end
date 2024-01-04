<script setup lang="ts">

import Ads from '~/components/widgets/ads/Ads.vue';
import { useLabels } from '~/composables/labels';
import CarsGrid from '~/components/widgets/cars-grid/CarsGrid.vue';
import PopularCars from '~/components/widgets/cars-grid/PopularCars.vue';
import RecommendedCars from '~/components/widgets/cars-grid/RecommendedCars.vue';

const labels = useLabels();
</script>

<template>
  <div class="flex justify-between flex-col sm:flex-row space-x-8">
    <ads :title="labels.ads['The Best Platform for Car Rental']"
         :subtitle="labels.ads['Ease of doing a car rental safely and reliably. Of course at a low price.']"
         :action-button="labels.ads['Rental Car']"
         img="../../assets/images/ads_1.png">
      <img src="@/assets/images/ads_1.png" alt="ads.image">
    </ads>
    <ads class="hidden sm:block" :title="labels.ads['Easy way to rent a car at a low price']"
         :subtitle="labels.ads['Ease of doing a car rental safely and reliably. Of course at a low price.']"
         :action-button="labels.ads['Rental Car']"
         img="ads_1">
      <img src="@/assets/images/ads_2.png" alt="ads.image">
    </ads>
  </div>

  <popular-cars />
  <recommended-cars />
</template>

<style scoped>

</style>
