// Input: s = "()[]{}"
// Output: true

const s1 = '()[]{}';
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  const closeToOpenHash = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (closeToOpenHash[element]) {
      if (stack.length && stack[stack.length - 1] === closeToOpenHash[element]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(element);
    }
  }
  return !stack.length;
};

console.log(isValid(s1), 'Output: true');
