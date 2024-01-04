import type { ICar } from '~/models/Car.interfaces';
import { defineStore } from 'pinia';

// We store cars in different place even if there will be duplicate.
// This to maintain the order.
// Another approach could be two different stores or use a single store with a single array and add the
// info about position or popularity as a attribute of the car

export interface IRecommendationCarsPaginationInfo {
    total: number,
    lastPage: number,
}
interface ICarsStoreData {
    current_car: ICar | null,
    popular_cars: ICar[],
    recommendation_cars: {
        cars: ICar[],
        pagination: IRecommendationCarsPaginationInfo
    };
    favorites: string[];
}

interface ICarResponse {
    data: ICar[],
    meta: {
        total: number,
        last_page: number
    }
}

export const useCarsStore = defineStore('cars', {
    state: (): ICarsStoreData => ({
        current_car: null,
        popular_cars: [],
        recommendation_cars: {
            pagination: {
                total: 0,
                lastPage: 0,
            },
            cars: [],
        },
        favorites: []
    }),
    actions: {
        saveCurrentCar(car: ICar) {
            this.current_car = car;
        },
        async fetchPopularCars() {
            const { data } = await useFetch('/api/popular-cars');
            const cars = data.value as ICar[];
            this.popular_cars.push(...cars);
            return this.popular_cars;
        },
        async fetchRecommendationCars(page: number) {
            const { data } = await useFetch(`/api/recommended-cars?page=${page}`);
            const cars = data.value as ICarResponse;
            this.recommendation_cars.pagination.total = cars.meta.total;
            this.recommendation_cars.pagination.lastPage = cars.meta.last_page;
            this.recommendation_cars.cars.push(...cars.data);
        },
        toggleCarFavorite(id: string) {
            const index = this.favorites.indexOf(id);
            if (index === -1) {
                this.favorites.push(id);
            } else {
               this.favorites.splice(index, 1);
            }
        },
    },
    getters: {
        getPopularCars: (state): ICar[] => {
            return state.popular_cars;
        },
        getAllRecommendationCars: (state) => {
            return state.recommendation_cars.cars;
        },
        getRecommendationCarsByPage: (state) => {
            return (page: number) => {
                const carsPerPage = 8;
                const start = page * carsPerPage;
                const end = start + carsPerPage;
                return state.recommendation_cars.cars.slice(start, end);
            }
        },
        getRecommendationCarsMetaInfo: (state): IRecommendationCarsPaginationInfo => {
          return state.recommendation_cars.pagination;
        },
        isCarFavorite: (state) => {
            return (id: string) => state.favorites.indexOf(id) !== -1
        },
        getFavoriteCars: (state) => {
            return state.favorites.map((id) => {
                return state.current_car?.id === id ? state.current_car :
                    state.popular_cars.find(c => c.id === id) ??
                    state.recommendation_cars.cars.find(c => c.id === id)
            }).filter(c => !!c);
        },
        search: (state) => {
            const fields = ['name'];    // Add field where search thought
            return (key: string) => {
                return state.recommendation_cars.cars.filter(c => {
                    // @ts-ignore
                    const terms = fields.map(f => c[f]).join();
                    return terms.toLowerCase().indexOf(key.toLowerCase()) !== -1
                }) ?? [];
            }
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCarsStore, import.meta.hot))
}
