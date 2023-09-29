export const generateArray = (length: number) => {
    const arr = Array.from(Array(length).keys()).map((num) => {
        return ~~(Math.random() * 142);
    });
    return arr;
}

