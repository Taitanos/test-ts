export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Nikolay Petrov", age: 35},
    {name: "Alexey Sidorov", age: 37},
    {name: "Dmitriy Ivanov", age: 25},
]

const transformator = (man: ManType) => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
})

const devs1 = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Nikolay", lastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alexey", lastName: "Sidorov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitriy", lastName: "Ivanov"
    },
]

const devs2 = [
    transformator(people[0]),
    transformator(people[1]),
    transformator(people[2]),
]

const devs3 = people.map(transformator)

const devs4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
}))

const message = people.map(man => (`Hello ${man.name.split(" ")[0]}. Welcome to IT-incubator`))