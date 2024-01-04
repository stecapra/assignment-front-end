export default defineEventHandler(async (event) => {
    return $fetch(`https://dm-assignment-commonshare.koyeb.app/api/cars/popular`);
})
