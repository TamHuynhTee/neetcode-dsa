class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */

    trap(height: number[]): number {
        let totalTrap = 0;
        // let l = 0, r = height.length - 1;
        const maxLeft: number[] = new Array(height.length).fill(0);
        const maxRight: number[] = new Array(height.length).fill(0);

        for (let i = 1; i < height.length; i++) {
            if (height[i - 1] > maxLeft[i - 1]) maxLeft[i] = height[i - 1];
            else maxLeft[i] = maxLeft[i - 1];
        }

        for (let i = height.length - 2; i >= 0; i--) {
            if (height[i + 1] > maxRight[i + 1]) maxRight[i] = height[i + 1];
            else maxRight[i] = maxRight[i + 1];
        }
        
        for (let i = 0; i < height.length; i++) {
            const minH = Math.min(maxLeft[i], maxRight[i]);
            totalTrap += (minH - height[i] > 0 ? minH - height[i] : 0);
        }
        
        return totalTrap;
    }
}
