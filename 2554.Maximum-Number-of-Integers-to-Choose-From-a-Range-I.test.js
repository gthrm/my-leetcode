/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
const maxCount = function (banned, n, maxSum) {
  let nValue = 1;
  let currentSum = 0;
  let count = 0;

  const bannedSet = new Set(banned);

  while (nValue <= n) {
    if (!bannedSet.has(nValue)) {
      count++;
      currentSum += nValue;

      if (currentSum > maxSum) {
        return count - 1;
      }
    }

    nValue++;
  }

  return count;
};

describe('2554. Maximum Number of Integers to Choose From a Range I', () => {
  it('should return 2', () => {
    const banned = [1, 6, 5];
    const n = 5;
    const maxSum = 6;

    const actualOutput = maxCount(banned, n, maxSum);

    expect(actualOutput).toEqual(2);
  });

  it('should return 0', () => {
    const banned = [1, 2, 3, 4, 5, 6, 7];
    const n = 8;
    const maxSum = 1;

    const actualOutput = maxCount(banned, n, maxSum);

    expect(actualOutput).toEqual(0);
  });

  it('should return 0', () => {
    const banned = [11];
    const n = 7;
    const maxSum = 50;

    const actualOutput = maxCount(banned, n, maxSum);

    expect(actualOutput).toEqual(7);
  });
});
