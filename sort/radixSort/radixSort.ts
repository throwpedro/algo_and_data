export const radixSort = (nums: number[]): number[] => {
    const buckets: number[][] = Array.from({ length: 10 }, () => []);
    const longestNumber = getLongest(nums);

    for (let i = 0; i < longestNumber; i++) {
        while (nums.length) {
            buckets[getDigit(nums[0], i, longestNumber)].push(nums.shift()!);
        }
        for (let j = 0; j < buckets[0].length; j++) {
            nums.push(buckets[0][j]);
        }
    }
    return nums;
};

const getDigit = (number: number, place: number, longestNumber: number) => {
    const string = number.toString();
    const size = string.length;
    const mod = longestNumber - size;
    const digit = string[place - mod];
    return digit ? parseInt(digit) : 0;
}

const getLongest = (nums: number[]) => {
    let longest = 0;
    for (let i = 0; i < nums.length; i++) {
        longest = Math.max(longest, nums[i].toString().length);
    }
    return longest;
}