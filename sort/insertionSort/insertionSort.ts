// export const insertionSort = (nums: number[]) => {
//     for (let i = 1; i < nums.length; i++) {
//         let toInsert = nums[i];
//         let j = i - 1;
//         for (j; nums[j] > toInsert && j >= 0; j--) {
//             nums[j + 1] = nums[j];
//         }
//         nums[j + 1] = toInsert;
//     }
//     return nums;
// };

export const insertionSort = (items: number[]) => {
    var n = items.length;
    for (let i = 1; i < n; i++) {
        let j = i;
        while (j > 0) {
            if (items[j - 1] > items[j]) {
                let temp = items[j - 1];
                items[j - 1] = items[j];
                items[j] = temp;
            }
            j = j - 1;
        }
    }
    return items;
}
