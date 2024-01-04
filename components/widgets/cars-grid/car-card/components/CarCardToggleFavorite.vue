<script setup lang="ts">

import { useCarsStore } from '~/stores/cars';
import HeartIcon from '~/components/base/icons/HeartIcon.vue';
import type { ICar } from '~/models/Car.interfaces';

const props = defineProps(['car']);
const car = props.car as ICar;
const carsStore = useCarsStore();
</script>

<template>
  <button class="rounded-full" @click.stop="carsStore.toggleCarFavorite(car.id)">
    <heart-icon :color="carsStore.isCarFavorite(car.id) ? 'red' : null"/>
  </button>
</template>

<style scoped>

</style>
