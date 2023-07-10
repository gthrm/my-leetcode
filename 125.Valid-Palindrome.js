const case1 = 'A man, a plan, a canal: Panama';
const case2 = 'race a car';
const case3 = ' ';
const case4 = '0P';
const case5 = '0P0';

/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (s) {
//   const str = s.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
//   for (let index = 0; index < Math.floor(str.length / 2); index++) {
//     const numberFromStart = str[index];
//     const numberFromEnd = str[str.length - 1 - index];
//     if (numberFromStart !== numberFromEnd) {
//       return false;
//     }
//   }
//   return true;
// };

const isPalindrome = function (s) {
  const cleanString = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
  for (let index = 0; index < cleanString.length / 2; index++) {
    const elementFromStart = cleanString[index];
    const elementFromEnd = cleanString[cleanString.length - 1 - index];
    if (elementFromStart !== elementFromEnd) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(case1), 'is true');
console.log(isPalindrome(case2), 'is false');
console.log(isPalindrome(case3), 'is true');
console.log(isPalindrome(case4), 'is false');
console.log(isPalindrome(case5), 'is true');
