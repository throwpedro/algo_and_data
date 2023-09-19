// export const bubbleSort = (nums: number[]) => {
//     let swapped = false;
//     do {
//         swapped = false;
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] > nums[i + 1]) {
//                 const temp = nums[i];
//                 nums[i] = nums[i + 1];
//                 nums[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     return nums;
// }

// Wihtout temp variable
export const bubbleSort = (nums: number[]) => {
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                // swap two variables without using a third variable
                nums[i] = nums[i] + nums[i + 1];
                nums[i + 1] = nums[i] - nums[i + 1];
                nums[i] = nums[i] - nums[i + 1];
                swapped = true;
            }
        }
    } while (swapped);
    return nums;
}