const s1 = "anagram";
const t1 = "nagaram";
const s2 = "rat";
const t2 = "car";
const s3 = "aa";
const t3 = "bb";
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const temp1 = new Map();
  const temp2 = new Map();
  for (let index = 0; index < s.length; index++) {
    temp1.has(s[index])
      ? temp1.set(s[index], temp1.get(s[index]) + 1)
      : temp1.set(s[index], 1);

    temp2.has(t[index])
      ? temp2.set(t[index], temp2.get(t[index]) + 1)
      : temp2.set(t[index], 1);
  }
  for (const [key, value] of temp1) {
    const value2 = temp2.get(key);
    if (value !== value2) {
      return false;
    }
  }
  return true;
};

// var isAnagram = function (s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// };

console.log(isAnagram(s1, t1), "true");
console.log(isAnagram(s2, t2), "false");
console.log(isAnagram(s3, t3), "false");
