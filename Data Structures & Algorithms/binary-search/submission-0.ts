class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // [-1,0,2,4,6,8] tar = 4
    //   l   m     r
    //         l m r
    //         l&r   
    search(nums: number[], target: number): number {
        let l = 0, r = nums.length - 1;
        while(l <= r) {
            const mid = Math.floor((l + r) / 2);
            const numMid = nums.at(mid);
            if (numMid === target) return mid;

            if (numMid < target) {
                l = mid + 1;
                continue;
            }

            if (numMid > target) {
                r = mid - 1;
                continue;
            }
        }

        return -1;
    }
}
