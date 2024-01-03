<script setup lang="ts">

import AppFooterSection from '~/components/footer/components/AppFooterSection.vue';
import { useLabels } from '~/composables/labels';

const labels = useLabels();

const sections = [
  {
    title: labels.footer.About,
    links: [
      labels.footer['How it works'],
      labels.footer['Featured'],
      labels.footer['Partnership'],
      labels.footer['Bussiness Relation'],
    ]
  },
  {
    title: labels.footer.Community,
    links: [
      labels.footer['Events'],
      labels.footer['Blog'],
      labels.footer['Podcast'],
      labels.footer['Invite a friend'],
    ]
  },
  {
    title: labels.footer.Socials,
    links: [
      labels.footer['Discord'],
      labels.footer['Instagram'],
      labels.footer['Twitter'],
      labels.footer['Facebook'],
    ]
  }
]
</script>

<template>
  <div class="pt-20 px-[60px] bg-white">
    <div class="flex flex-col sm:flex-row justify-between">
        <div class="flex flex-col">
          <span>DM</span>
          <span class="text-gray-800 opacity-60 font-medium text-base leading-24 tracking-tighter">Our vision is to provide convenience and help increase your sales business.</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <AppFooterSection v-for="section in sections" :title="section.title" :links="section.links"/>
        </div>
    </div>
    <div class="divider"></div>
    <div class="flex flex-col sm:flex-row justify-between my-9 ">
      <div class="mt-8 sm:mt-0 order-2 sm:order-1">
        <span class="text-secondary-500 font-semibold text-base leading-24 tracking-tighter">{{ labels.footer['©2022 DM. All rights reserved']}}</span>
      </div>
      <div class="flex justify-between sm:justify-end sm:space-x-[60px] order-1 sm:order-2">
        <span class="text-secondary-500 font-semibold text-base leading-24 tracking-tighter">{{ labels.footer['Privacy & Policy'] }}</span>
        <span class="text-secondary-500 font-semibold text-base leading-24 tracking-tighter">{{ labels.footer['Terms & Condition'] }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.divider {
  height: 1px;
  background: rgba(19, 19, 19, 0.16);
}
</style>
