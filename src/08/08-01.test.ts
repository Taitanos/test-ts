
type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach(() => {
    users = {
        '11': {id: 11, name: 'Kolay'},
        '27': {id: 27, name: 'Alexey'},
        '28': {id: 28, name: 'Tatyana'},
        '12': {id: 12, name: 'Sergey'},
        '15': {id: 15, name: 'Vasya'},
    }
})

test("Should update corresponding user", () => {
    users['11'].name = 'Nikolay'
    users['27'].name = 'Leha'

    expect(users['11'].name).toBe('Nikolay');
    expect(users['27']).toEqual({id: 27, name: 'Leha'});
})

test("Should delete corresponding user", () => {
    delete users['15']

    expect(users['15']).toBeUndefined()
})