const case1 = ['flower', 'flow', 'flight']; // "fl"
const case2 = ['dog', 'racecar', 'car']; // ""
const case3 = ['ab', 'a']; // "a"
const case4 = ['ab', 'abc', 'abdreujjf']; // "a"
const case5 = ['reflower', 'flow', 'flight']; // ""
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const sortedStrings = strs.sort(
    (string1, string2) => string1.length - string2.length,
  );
  let firstElement = sortedStrings.shift();

  for (let index0 = 0; index0 < sortedStrings.length; index0++) {
    for (let index = 0; index < sortedStrings[index0].length; index++) {
      if (sortedStrings[index0][index] !== firstElement[index]) {
        firstElement = firstElement.slice(0, index);
      }
    }
  }
  return firstElement;
};

console.log(longestCommonPrefix(case1), 'fl');
console.log(longestCommonPrefix(case2), '');
console.log(longestCommonPrefix(case3), 'a');
console.log(longestCommonPrefix(case4), 'b');
console.log(longestCommonPrefix(case5), '');
