class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if (prices.length === 1) return 0;

        let max = 0, buyAt = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < prices[buyAt]) buyAt = i;
            const profit = prices[i] - prices[buyAt];
            if (profit > max) max = profit
        }

        return max
    }
}
