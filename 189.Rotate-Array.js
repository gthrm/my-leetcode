/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// time O(n), memory O(1)
var rotate = function (nums, k) {
    if (nums.length === 1) {
        return nums
    }
    k = k % nums.length
    function rotateInternal(array, startIndex, endIndex) {
        let left = startIndex
        let right = endIndex
        while (left < right) {
            [array[left], array[right]] = [array[right], array[left]]
            left++
            right--
        }
    }

    rotateInternal(nums, 0, nums.length - 1)
    rotateInternal(nums, 0, k - 1)
    rotateInternal(nums, k, nums.length - 1)
};

// time O(n), memory O(n)
// var rotate = function (nums, k) {
//     if (nums.length === 1) {
//         return nums
//     }
//     k = k % nums.length
//     const lastElements = nums.splice(nums.length - k, k)
//     nums.unshift(...lastElements)
// };