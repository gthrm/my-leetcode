const nums1 = [2, 7, 11, 15];
const target1 = 9;
const nums2 = [3, 2, 4];
const target2 = 6;
const nums3 = [3, 3];
const target3 = 6;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   let i = 0;
//   while (nums.length > 0) {
//     const num = nums.shift();
//     for (let index = 0; index < nums.length; index++) {
//       const element = nums[index];
//       if (num + element === target) {
//         return [i, index + 1 + i];
//       }
//     }
//     i++;
//   }
// };

const twoSum = function (nums, target) {
  if (nums.length === 2) {
    return [0, 1];
  }
  const temp = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (temp.hasOwnProperty(target - element)) {
      return [temp[target - element], index];
    }
    temp[element] = index;
  }
};

console.log(twoSum(nums1, target1), '[0,1]');
console.log(twoSum(nums2, target2), '[1,2]');
console.log(twoSum(nums3, target3), '[0,1]');
