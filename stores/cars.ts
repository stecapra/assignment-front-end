import type { ICar } from '~/models/Car.interfaces';

// We store cars in different place even if there will be duplicate.
// This to maintain the order.
// Another approach could be two different stores or use a single store with a single array and add the
// info about position or popularity as a attribute of the car
interface ICarsStoreData {
    popular_cars: ICar[],
    recommendation_cars: {
        cars: ICar[],
        total: number,
        lastPage: number,
        currentPage: number,
    };
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
        popular_cars: [],
        recommendation_cars: {
            total: 0,
            lastPage: 0,
            cars: [],
            currentPage: 1,
        }
    }),
    actions: {
        async fetchPopularCars() {
            const { data } = await useFetch('https://dm-assignment-commonshare.koyeb.app/api/cars/popular');
            const cars = data.value as ICar[];
            this.popular_cars.push(...cars);
            return this.popular_cars;
        },
        async fetchRecommendationCars(page: number) {
            const { data } = await useFetch(`https://dm-assignment-commonshare.koyeb.app/api/cars?page=${page}`);
            const cars = data.value as ICarResponse;
            this.recommendation_cars.total = cars.meta.total;
            this.recommendation_cars.lastPage = cars.meta.last_page;
            this.recommendation_cars.cars.push(...cars.data);
        },
        toggleCarFavorite(id: string) {
            const popularCar = this.popular_cars.find(c => c.id === id);
            if (popularCar) {
                popularCar.favorite = !popularCar.favorite
            }
            const recommendationCar = this.recommendation_cars.cars.find(c => c.id === id);
            if (recommendationCar) {
                recommendationCar.favorite = !recommendationCar.favorite;
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
        getFavoriteCars: (state) => {
            // TODO: merge the two options
            return state.popular_cars.filter(c => c.favorite)
        },
        search: (state) => {
            return (key: string) => {
                return state.recommendation_cars.cars.filter(c => c.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) ?? [];
            }
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCarsStore, import.meta.hot))
}
