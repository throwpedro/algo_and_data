export const merge = (sorted1: number[], sorted2: number[]) => {
    const res: number[] = [];
    while (sorted1.length && sorted2.length) {
        if (sorted1[0] <= sorted2[0]) {
            res.push(sorted1.shift() as number);
        } else {
            res.push(sorted2.shift() as number);
        }
    }
    return res.concat(sorted1, sorted2);
}

export const mergeSort = (nums: number[]): number[] => {
    if (nums.length < 2) {
        return nums;
    }
    const arr1 = nums.slice(0, Math.floor(nums.length/2));
    const arr2 = nums.slice(arr1.length);
    return merge(mergeSort(arr1), mergeSort(arr2));
};