/**
* @param {number[]} arr
* @return {boolean}
 */
const checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const element1 = arr[i];

    for (let j = arr.length - 1; j >= 0; j--) {
      const element2 = arr[j];

      if (i !== j && i >= 0 && j < arr.length && element1 === 2 * element2) {
        return true;
      }
    }
  }
  return false;
};

describe('1346. Check If N and Its Double Exist', () => {
  it('should return true', () => {
    const test1 = [10, 2, 5, 3];
    const expectedOutput = true;

    const actualOutput = checkIfExist(test1);

    expect(actualOutput).toEqual(expectedOutput);
  });

  it.only('should return true', () => {
    const test2 = [7, 1, 14, 11];
    const expectedOutput = true;

    const actualOutput = checkIfExist(test2);

    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should return false', () => {
    const test3 = [3, 1, 7, 11];
    const expectedOutput = false;

    const actualOutput = checkIfExist(test3);

    expect(actualOutput).toEqual(expectedOutput);
  });
});
