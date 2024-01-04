<script setup lang="ts">

import { useCarsStore } from '~/stores/cars';
import HeartIcon from '~/components/base/icons/HeartIcon.vue';
import type { ICar } from '~/models/Car.interfaces';

const props = defineProps(['car']);
const car = props.car as ICar;
const carsStore = useCarsStore();

function onClickFavorite() {
  const id = car.id;
  carsStore.toggleCarFavorite(id);
}
</script>

<template>
  <button class="rounded-full" @click.stop="onClickFavorite">
    <heart-icon :color="car.favorite ? 'red' : null"/>
  </button>
</template>

<style scoped>

</style>
