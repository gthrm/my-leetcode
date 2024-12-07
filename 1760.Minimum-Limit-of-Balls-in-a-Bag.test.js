/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
const minimumSize = function (nums, maxOperations) {
  let left = 1;
  let right = Math.max(...nums);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let ops = 0;

    for (const num of nums) {
      ops += Math.floor((num - 1) / mid);

      if (ops > maxOperations) break;
    }

    if (ops <= maxOperations) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

describe('1760. Minimum Limit of Balls in a Bag', () => {
  it('should return 3', () => {
    const nums = [9];
    const maxOperations = 2;

    const actualOutput = minimumSize(nums, maxOperations);

    expect(actualOutput).toEqual(3);
  });

  it('should return 2', () => {
    const nums = [2, 4, 8, 2];
    const maxOperations = 4;

    const actualOutput = minimumSize(nums, maxOperations);

    expect(actualOutput).toEqual(2);
  });
});
