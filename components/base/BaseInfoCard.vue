<script setup lang="ts">

const props = defineProps(['title', 'subtitle', 'actionButton'])
</script>

<template>
  <div class="flex flex-auto flex-col p-6">
    <div class="flex flex-col w-full sm:w-[60%] z-10">
      <span class="text-primary-0 font-semibold text-[32px] leading-48 tracking-tighter" v-html="props.title" />
      <span class="text-primary-0 font-medium text-base leading-24 tracking-tighter"
            v-html="props.subtitle" />
    </div>
    <div class="flex mt-5 flex-col sm:flex-row z-10">
      <base-button v-if="props.actionButton" :title="props.actionButton"/>
      <div :class="`w-full sm:w-[406px] sm:h-[116px] ${props.actionButton ? 'mt-8' : ''}`">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
