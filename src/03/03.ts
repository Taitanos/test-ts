import {StudentType} from "../02/02";
import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const  addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student:StudentType) => {
    student.isActive = true;
}

export function doesStudentLiveIn(student: StudentType, cityName:string) {
    return student.address.city.title === cityName;
}

export const addMoneyToBudget = (buildings: GovernmentBuildingsType, budget: number) => {
    buildings.budget += budget;
}

export function repairHouse(house: HouseType) {
    house.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingsType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}

export function toHireStaff(building: GovernmentBuildingsType, staffCountToHire: number) {
    building.staffCount += staffCountToHire;
}