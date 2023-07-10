// Input: seats = [1,0,0,0,1,0,1]
// Output: 2

const seats1 = [1, 0, 0, 0, 1, 0, 1];

/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = function (seats) {
  let longestResult = 1;
  let left = 0;
  let right = 0;
  while (left < seats.length) {
    const element = seats[left];
    if (element === 0) {
      let longestSize = 1;
      while (seats[right + 1] === 0) {
        right++;
        longestSize++;
      }

      if (seats[left - 1] === undefined || seats[right + 1] === undefined) {
        longestResult = Math.max(longestResult, longestSize);
      } else {
        longestResult = Math.max(longestResult, Math.round(longestSize / 2));
      }
      left = right + 1;
    } else {
      left++;
    }
  }

  return longestResult;
};

console.log(maxDistToClosest(seats1), 'Output: 2');
