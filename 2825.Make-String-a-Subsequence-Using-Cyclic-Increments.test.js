/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const canMakeSubsequence = function (str1, str2) {
  let stringPoint = 0;
  let targetPoint = 0;

  while (stringPoint < str1.length && targetPoint < str2.length) {
    const charCodeString1 = str1[stringPoint].charCodeAt();
    const charCodeString2 = str1[stringPoint].charCodeAt() + 1 > 122
      ? 97
      : str1[stringPoint].charCodeAt() + 1;
    const charCodeTarget = str2[targetPoint].charCodeAt();

    if (charCodeString1 === charCodeTarget || charCodeString2 === charCodeTarget) {
      targetPoint++;
    }

    stringPoint++;
  }

  return targetPoint === str2.length;
};

describe('2825. Make String a Subsequence Using Cyclic Increments', () => {
  it('should return true', () => {
    const str1 = 'abc';
    const str2 = 'ad';

    const actualOutput = canMakeSubsequence(str1, str2);

    expect(actualOutput).toEqual(true);
  });

  it('should return true', () => {
    const str1 = 'zc';
    const str2 = 'ad';

    const actualOutput = canMakeSubsequence(str1, str2);

    expect(actualOutput).toEqual(true);
  });

  it('should return false', () => {
    const str1 = 'ab';
    const str2 = 'd';

    const actualOutput = canMakeSubsequence(str1, str2);

    expect(actualOutput).toEqual(false);
  });
});
