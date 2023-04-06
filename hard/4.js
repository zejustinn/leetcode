const assert = require('node:assert');

/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return
 * the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */
const mergeArraysInASortedWay = (array1, array2) => {
  const concatedArrays = array1.concat(array2)

  return concatedArrays.sort((a, b) => a < b ? -1 : 1)
}

assert.deepEqual(mergeArraysInASortedWay([2, 3], [1, 2, 3]), [1, 2, 2, 3, 3])

const isArrayLengthOdd = (array) => {
  return array.length % 2 !== 0
}

assert.deepEqual(isArrayLengthOdd([1, 2, 3]), true)
assert.deepEqual(isArrayLengthOdd([1, 2, 3, 4]), false)

const findMedianSortedArrays = (nums1, nums2) => {
  let result = 0
  const arraysMerged = mergeArraysInASortedWay(nums1, nums2)

  if (isArrayLengthOdd(arraysMerged)) {
    result = arraysMerged[((arraysMerged.length + 1) / 2) - 1]
  } else {
    result = (arraysMerged[(arraysMerged.length / 2) - 1] + arraysMerged[arraysMerged.length / 2]) / 2
  }

  return result
};

assert.deepEqual(findMedianSortedArrays([1, 3], [2]), 2)
assert.deepEqual(findMedianSortedArrays([1, 2], [3, 4]), 2.5)
assert.deepEqual(findMedianSortedArrays([3], [-2, -1]), -1)
