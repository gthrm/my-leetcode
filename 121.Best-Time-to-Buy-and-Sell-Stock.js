const case1 = [7, 1, 5, 3, 6, 4]; // Output: 5
const case2 = [7, 6, 4, 3, 1]; // Output: 0
const case3 = [1]; // Output: 0
const case4 = [2, 4, 1]; // Output:2
const case5 = [3, 2, 6, 5, 0, 3]; // Output:4
/**
 * @param {number[]} prices
 * @return {number}
 */
// const maxProfit = function (prices) {
//   let input = null;
//   let output = 0;
//   let result = 0;
//   for (let index = 0; index < prices.length; index++) {
//     if (
//       input === null ||
//       (input > prices[index] && prices.length > index + 1)
//     ) {
//       input = prices[index];
//       output = prices[index];
//     }

//     if (output < prices[index]) {
//       output = prices[index];
//     }
//     const temp = output - input > 0 ? output - input : 0;
//     if (result < temp) {
//       result = temp;
//     }
//   }
//   return result;
// };

// const maxProfit = function (prices) {
//   let l = prices[0];
//   let r = prices[1] || prices[0];
//   let result = 0;
//   for (let index = 1; index < prices.length; index++) {
//     if (l > prices[index] && prices[index + 1]) {
//       l = prices[index];
//       r = prices[index + 1];
//     } else if (r < prices[index]) {
//       r = prices[index];
//     }
//     if (result < r - l) {
//       result = r - l;
//     }
//   }
//   return result;
// };

const maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let max = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      const profit = prices[r] - prices[l];
      if (max < profit) {
        max = profit;
      }
      r++;
    } else {
      l = r;
      r++;
    }
  }
  return max;
};

console.log(maxProfit(case1), 'Output: 5');
console.log(maxProfit(case2), 'Output: 0');
console.log(maxProfit(case3), 'Output: 0');
console.log(maxProfit(case4), 'Output: 2');
console.log(maxProfit(case5), 'Output: 4');
