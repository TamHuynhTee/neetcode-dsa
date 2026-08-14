class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxAmount = 0;
        let l = 0, r = heights.length - 1;

        while (l < r) {
            const length = r - l;
            const amount = length * Math.min(heights[l], heights[r]);

            if (amount > maxAmount) maxAmount = amount;
            
            if (heights[l] < heights[r]) l++;
            else r--;
        }

        return maxAmount;
    }
}
