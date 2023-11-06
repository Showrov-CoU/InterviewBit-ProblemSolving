/**
 ** Time Complexity O(n)
 ** Space Complexity O(1)
 */

const maxProfit = (prices) => {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let sell = 1; sell < prices.length; sell++) {
    let sellPrice = prices[sell];
    let profit = sellPrice - minPrice;

    maxProfit = Math.max(maxProfit, profit);

    if (sellPrice < minPrice) minPrice = sellPrice;
  }
  return maxProfit;
};

console.log(maxProfit([1, 2, 3, 4, 5]));
