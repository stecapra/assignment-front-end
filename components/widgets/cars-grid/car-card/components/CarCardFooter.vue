<script setup lang="ts">

import { useLabels } from '~/composables/labels';
import type { ICar } from '~/models/Car.interfaces';

const labels = useLabels();
const props = defineProps(['car'])
const car = props.car as ICar;

function rentCar(): void {
  window.alert(`renting ${car.name}`)
}
</script>

<template>
  <div class="flex items-center justify-between w-full">
        <span class="text-secondary-500 font-bold text-xl leading-normal">
          ${{ car.pricePerDay }}/
          <span class="text-secondary-300 font-bold text-sm leading-normal">{{ labels.standard.day }}</span>
        </span>
    <BaseButton @click.stop="rentCar" :title="labels.standard['Rent Now']" />
  </div>
</template>

<style scoped>

</style>
