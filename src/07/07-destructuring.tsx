import React from "react";

// Деструктуризация объектов

export type ManType = {
    name: string,
    age: number,
    lessons: Array<{ title: string }>,
    address: {
        street: {
            title: string,
        }
    }
}

type PropsType = {
    title: string
    man: ManType
}

export const ManComponent: React.FC<PropsType> = (props) => { // еще один вариант использования props = ({title, man}, ...props) - то есть берем два нужных нам компонента, а все остальное записываем в остаток.

    // или такой ваирант const {title, man, ...restProps - "название, например restProps"} = props;

    const {title, man} = props;

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}