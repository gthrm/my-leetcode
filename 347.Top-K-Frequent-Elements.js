const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2; // [1,2]

const nums2 = [1];
const k2 = 1; // [1]

const nums3 = [-1, -1];
const k3 = 1; // [1,2]

const nums4 = [1, 2];
const k4 = 2; // [1,2]

const nums5 = [1, 1, 1, 2, 2, 2, 3, 3, 3];
const k5 = 3;

const nums6 = [5, 2, 5, 3, 5, 3, 1, 1, 3];
const k6 = 2; // [3,5]

const nums7 = [5, 3, 1, 1, 1, 3, 73, 1];
const k7 = 2;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const temp = new Map();
  const result = [];
  let answer = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const frequency = temp.has(element) ? temp.get(element) + 1 : 1;
    temp.set(element, frequency);
  }
  for (const [element, frequency] of temp) {
    result[frequency] = result.hasOwnProperty(frequency)
      ? [...result[frequency], element]
      : [element];
  }

  while (result.length > 0) {
    let value = result.pop();
    if (value) {
      for (let index = 0; index < value.length; index++) {
        answer.push(value[index]);
        if (answer.length === k) {
          return answer;
        }
      }
    }
  }
};

// var topKFrequent = function (nums, k) {
//   const temp = new Map();
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     temp.set(element, temp.get(element) + 1 || 1);
//   }

//   return [...temp.entries()]
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map(([key]) => key);
// };

console.log(topKFrequent(nums1, k1), "[1,2]");
console.log(topKFrequent(nums2, k2), "[1]");
console.log(topKFrequent(nums3, k3), "[-1]");
console.log(topKFrequent(nums4, k4), "[1, 2]");
console.log(topKFrequent(nums5, k5), "[1,2,3]");
console.log(topKFrequent(nums6, k6), "[3,5]");
console.log(topKFrequent(nums7, k7), "[ 1, 3 ]");
