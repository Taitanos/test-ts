type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechnologiesType = {
    id: number
    title: string
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    name: "Nikolay",
    age: 35,
    isActive: false,
    address: {
        streetTitle: "Arsenal`nay",
        city: {
            title: "St.Petersburg",
            countryTitle: "Russia",
        },
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CSS",
        },
        {
            id: 3,
            title: "React",
        },
    ]
}