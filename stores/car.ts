import type { ICar } from '~/models/Car.interfaces';

interface ICarsStoreData {
    popular_cars: ICar[],
    recommendation_cars: ICar[]
}

export const useCarsStore = defineStore('cars', {
    state: (): ICarsStoreData => ({
        popular_cars: [],
        recommendation_cars: []
    }),
    actions: {
        addPopularCar(car: ICar) {
            this.popular_cars.push(car);
        },
        addRecommendationCar(car: ICar) {
            this.recommendation_cars.push(car);
        },
        toggleCarFavorite(id: string) {
            const popularCar = this.popular_cars.find(c => c.id === id);
            if (popularCar) {
                popularCar.favorite = !popularCar.favorite
            }
            const recommendationCar = this.recommendation_cars.find(c => c.id === id);
            if (recommendationCar) {
                recommendationCar.favorite = !recommendationCar.favorite;
                console.log('toggling')
            }
        }
    },
    getters: {
        getPopularCars: (state): ICar[] => {
            return state.popular_cars;
        },
        getRecommendationCars: (state): ICar[] => {
            return state.recommendation_cars;
        },
        getFavoriteCars: (state) => {
            // TODO: merge the two options
            return state.popular_cars.filter(c => c.favorite)
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCarsStore, import.meta.hot))
}
