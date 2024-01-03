export enum CarType {
    SEDAN = 'Sedan',
    SPORT_CAR = 'Sports car',
    SUV = 'suv',
}

export enum KindOfTransition {
    AUTOMATIC = 'Automatic',
    MANUAL = 'Manual',
    ELECTRIC = 'Electric'
}

export interface ICar {
    id: string,
    name: string,
    type: CarType,
    gasolineLiter: number,
    kindOfTransition: KindOfTransition,
    people: number,
    pricePerDay: number,
    img: string,
    favorite?: boolean // Only frontend
}