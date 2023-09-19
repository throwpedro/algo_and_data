export const nestedAdd = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
        }
        else {
            sum += nestedAdd(array[i]);
        }
    }
    return sum;
}