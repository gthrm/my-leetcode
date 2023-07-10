const s1 = 'abcabcbb';
// Output: 3

const s2 = 'bbbbb';
// Output: 1

const s3 = 'pwwkew';
// Output: 3

const s4 = 'au';
// Output: 3

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   if (s.length === 0) {
//     return 0;
//   }
//   if (s.length === 1) {
//     return 1;
//   }
//   let temp = new Set();
//   let l = 0;
//   let r = 1;
//   let max = 0;
//   while (r < s.length) {
//     const start = s[l];
//     const end = s[r];
//     temp.add(start);
//     if (temp.has(end)) {
//       temp.clear();

//       l = r;
//       r = l + 1;
//     } else {
//       temp.add(end);
//       r++;
//     }
//     max = max < r - l ? r - l : max;
//   }
//   return max;
// };

const lengthOfLongestSubstring = function (s) {
  const temp = new Set();
  let l = 0;
  let max = 0;
  for (let r = 0; r < s.length; r++) {
    const element = s[r];
    while (temp.has(element)) {
      temp.delete(s[l]);
      l++;
    }
    temp.add(element);
    max = Math.max(max, r - l + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring(s1), 3);
console.log(lengthOfLongestSubstring(s2), 1);
console.log(lengthOfLongestSubstring(s3), 3);
console.log(lengthOfLongestSubstring(s4), 2);
