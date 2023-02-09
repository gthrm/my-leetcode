const nums1 = [100, 4, 200, 1, 3, 2];
// Output: 4;

const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// Output: 9

const nums3 = [0, -1];
// Output: 2

const nums4 = [0, 1, 2, 4, 8, 5, 6, 7, 9, 3, 55, 88, 77, 99, 999999999];
// Output: 10

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numsSet = new Set(nums);
  let longest = 0;
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];

    // this is a start of a sequence
    if (!numsSet.has(num - 1)) {
      let i = 0;
      while (numsSet.has(num + i)) {
        i++;
      }
      longest = longest < i ? i : longest;
    }
  }
  return longest;
};

console.log(longestConsecutive(nums1), "4");
console.log(longestConsecutive(nums2), "9");
console.log(longestConsecutive(nums3), "2");
console.log(longestConsecutive(nums4), "10");
