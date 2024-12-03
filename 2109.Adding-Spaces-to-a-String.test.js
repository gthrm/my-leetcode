/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
const addSpaces = function (s, spaces) {
  const result = [];
  let sPoint = 0;

  for (let i = 0; i < spaces.length; i++) {
    const currentSpaceIndex = spaces[i];
    while (sPoint < currentSpaceIndex) {
      result.push(s[sPoint]);
      sPoint++;
    }
    result.push(' ');
  }

  while (sPoint < s.length) {
    result.push(s[sPoint]);
    sPoint++;
  }
  return result.join('');
};

const addSpaces2 = function (s, spaces) {
  const result = [];
  let sPoint = 0;
  let spacesPoint = 0;

  if (spaces[spacesPoint] === 0) {
    result.push(' ');
    spacesPoint++;
  }

  while (spacesPoint <= spaces.length) {
    const sSubString = s.substring(sPoint, spaces[spacesPoint]);

    result.push(sSubString);

    if (spacesPoint < spaces.length) {
      result.push(' ');
    }

    sPoint = spaces[spacesPoint];
    spacesPoint++;
  }

  return result.join('');
};

describe('2109. Adding Spaces to a String', () => {
  it('should return "Leetcode Helps Me Learn"', () => {
    const test1 = 'LeetcodeHelpsMeLearn';
    const test2 = [8, 13, 15];
    const expectedOutput = 'Leetcode Helps Me Learn';

    const actualOutput = addSpaces2(test1, test2);

    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should return "i code in py thon"', () => {
    const test3 = 'icodeinpython';
    const test4 = [1, 5, 7, 9];
    const expectedOutput = 'i code in py thon';

    const actualOutput = addSpaces2(test3, test4);

    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should return "spacing"', () => {
    const test5 = 'spacing';
    const test6 = [0, 1, 2, 3, 4, 5, 6];
    const expectedOutput = ' s p a c i n g';

    const actualOutput = addSpaces2(test5, test6);

    expect(actualOutput).toEqual(expectedOutput);
  });
});
