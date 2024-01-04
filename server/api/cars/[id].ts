export default defineEventHandler(async (event) => {
    const id = getRouterParams(event).id
    return await $fetch(`https://dm-assignment-commonshare.koyeb.app/api/cars/${id}`);
})
