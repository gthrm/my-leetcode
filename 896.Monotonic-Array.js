// Input: nums = [1,2,2,3]
// Output: true
const nums1 = [1, 2, 2, 3];
const nums2 = [1, 3, 0];
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function (nums) {
  function getDirection(element1, element2) {
    if (element1 < element2) {
      return 1;
    }
    if (element1 > element2) {
      return -1;
    }
    return 0;
  }

  let direction = 0;
  for (let index = 0; index < nums.length; index++) {
    const element1 = nums[index];
    const element2 = nums[index + 1];
    if (typeof element1 === 'number' && typeof element2 === 'number') {
      const currentDirection = getDirection(element1, element2);
      console.log('currentDirection', currentDirection, 'element1', element1, 'element2', element2);
      if (direction === 0) {
        direction = currentDirection;
      } else if (currentDirection !== 0 && direction !== currentDirection) {
        return false;
      }
    }
  }
  return true;
};

// console.log(isMonotonic(nums1), 'Output: true');
console.log(isMonotonic(nums2), 'Output: false');
