const nums1 = [2, 2, 1];
// Output: 1

const nums2 = [4, 1, 2, 1, 2];
// Output: 4

const nums3 = [1];
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let result = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    result = result ^ element;
    console.log('element', element, 'result', result);
  }
  return result;
};

console.log(singleNumber(nums1), 1);
console.log(singleNumber(nums2), 4);
console.log(singleNumber(nums3), 1);
