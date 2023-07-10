const s1 = 'ABAB';
const k1 = 2;
// Output: 4

const s2 = 'AABABBA';
const k2 = 1;
// Output: 4

const s3 = 'ABBB';
const k3 = 2;
// Output: 4

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
  const map = new Map();
  let res = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    map.set(s[r], map.has(s[r]) ? map.get(s[r]) + 1 : 1);
    const windowSize = r - l + 1;
    const mapValues = [...map.values()];
    const maxFrequency = Math.max(...mapValues);
    if (windowSize - maxFrequency > k) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};

console.log(characterReplacement(s1, k1), 4);
console.log(characterReplacement(s2, k2), 4);
console.log(characterReplacement(s3, k3), 4);
