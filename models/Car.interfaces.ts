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

export interface ICarImage {
    url: string;
}

export interface ICar {
    id: string,
    name: string,
    description?: string,
    type: CarType,
    gasolineLiter: number,
    kindOfTransition: KindOfTransition,
    people: number,
    pricePerDay: number,
    img: string,
    images?: ICarImage[],
    favorite?: boolean // Only frontend
}
