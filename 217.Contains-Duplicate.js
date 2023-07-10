const case1 = [1, 2, 3, 1]; // true
const case2 = [1, 2, 3, 4]; // false
const case3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; // true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// const containsDuplicate = function (nums) {
//   const temp = {};
//   while (nums.length > 0) {
//     const key = nums.shift();
//     if (temp.hasOwnProperty(key)) {
//       return true;
//     }
//     temp[key] = true;
//   }
//   return false;
// };

const containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

// var containsDuplicate = function (nums) {
//   const temp = new Set();
//   while (nums.length > 0) {
//     const num = nums.shift();
//     if (temp.has(num)) {
//       return true;
//     }
//     temp.add(num);
//   }
//   return false;
// };

// var containsDuplicate = function (nums) {
//   var t = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (t.has(nums[i])) {
//       return true;
//     }
//     t.add(nums[i]);
//   }
//   return false;
// };

console.log(containsDuplicate(case1), 'true');
console.log(containsDuplicate(case2), 'false');
console.log(containsDuplicate(case3), 'true');
