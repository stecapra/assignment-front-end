<script setup lang="ts">

import AppHeader from '~/components/header/AppHeader.vue';
import AppFooter from '~/components/footer/AppFooter.vue';

</script>

<template>
  <div>
    <app-header />
    <div class="p-16 pt-8 bg-[#F6F7F9]">
      <slot />
    </div>
    <app-footer />
  </div>
</template>

<style scoped>

</style>
