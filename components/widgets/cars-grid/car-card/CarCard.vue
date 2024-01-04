<script setup lang="ts">

import CarCardSmall from '~/components/widgets/cars-grid/car-card/views/CarCardSmall.vue';
import CarCardToggleFavorite from '~/components/widgets/cars-grid/car-card/components/CarCardToggleFavorite.vue';
import CarCardFooter from '~/components/widgets/cars-grid/car-card/components/CarCardFooter.vue';
import type { ICar } from '~/models/Car.interfaces';
import CarCardBig from '~/components/widgets/cars-grid/car-card/views/CarCardBig.vue';

const props = defineProps(['car', 'view'])
const car = props.car as ICar;
</script>

<template>
  <div class="cursor-pointer">
    <car-card-small v-if="!props.view || props.view === 'small'" :car="car">
      <template v-slot:button-favorite>
        <car-card-toggle-favorite :car="car" />
      </template>

      <template v-slot:footer>
        <car-card-footer :car="car" />
      </template>
    </car-card-small>

    <car-card-big v-else :car="car">
      <template v-slot:button-favorite>
        <car-card-toggle-favorite :car="car" />
      </template>
      <template v-slot:footer>
        <car-card-footer :car="car" />
      </template>
    </car-card-big>
  </div>
</template>

<style scoped>

</style>
