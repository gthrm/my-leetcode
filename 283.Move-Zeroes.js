// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// const moveZeroes = function (nums) {
//   let i = 0;
//   while (i < nums.length) {
//     const element = nums[i];
//     if (element === 0) {
//       const deletedNull = nums.splice(i, 1);
//       nums.push(deletedNull);
//     } else {
//       i++;
//     }
//   }
// };

// const moveZeroes = function (nums) {
//   let left = 0;
//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] !== 0) {
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       left++;
//     }
//   }
// };

const moveZeroes = function (nums) {
  let [left, right] = [0, 0];
  while (right < nums.length) {
    if (nums[right]) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }
    right++;
  }
};
