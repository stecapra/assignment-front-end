<script setup lang="ts">

import HeartIcon from '~/components/base/icons/HeartIcon.vue';
import SearchIcon from '~/components/base/icons/SearchIcon.vue';
import { useCarsStore } from '~/stores/cars';
import SearchDropdown from '~/components/header/components/SearchDropdown.vue';
import type { ICar } from '~/models/Car.interfaces';
import { ErrorCodes } from 'vscode-jsonrpc';
import jsonrpcReservedErrorRangeEnd = ErrorCodes.jsonrpcReservedErrorRangeEnd;

const router = useRouter();
const value = defineModel('');
const searchCars = ref();
const showSearchDropdown = ref(false);
const carsStore = useCarsStore();

function search() {
  const key = value.value as string;
  searchCars.value = [];
  if (key) {
    searchCars.value = carsStore.search(key);
  }

  showSearchDropdown.value = searchCars.value?.length
}

function goToIndex(): void {
  resetSearch();
  router.push(`/`);
}

function onClickSearchCar(car: ICar): void {
  resetSearch();
  router.push(`/cars/${car.id}`);
}

function showFavorites(): void {
  const names = carsStore.getFavoriteCars.map(c => c?.name);
  if(names.length) {
    window.alert(`Your favorites => ${names}`)
  } else {
    window.alert(`You don't have favorites cars`);
  }
}

function resetSearch() {
  value.value = '';
  showSearchDropdown.value = false;
}

</script>

<template>
  <div class="header-container px-10 bg-white">
    <div class="flex flex-col sm:flex-row items-center">
      <!-- Column 1 -->
      <div class="flex justify-center logo flex-none w-[9.25rem] h-11 order-1 sm:order-1 cursor-pointer">
        <span @click="goToIndex">DM</span>
      </div>

      <!-- Column 2 -->
      <div class="flex flex-auto mx-5 order-3 sm:order-2">
        <!-- Content for column 2 -->
          <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
              <search-icon />
            </div>
            <input
                type="search"
                id="default-search"
                class="block w-full py-2.5 ps-16 text-sm text-gray-900 border border-gray-300 rounded-3xl focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search something here"
                v-model="value"
                @input="search" />
            <div v-if="showSearchDropdown" class="absolute w-full">
              <search-dropdown :cars="searchCars" @carSelected="onClickSearchCar" />
            </div>
          </div>
      </div>

      <!-- Column 3 -->
      <div class="flex flex-none p-2.5 rounded-full border order-2 sm:order-3">
        <!-- Content for column 3 -->
        <div class="w-6 h-6 ">
          <heart-icon @click="showFavorites" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  padding-top: 40px;
  padding-bottom: 40px;
}

.logo {
  color: #3563E9;
  text-align: center;
  /* Bold/Type@32 */
  font-family: Plus Jakarta Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 48px */
  letter-spacing: -0.96px;
}
</style>
