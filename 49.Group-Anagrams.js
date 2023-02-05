const case1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const case2 = [""];
// Output: [[""]]

const case3 = ["a"];
// Output: [["a"]];

const case4 = ["", "b"];
// Output: [["b"],[""]]

const case5 = ["", "", ""];
// Output: [["","",""]]


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let index = 0; index < strs.length; index++) {
    const currentString = strs[index];

    const letterFrequencyMap = new Map();
    for (let index = 0; index < currentString.length; index++) {
      const later = currentString[index];
      const frequency = letterFrequencyMap.has(later)
        ? letterFrequencyMap.get(later) + 1
        : 1;
      letterFrequencyMap.set(later, frequency);
    }
    let mapKey = [];
    for (const [later, frequency] of letterFrequencyMap) {
      mapKey.push(`${frequency}${later}`);
    }
    mapKey = mapKey.sort().join();

    const mapValue = map.has(mapKey)
      ? [...map.get(mapKey), currentString]
      : [currentString];

    map.set(mapKey, mapValue);
  }

  return [...map.values()];
};

console.log(
  groupAnagrams(case1),
  '[["bat"],["nat","tan"],["ate","eat","tea"]]'
);
console.log(groupAnagrams(case2), '[[""]]');
console.log(groupAnagrams(case3), '[["a"]]');
console.log(groupAnagrams(case4), '[["b"],[""]]');
console.log(groupAnagrams(case5), '[["","",""]]');
