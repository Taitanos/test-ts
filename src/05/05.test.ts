import {ManType} from "./05";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Nikolay Petrov", age: 35},
        {name: "Alexey Sidorov", age: 37},
        {name: "Dmitriy Ivanov", age: 25},
    ]
})

test("should get array of greeting message", () => {

    const message = people.map(man => (`Hello ${man.name.split(" ")[0]}. Welcome to IT-incubator`))

    expect(message.length).toBe(3);
    expect(message[0]).toBe("Hello Nikolay. Welcome to IT-incubator")
    expect(message[1]).toBe("Hello Alexey. Welcome to IT-incubator")
    expect(message[2]).toBe("Hello Dmitriy. Welcome to IT-incubator")
})