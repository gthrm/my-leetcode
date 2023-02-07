const nums1 = [1, 2, 3, 4];
// Output: [24,12,8,6]

const nums2 = [-1, 1, 0, -3, 3];
// Output: [0,0,9,0,0]

const nums3 = [1, 2, 3, 4];
// Output: [24,12,8,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   let map = [];
//   for (let index = 0; index < nums.length; index++) {
//     const elements = [...nums];
//     elements.splice(index, 1);
//     map[index] = elements.reduce((acc, num) => {
//       acc = acc * num;
//       return acc;
//     }, 1);
//   }
//   return map;
// };

var productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(1);
  let prefix = 1;
  let postfix = 1;
  for (let index = 0; index < nums.length; index++) {
    const reversedIndex = nums.length - index - 1;

    const numFromLeft = nums[index];
    const numFromRight = nums[reversedIndex];

    if (!(index > nums.length - 1)) {
      result[index] = result[index] * prefix;
    }
    prefix = prefix * numFromLeft;

    if (!(reversedIndex < 0)) {
      result[reversedIndex] = result[reversedIndex] * postfix;
    }
    postfix = postfix * numFromRight;
  }
  return result;
};

console.log(productExceptSelf(nums1), "Output: [24,12,8,6]");
console.log(productExceptSelf(nums2), "Output: [0,0,9,0,0]");
console.log(productExceptSelf(nums3), "Output: [24,12,8,6]");
