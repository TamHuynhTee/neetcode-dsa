class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let totalProduct = 1, zeroCount = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) zeroCount++;

            if (nums[i] !== 0) totalProduct = totalProduct * nums[i];
        }
        const result = [...nums];
        
        for (let i = 0; i < result.length; i++) {
            if (zeroCount > 1) {
                result[i] = 0;
            }
            
            if (zeroCount === 1) {
                if (result[i] !== 0)
                    result[i] = 0;
                else result[i] = totalProduct;
            }

            if (!zeroCount) {
                result[i] = totalProduct / result[i];
            }
        }

        return result;
    }
}
