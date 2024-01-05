import { createPinia, setActivePinia } from 'pinia';
import { useCarsStore } from '~/stores/cars';
import { CarType, type ICar, KindOfTransition } from '~/models/Car.interfaces';
import exp from 'node:constants';

const MOCK_CAR: ICar = {
    gasolineLiter: 0,
    id: 'id-car',
    img: '',
    kindOfTransition: KindOfTransition.ELECTRIC,
    name: 'name car',
    people: 0,
    pricePerDay: 0,
    type: CarType.SPORT_CAR
}

describe('Counter Store', () => {
    let store: ReturnType<typeof useCarsStore>;

    beforeAll(() => {
        setActivePinia(createPinia())
    })

    beforeEach(() => {
        store = useCarsStore();
    })

    afterEach(() => {
        store.$reset();
    })

    it('save the current car', () => {
        store.saveCurrentCar(MOCK_CAR);
        expect(store.current_car?.name).toBe(MOCK_CAR.name)
    })

    it('add and remove the id when add to favorite cars', () => {
        const id = 'id-test';
        store.toggleCarFavorite(id);
        expect(store.favorites.length).toBe(1)
        store.toggleCarFavorite(id);
        expect(store.favorites.length).toBe(0)
    })

    it('search by name', () => {
        store.recommendation_cars.cars = [
            MOCK_CAR
        ]
        expect(store.search(MOCK_CAR.name).length).toBe(1)
    })
})
