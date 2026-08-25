class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = new Map();

        // count frequency
        for (const num of nums) {
            if (!frequency.has(num)) {
                frequency.set(num, 0);
            }

            frequency.set(num, frequency.get(num) + 1);
        }

        // sort frequency desc
        const result =  Array.from(frequency.entries()).sort((a, b) => b[1] - a[1]).map(f => f[0]);

        return result.slice(0, k);
    }
}
