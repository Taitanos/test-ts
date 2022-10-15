import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export function getStreetsTitleOfGovernmentBuilding(buildings: Array<GovernmentBuildingsType>) {
    return buildings.map(b => b.address.street.title)
}

export function getStreetsTitleOfHouse(houses: Array<HouseType>) {
    return houses.map(h => h.address.street.title)
}

export function createMessages(houses: Array<HouseType>) {
    return houses.map(h => (`Hello guys from ${h.address.street.title}`))
}