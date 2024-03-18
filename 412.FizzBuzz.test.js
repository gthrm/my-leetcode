const n1 = 3;
const output1 = ['1', '2', 'Fizz'];

const n2 = 5;
const output2 = ['1', '2', 'Fizz', '4', 'Buzz'];

const n3 = 15;
const output3 = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'];

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(`${i}`);
    }
  }
  return result;
};

test('output1', () => {
  const n = n1;
  const expectedOutput = output1;
  const actualOutput = fizzBuzz(n);
  expect(actualOutput).toEqual(expectedOutput);
});

test('output2', () => {
  const n = n2;
  const expectedOutput = output2;
  const actualOutput = fizzBuzz(n);
  expect(actualOutput).toEqual(expectedOutput);
});

test('output3', () => {
  const n = n3;
  const expectedOutput = output3;
  const actualOutput = fizzBuzz(n);
  expect(actualOutput).toEqual(expectedOutput);
});
