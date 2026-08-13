class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const exist = new Set();
        for (let i = 0; i < nums.length;i++) {
            if (exist.has(nums[i])) return true
            exist.add(nums[i])
        }
        return false
    }
}
