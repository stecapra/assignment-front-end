import { type CarType, KindOfTransition } from '~/models/Car/Car.interfaces';

export class Car {
    constructor(id: string,
                name: string,
                type: CarType,
                gasolineLiter: number,
                kindOfTransition: KindOfTransition,
                people: number,
                pricePerDay: number,
                img: string,
                ) {
    }
}
