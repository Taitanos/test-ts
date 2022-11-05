import {ManType} from "./07-destructuring";

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Nikolay',
        age: 35,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: 'Arsenal street',
            }
        }
    }
})

// Деструктуризация используется с заведомо известном количестве элементов

test("", () => {
    /*  Обычная запись:
        const age = props.age;
        const lessons = props.lessons;*/

    // Деструктурированное присваивание
    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(35);
    expect(lessons.length).toBe(2);
    expect(title).toBe('Arsenal street');
})

// деструктуризация массивов

test("", () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ls2] = props.lessons;
    // const [, , ls3] = props.lessons; - запись если нужен только третий элемент, первые два элемента остаются пустыми.

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');

    expect(ls1.title).toBe('1');
    expect(ls2.title).toBe('2');
})