const case1 = 121;
const case2 = -121;
const case3 = 10;
const case4 = 0;

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }

  if (x % 10 === 0) {
    return false;
  }

  let reversNum = 0;
  while (x > reversNum) {
    reversNum = reversNum * 10;
    reversNum = reversNum + (x % 10);
    x = Math.trunc(x / 10);
  }

  return x === reversNum || x === Math.trunc(reversNum / 10);
};

console.log(isPalindrome(case1), 'is true');
console.log(isPalindrome(case2), 'is false');
console.log(isPalindrome(case3), 'is false');
console.log(isPalindrome(case4), 'is true');
