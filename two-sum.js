/**
 * Array: [2,7,11,15], target: 9, Runtime: 80 ms, Memory: 38.8 MB
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums = [], target) {
  if (nums.length < 2 || nums.length > 10 ** 3) {
    throw Error('Nums length must be 2 <= nums.length <= 10**3');
  }
  if (target < (-10) ** 9 || target > 10 ** 9) {
    throw Error('Target must be -10**9 <= target <= 10**9');
  }

  const tempArray = [...nums];

  for (let i = 0; i < nums.length; i++) {
    const tempNum = tempArray.shift();
    console.log(`i: ${i} = ${nums[i]}`);
    console.log('tempNum', tempNum);
    console.log('tempArray', tempArray);

    for (let j = 0; j < tempArray.length; j++) {
      console.log(`j: ${j} = ${tempArray[j]}`);
      if (tempNum + tempArray[j] === target) {
        return [i, nums.length - tempArray.length + j];
      }
      console.log('NOT MATCH');
    }
    if (i === nums.length - 1) {
      throw Error('No matching values');
    }
  }
};

/**
 * Array: [2,7,11,15], target: 9, Runtime: 68 ms, Memory: 39 MB
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = function (nums = [], target) {
  const hashStore = {};
  for (const index in nums) {
    const temp = target - nums[index];
    if (hashStore[temp]) {
      return [hashStore[temp], index];
    }
    hashStore[nums[index]] = index;
  }
  return null;
};

console.log('result: ', twoSum([2, 7, 11, 15], 9));
