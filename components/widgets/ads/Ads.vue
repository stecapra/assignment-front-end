<script setup lang="ts">

const props = defineProps(['title', 'subtitle', 'actionButton', 'img'])
</script>

<template>
  <div class="flex flex-auto flex-col p-6 bg-sky-600 rounded-[10px]">
    <div class="flex flex-col w-full sm:w-[60%]">
      <span class="text-primary-0 font-semibold text-[32px] leading-48 tracking-tighter" v-html="props.title" />
      <span class="text-primary-0 font-medium text-base leading-24 tracking-tighter"
            v-html="props.subtitle" />
    </div>
    <div class="flex mt-5 flex-col sm:flex-row">
      <base-button :title="props.actionButton"/>
      <div class="mt-8 w-[406px] h-[116px]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
