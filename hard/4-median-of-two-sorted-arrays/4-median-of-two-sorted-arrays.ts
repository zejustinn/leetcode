/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return
 * the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let result = 0
  const arraysMerged = mergeArraysInASortedWay(nums1, nums2)

  if(isArrayLengthOdd(arraysMerged)) {
    result = arraysMerged[((arraysMerged.length + 1) / 2) - 1]
  } else {
    result = (arraysMerged[(arraysMerged.length / 2) - 1] + arraysMerged[arraysMerged.length / 2]) / 2
  }

  return result
};

function mergeArraysInASortedWay(array1: number[], array2: number[]): number[] {
  const concatedArrays = array1.concat(array2)

  return concatedArrays.sort((a, b) => a < b ? -1 : 1)
}

function isArrayLengthOdd(array: number[]): boolean {
  return array.length % 2 !== 0
}

export {
  findMedianSortedArrays,
  isArrayLengthOdd,
  mergeArraysInASortedWay,
}
