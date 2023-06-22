// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
const nums1 = [-1, 0, 3, 5, 9, 12],
  target1 = 9;

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
const nums2 = [-1, 0, 3, 5, 9, 12],
  target2 = 2;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let middle = Math.floor((r + l) / 2);
    if (nums[middle] > target) {
      r = middle - 1;
    } else if (nums[middle] < target) {
      l = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
};

console.log(search(nums1, target1), "Output: 4");
console.log(search(nums2, target2), "Output: -1");
