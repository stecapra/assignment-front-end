<script setup lang="ts">

import { useLabels } from '~/composables/labels';
import PopularCars from '~/components/widgets/cars-grid/PopularCars.vue';
import RecommendedCars from '~/components/widgets/cars-grid/RecommendedCars.vue';
import BasePatternCard from '~/components/base/BasePatternCard.vue';
import BaseInfoCard from '~/components/base/BaseInfoCard.vue';

const labels = useLabels();

useHead({
  title: 'Assignment Front end',
  meta: [
    { name: 'description', content: 'Explore affordable and reliable car rentals at XYZ Rentals. Discover a wide range of vehicles, from compact cars to spacious SUVs, perfect for your next adventure. Book with confidence, enjoy flexible rental options, and experience the freedom of the open road with XYZ Rentals.' }
  ],
})
</script>

<template>
  <div class="flex justify-between flex-col sm:flex-row space-x-8">
    <base-pattern-card :background-pattern="0">
      <base-info-card :title="labels.ads['The Best Platform for Car Rental']"
                 :subtitle="labels.ads['Ease of doing a car rental safely and reliably. Of course at a low price.']"
                 :action-button="labels.ads['Rental Car']">
        <img src="@/assets/images/ads_1.png" alt="ads.image">
      </base-info-card>
    </base-pattern-card>
    <base-pattern-card :background-pattern="1">
      <base-info-card class="hidden sm:flex" :title="labels.ads['Easy way to rent a car at a low price']"
                 :subtitle="labels.ads['Ease of doing a car rental safely and reliably. Of course at a low price.']"
                 :action-button="labels.ads['Rental Car']">
        <img src="@/assets/images/ads_2.png" alt="ads.image">
      </base-info-card>
    </base-pattern-card>
  </div>

  <popular-cars />
  <recommended-cars />
</template>

<style scoped>

</style>
