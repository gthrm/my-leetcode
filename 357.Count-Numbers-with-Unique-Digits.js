/**
 * @param {number} n
 * @return {number}
 */
// var countNumbersWithUniqueDigits = function (n) {
//   if (n === 0) {
//     return 1;
//   }
//   if (n === 1) {
//     return 10;
//   }
//   let num = Math.pow(10, n);
//   let count = 0;

//   while (num >= 0) {
//     let currentNum = num;
//     const hash = new Array(n + 1).fill(false);
//     for (let index = 0; index < (n + 1); index++) {
//       const char = currentNum % 10;
//       if (currentNum > 0 || (index === 0 && currentNum == 0)) {
//         currentNum = Math.trunc(currentNum / 10);

//         hash[n - index] = char;
//       }
//     }

//     const filteredHash = hash.filter((item) => typeof item === "number");

//     if (
//       filteredHash.length > 0 &&
//       filteredHash.length === new Set(filteredHash).size
//     ) {
//       count++;
//     }
//     num--;
//   }
//   return count;
// };

var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) {
    return 1;
  }
  let answer = 10;
  let start = 9;
  let current = 9;
  for (let index = 1; index < n; index++) {
    current = current * start;
    start--;
    answer = answer + current;
  }

  return answer;
};

console.log(1, countNumbersWithUniqueDigits(0));
console.log(10, countNumbersWithUniqueDigits(1));
console.log(91, countNumbersWithUniqueDigits(2));
console.log(739, countNumbersWithUniqueDigits(3));
console.log(5275, countNumbersWithUniqueDigits(4));
console.log(2345851, countNumbersWithUniqueDigits(8));
