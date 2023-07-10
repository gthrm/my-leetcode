/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const map = {};
  let start = 0;
  let maxLen = 0;
  const arr = s.split('');

  for (i = 0; i < s.length; i++) {
    const current = map[arr[i]];

    if ((current !== null || current !== undefined) && start <= current) {
      start = current + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }

    map[arr[i]] = i;
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring('pwwkew'));
