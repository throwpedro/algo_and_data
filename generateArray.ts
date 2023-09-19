export const generateArray = (length: number) => {
    const arr = Array.from(Array(length).keys()).map((num) => {
        return ~~(Math.random() * 42);
    });
    return arr;
}

