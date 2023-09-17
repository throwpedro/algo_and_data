export const bubblesort = (arr: number[]): number[] => {
    let swapped: boolean;
    do {
        swapped = false;
        arr.forEach((item, index) => {
            if (item > arr[index + 1]) {
                const temp = item;
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
                swapped = true;
            }
        });
    } while (swapped);
    return arr;
}