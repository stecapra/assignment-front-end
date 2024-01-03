<script setup lang="ts">

import StarIcon from '~/components/base/icons/StarIcon.vue';

const props = defineProps(['rating'])
</script>

<template>
  <star-icon v-for="index in [0,1,2,3,4]" :fill="index < rating" />
</template>

<style scoped>

</style>
