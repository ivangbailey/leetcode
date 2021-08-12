/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const mapped = {};
    for (var i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        if (mapped[diff] > -1 && mapped[diff] !== i) {
            return [mapped[diff], i]
        }
        mapped[num] = i;
    }
};