// Input: chars = ["a","a","b","b","c","c","c"]
// eslint-disable-next-line max-len
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

const chars1 = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
const chars2 = ['a'];
const chars3 = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  let read = 0;
  let write = 0;
  let count = 1;

  while (read < chars.length) {
    if (chars[read] !== chars[read + 1]) {
      chars[write] = chars[read];
      write++;
      if (count > 1) {
        const stringCount = count.toString();
        for (const later of stringCount) {
          chars[write] = later;
          write++;
        }
      }
      count = 1;
    } else {
      count++;
    }
    read++;
  }
  return write;
};

console.log(compress(chars1), 'Return 6');
// console.log(compress(chars2), 'Return 1');
// console.log(compress(chars3), 'Return 4');
