// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// function reverseWord(word) {
//   const wordArray = word.split('');
//   let [left, right] = [0, wordArray.length - 1];
//   while (left < right) {
//     const temp = wordArray[left];
//     wordArray[left] = wordArray[right];
//     wordArray[right] = temp;
//     left++;
//     right--;
//   }
//   return wordArray.join('');
// }

const s1 = "Let's take LeetCode contest";
/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  function reverseWord(string) {
    let result = '';
    for (let index = string.length - 1; index > 0; index--) {
      const element = string[index];
      result += element;
    }
    return result;
  }
  const words = s.split(' ');
  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    const reversedWord = reverseWord(word);
    words[index] = reversedWord;
  }
  return words.join(' ');
};

console.log(reverseWords(s1), '"s\'teL ekat edoCteeL tsetnoc"');
