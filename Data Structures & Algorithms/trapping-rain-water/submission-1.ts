class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */

    trap(height: number[]): number {
        let totalTrap = 0;
        let l = 0, r = height.length - 1;
        let maxLeft = height[l], maxRight = height[r];
        
        while (l < r) {
            if (height[l] <= height[r]) {
                totalTrap += (maxLeft - height[l] > 0) ? maxLeft - height[l] : 0;
                l++;
            } else {
                totalTrap += (maxRight - height[r] > 0) ? maxRight - height[r] : 0;
                r--;
            }

            if (maxLeft < height[l]) maxLeft = height[l];
            if (maxRight < height[r]) maxRight = height[r];
        }
        
        return totalTrap;
    }
}
