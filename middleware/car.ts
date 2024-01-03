interface IResponse {
    status?: number;
    message?: string;
}

export default defineNuxtRouteMiddleware(async (to, from) => {
    const id = to.params.id;
    try {
        const { data } = await useFetch(`https://dm-assignment-commonshare.koyeb.app/api/cars/${id}`);
        // The response have the status only when the api cannot find any car. In a production env, there should be a success 200 or something similar
        const response = data.value as IResponse;
        if (!!response.status) {
            return abortNavigation()
        }
    } catch (e) {
        return abortNavigation()
    }
})
