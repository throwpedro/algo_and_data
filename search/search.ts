type searchObj = {
    id: number,
    name: string,
};

export const linearSearch = (arr: searchObj[], needle: searchObj) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === needle.id) {
            return arr[i];
        }
    }
    return undefined;
};

export const binarySearch = (arr: searchObj[], needle: searchObj) => {
    for (let i = 0; i < arr.length; i++) {
        const middle = Math.floor(arr.length / 2);
        if (arr[middle].id > needle.id) {
            arr.splice(middle);
        } else if (arr[middle].id < needle.id) {
            arr.splice(0, middle);
        } else {
            return arr[middle]
        }
    }
    return undefined;
}