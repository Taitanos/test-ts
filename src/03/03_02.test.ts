import { CityType } from "../02/02_02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {street: {title: "Central Str"}}
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {street: {title: "South Str"}}
            },
        ],
        citizensNumber: 1000000,
    }
})

// 01. Создание теста с изменением бюджета
test("Budget should be changed for HOSPITAL", ()=> {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);
} )
test("Budget should be changed for FIRE-STATION", ()=> {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000);
} )

// 01. Дополните тип HouseType (добавьте порядковый номер id от 1 и по возрастанию)
// 02. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test("Houses should be repaired", () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})

// 01. Отредактировать количество людей
test("staff should be reduced", ()=> {
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180);
})
test("staff should be increased", ()=> {
    toHireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(220);
})