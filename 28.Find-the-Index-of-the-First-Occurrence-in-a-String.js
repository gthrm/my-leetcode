// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Input: haystack = "leetcode", needle = "code"
// Output: 4

const haystack1 = 'sadbutsad';
const needle1 = 'sad';

const haystack2 = 'leetcode';
const needle2 = 'leeto';

const haystack3 = 'leetcode';
const needle3 = 'code';

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  let result = -1;
  for (let index = 0; index < haystack.length; index++) {
    result = index;
    for (let i = 0; i < needle.length; i++) {
      if (needle[i] === haystack[index + i]) {
        if (i === needle.length - 1) {
          return result;
        }
        continue;
      } else {
        result = -1;
        break;
      }
    }
  }
  return result;
};

console.log(strStr(haystack1, needle1), 'Output: 0');
console.log(strStr(haystack2, needle2), 'Output: -1');
console.log(strStr(haystack3, needle3), 'Output: 4');
