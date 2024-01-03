import type { ICar } from '~/models/Car.interfaces';

// We store cars in different place even if there will be duplicate.
// This to maintain the order.
// Another approach could be two different stores or use a single store with a single array and add the
// info about position or popularity as a attribute of the car
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
            // Avoid duplication. Depends on the api could be a complete reset every add, or a merge.
            // For demostration we simply avoid duplicated
            const find = this.popular_cars.find(c => c.id === car.id);
            if (!find) {
                this.popular_cars.push(car);
            }
        },
        addRecommendationCar(car: ICar) {
            // Avoid duplication. Depends on the api could be a complete reset every add, or a merge.
            // For demostration we simply avoid duplicated
            const find = this.recommendation_cars.find(c => c.id === car.id);
            if (!find) {
                this.recommendation_cars.push(car);
            }
        },
        toggleCarFavorite(id: string) {
            const popularCar = this.popular_cars.find(c => c.id === id);
            if (popularCar) {
                popularCar.favorite = !popularCar.favorite
            }
            const recommendationCar = this.recommendation_cars.find(c => c.id === id);
            if (recommendationCar) {
                recommendationCar.favorite = !recommendationCar.favorite;
            }
        },
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
        search: (state) => {
            return (key: string) => {
                return state.recommendation_cars.filter(c => c.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) ?? [];
            }
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCarsStore, import.meta.hot))
}
