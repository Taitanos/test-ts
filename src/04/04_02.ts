import {CityType, GovernmentBuildingsType} from "../02/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter( c => c.address.street.title !== street);
}

export function getBuildingsWithStaffCountGreaterTen(buildings: Array<GovernmentBuildingsType>, number: number) {
    return buildings.filter(b => b.staffCount > number);
}