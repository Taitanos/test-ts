export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}

export function splitIntoWorlds(sentense: string) {
    const world = sentense.toLowerCase().split(" ")

    return world.filter(w => w !== "" && w !== "-")
        .map(w => w
            .replace("!", "")
            .replace(".", "")
            .replace(",", "")
        );
}