export const quickSort = (nums: number[]): number[] => {
    if (nums.length < 2) {
        return nums;
    }
    const pivot = nums[nums.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    const newLeft = quickSort(left);
    const newRight = quickSort(right);
    const res: number[] = []
    return res.concat(newLeft, pivot, newRight);
};