const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49

const height2 = [1, 1];
// Output: 1

const height3 = [2, 3, 4, 5, 18, 17, 6];
// Output: 17

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let result = 0;
  while (l < r) {
    const elementFromStart = height[l];
    const elementFromEnd = height[r];
    const minHeight = Math.min(elementFromStart, elementFromEnd);
    const area = (r - l) * minHeight;
    if (elementFromStart >= elementFromEnd) {
      r--;
    } else {
      l++;
    }
    result = result < area ? area : result;
  }
  return result;
};

// var maxArea = function (height) {
//   let result = 0;
//   for (let l = 0; l < height.length; l++) {
//     const elementFromStart = height[l];
//     for (let r = height.length - 1; r > 0 && r > l; r--) {
//       const elementFromEnd = height[r];

//       const minHeight = Math.min(elementFromStart, elementFromEnd);
//       const area = (r - l) * minHeight;

//       if (result < area) {
//         result = area;
//       }
//     }
//   }
//   return result;
// };

console.log(maxArea(height1), 49);
console.log(maxArea(height2), 1);
console.log(maxArea(height3), 17);
