const case1 = [7, 1, 5, 3, 6, 4]; // Output: 5
const case2 = [7, 6, 4, 3, 1]; // Output: 0

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let input = null;
  let output = 0;
  let result = 0;
  for (let index = 0; index < prices.length; index++) {
    if (
      input === null ||
      (input > prices[index] && prices.length > index + 1)
    ) {
      input = prices[index];
      output = prices[index];
    }

    if (output < prices[index]) {
      output = prices[index];
    }
    const temp = output - input > 0 ? output - input : 0;
    if (result < temp) {
      result = temp;
    }
  }
  return result;
};

console.log(maxProfit(case1), "Output: 5");
console.log(maxProfit(case2), "Output: 0");
