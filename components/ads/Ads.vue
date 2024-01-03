<script setup lang="ts">
import { useLabels } from '~/composables/labels';

const labels = useLabels();
</script>

<template>
  <div class="flex flex-auto flex-col p-6 bg-sky-600 rounded-[10px]">
    <span class="text-primary-0 font-semibold text-[32px] leading-48 tracking-tighter">{{ labels.ads['The Best Platform for Car Rental'] }}</span>
    <span class="text-primary-0 font-medium text-base leading-24 tracking-tighter">{{ labels.ads['Ease of doing a car rental safely and reliably. Of course at a low price.']}}</span>
    <base-button :title="labels.standard['Rent Now']"/>
    <img class="w-[406px] h-[116px]" src="../../assets/images/ads_1.png">
  </div>
</template>

<style scoped>

</style>
