/* eslint-disable no-labels */
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const isArraySpecial = function (nums, queries) {
  const result = [];
  main:for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    let isEven = null;

    for (let j = start; j <= end; j++) {
      const element = nums[j];

      if (isEven === null) {
        isEven = element % 2 === 0;
      } else {
        isEven = !isEven;

        if ((element % 2 === 0 && !isEven) || (element % 2 !== 0 && isEven)) {
          result.push(false);

          continue main;
        }
      }
    }
    result.push(true);
  }

  return result;
};

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const isArraySpecial2 = function (nums, queries) {
  const invalidPairs = new Array(nums.length).fill(false);

  for (let i = 1; i < nums.length; i++) {
    if ((nums[i] % 2) === (nums[i - 1] % 2)) {
      invalidPairs[i] = true;
    }
  }

  const prefixSum = [0];
  for (let i = 1; i < invalidPairs.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + (invalidPairs[i] ? 1 : 0);
  }

  return queries.map(([start, end]) => prefixSum[end] === prefixSum[start]);
};

describe('3152. Special Array II', () => {
  it('should return [false]', () => {
    const nums = [3, 4, 1, 2, 6];
    const queries = [[0, 4]];

    const result = isArraySpecial(nums, queries);
    const result2 = isArraySpecial2(nums, queries);

    expect(result).toEqual([false]);
    expect(result2).toEqual([false]);
  });

  it('should return [false,true]', () => {
    const nums = [4, 3, 1, 6];
    const queries = [[0, 2], [2, 3]];
    const result = isArraySpecial(nums, queries);
    const result2 = isArraySpecial2(nums, queries);

    expect(result).toEqual([false, true]);
    expect(result2).toEqual([false, true]);
  });
});
