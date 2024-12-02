/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = function (sentence, searchWord) {
  let sentencePoint = 0;
  let wordPoint = 0;
  let wordIsMatches = true;
  let wordNumber = 1;

  const spaceCharCode = 32;

  while (sentencePoint < sentence.length) {
    if (sentence[sentencePoint] === searchWord[wordPoint]) {
      if (wordIsMatches && wordPoint === searchWord.length - 1) {
        return wordNumber;
      }
      wordPoint++;
    } else {
      wordIsMatches = false;
    }

    if (sentence.charCodeAt(sentencePoint) === spaceCharCode) {
      wordIsMatches = true;
      wordPoint = 0;
      wordNumber++;
    }

    sentencePoint++;
  }

  return -1;
};

describe('1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence', () => {
  it('should return 4', () => {
    const test1 = 'i love eating burger';
    const test2 = 'burg';
    const expectedOutput = 4;

    const actualOutput = isPrefixOfWord(test1, test2);

    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should return 2', () => {
    const test3 = 'this problem is an easy problem';
    const test4 = 'pro';
    const expectedOutput = 2;

    const actualOutput = isPrefixOfWord(test3, test4);

    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should return -1', () => {
    const test5 = 'i am tired';
    const test6 = 'you';
    const expectedOutput = -1;

    const actualOutput = isPrefixOfWord(test5, test6);

    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should return 3', () => {
    const test7 = 'hello from the other side';
    const test8 = 'they';
    const expectedOutput = -1;

    const actualOutput = isPrefixOfWord(test7, test8);

    expect(actualOutput).toEqual(expectedOutput);
  });
});
