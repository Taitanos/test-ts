import {CityType} from "../02/02_02";
import {createMessages, getStreetsTitleOfGovernmentBuilding, getStreetsTitleOfHouse} from "./05_01";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                id: 2,
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                id: 3,
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

// 01. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test("list of streets title of governments building", () => {
    let streetsName = getStreetsTitleOfGovernmentBuilding(city.governmentBuildings);

    expect(streetsName.length).toBe(2);
    expect(streetsName[0]).toBe("Central Str");
    expect(streetsName[1]).toBe("South Str");
})

// 02. Создайте в тож же файле еще одну функцию, чтобы тесты прошли
test("list of streets title", () => {
    let streetsName = getStreetsTitleOfHouse(city.houses);

    expect(streetsName.length).toBe(3);
    expect(streetsName[0]).toBe("White street");
    expect(streetsName[1]).toBe("Happy street");
    expect(streetsName[2]).toBe("Happy street");
})

// 03. Приветственное сообщение на каждой улице
test("create greeting messages for street", () => {
    let message = createMessages(city.houses)

    expect(message.length).toBe(3);
    expect(message[0]).toBe("Hello guys from White street");
    expect(message[1]).toBe("Hello guys from Happy street");
    expect(message[2]).toBe("Hello guys from Happy street");
})