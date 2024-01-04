import { useCarsStore } from '~/stores/cars';
import type { ICar } from '~/models/Car.interfaces';

interface IResponse {
    status?: number;
    message?: string;
}

export default defineNuxtRouteMiddleware(async (to, from) => {
    const id = to.params.id;
    let response: IResponse;
    try {
        const { data } = await useFetch(`/api/cars/${id}`);
        // The response have the status only when the api cannot find any car. In a production env, there should be a success 200 or something similar
        response = data.value as IResponse;
        if (!!response.status) {
            return abortNavigation()
        }
    } catch (e) {
        return abortNavigation()
    }

    // Save the current car to avoid double calls when load the page
    const store = useCarsStore();
    await store.saveCurrentCar(response as ICar);
})
