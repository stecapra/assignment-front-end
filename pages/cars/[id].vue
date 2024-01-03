<script setup>

definePageMeta({
  middleware: [
    'car',
  ],
});

const route = useRoute()
const id = route.params?.id;

const { data } = await useFetch(`https://dm-assignment-commonshare.koyeb.app/api/cars/${id}`);
if (data.value) {

} else {

}
console.log('data', data)
</script>

<template>

</template>

<style scoped>

</style>
