<script setup lang="ts">

import AppHeader from '~/components/header/AppHeader.vue';
import AppFooter from '~/components/footer/AppFooter.vue';
</script>

<template>
  <div>
    <app-header />
    <slot />
    <app-footer />
  </div>
</template>

<style scoped>

</style>
