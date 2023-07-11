// Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
// Output: 1

const startTime1 = [1, 2, 3];
const endTime1 = [3, 2, 7];
const queryTime1 = 4;

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
// const busyStudent = function (startTime, endTime, queryTime) {
//   let result = 0;
//   let index = 0;
//     for (let index = 0; index < startTime.length; index++) {
//       const startTimeStuden = startTime[index];
//       const endTimeStuden = endTime[index];
//       if (startTimeStuden <= queryTime && queryTime <= endTimeStuden) {
//         result++;
//       }
//     }
//   return result;
// };

const busyStudent = function (startTime, endTime, queryTime) {
  let result = 0;
  let index = 0;

  while (endTime[index] <= queryTime) {
    index++;
    const startTimeStuden = startTime[index];
    const endTimeStuden = endTime[index];
    if (startTimeStuden <= queryTime && queryTime <= endTimeStuden) {
      result++;
    }
  }

  return result;
};

console.log(busyStudent(startTime1, endTime1, queryTime1), 'Output: 1');
