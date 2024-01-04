<script setup lang="ts">

const props = defineProps(['backgroundPattern'])

const patternClass = ref(props.backgroundPattern === 0 ? 'circle' : 'arrow')
const backgroundColor = ref(props.backgroundPattern === 0 ? 'bg-information-500' : 'bg-primary-500')
</script>

<template>
  <div :class="`h-full w-full relative ${backgroundColor} rounded-[10px]`">
    <div :class="`h-full w-full absolute top-0 left-0 z-0 bg-pattern-${patternClass}`"></div>
    <slot></slot>
  </div>
</template>

<style scoped>
.bg-pattern-circle {
  background: repeating-radial-gradient(
      circle at 30% 85%,
      transparent 25px,
      transparent 70px,
      rgba(255, 255, 255, 0.06) 0,
      rgba(255, 255, 255, 0.06) 85px
  );
}

.bg-pattern-arrow {
  background: url("assets/svg/ads_arrow.svg") repeat;
  background-size: 100px 120px;
}
</style>
