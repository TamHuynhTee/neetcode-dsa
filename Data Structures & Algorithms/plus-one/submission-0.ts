class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */

    /**
     *  727
     * +
     *  414
     * -----
     *    11
     */
    plusOne(digits: number[]): number[] {
        const result = [];
        let remainder = 0;
        for (let i = digits.length - 1; i >= 0; i--) {
            const realSum = digits[i] + remainder + (i === digits.length - 1 ? 1 : 0);
            
            result.unshift(realSum % 10);
            remainder = Math.floor(realSum / 10);
        }

        if (remainder) result.unshift(remainder);

        return result;
    }
}
