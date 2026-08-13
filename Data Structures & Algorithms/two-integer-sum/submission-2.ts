class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // [1,3,3,2,2,8,5,7,9] | target = 16
    twoSum(nums: number[], target: number): number[] {
        const exist = new Map();

        for (let i = 0; i < nums.length; i++) {
            const retain = target - nums[i];
            if (exist.has(retain)) return [i, exist.get(retain)];

            exist.set(nums[i], i)
        }

        return [];
    }
}
