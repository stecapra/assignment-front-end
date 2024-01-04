export default defineEventHandler(async (event) => {
    const page = getQuery(event).page;
    return $fetch(`https://dm-assignment-commonshare.koyeb.app/api/cars?page=${page}`);
})
