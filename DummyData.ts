import {faHippo} from '@fortawesome/free-solid-svg-icons'
export type Json = Array<{
    id: number,
    profit: string,
    advanceMoney: string,
    destination1: string,
    destination2: string
    distanceToDestination1: string,
    distanceToDestination2: string,
    image: any
}>;

export const fakeData : Json = [
    {
        id: 1,
        profit: '80.000',
        advanceMoney: '200.000',
        destination1: 'Home',
        destination2: 'Home',
        distanceToDestination1: '1 km',
        distanceToDestination2: '3 km',
        image: faHippo
    },
    {
        id: 2,
        profit: '80.000',
        advanceMoney: '200.000',
        destination1: 'Home',
        destination2:'Home',
        distanceToDestination1: '1 km',
        distanceToDestination2: '4 km',
        image:faHippo
    },
    {
        id: 3,
        profit: '80.000',
        advanceMoney: '200.000',
        destination1: 'Home',
        destination2: 'Home',
        distanceToDestination1: '1 km',
        distanceToDestination2: '3 km',
        image:faHippo
    },
    {
        id: 4,
        profit: '80.000',
        advanceMoney: '200.000',
        destination1: 'Home',
        destination2: 'Home',
        distanceToDestination1: '1 km',
        distanceToDestination2: '3 km',
        image:faHippo
    },
    {
        id: 5,
        profit: '80.000',
        advanceMoney: '200.000',
        destination1: 'Home',
        destination2: 'Home',
        distanceToDestination1: '1 km',
        distanceToDestination2: '3 km',
        image: faHippo
    },
    {
        id: 6,
        profit: '80.000',
        advanceMoney: '200.000',
        destination1: 'Home',
        destination2: 'Home',
        distanceToDestination1: '1 km',
        distanceToDestination2: '3 km',
        image: faHippo
    },
]