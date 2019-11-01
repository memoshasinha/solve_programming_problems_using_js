/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums == null || nums.length == 0) return 0;
    let max = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] + sum > nums[i]) sum += nums[i];
        else sum = nums[i];
        if (max < sum) max = sum;
    }
    return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
