import {
  findMedianSortedArrays,
  isArrayLengthOdd,
  mergeArraysInASortedWay,
} from './4-median-of-two-sorted-arrays'
import { expect } from "chai";

describe('4. Median of Two Sorted Arrays', () => {
  it('1', () => {
      const array1 = [2, 3]
      const array2 = [1]

      const mergedArray = mergeArraysInASortedWay(array1, array2)

      expect(mergedArray).deep.equal([1, 2, 3])
  })

  it('2', () => {
      const array = [1, 2, 3]

      const isOdd = isArrayLengthOdd(array)

      expect(isOdd).true
  })

  it('3', () => {
    const array = [1, 2, 3, 4]

    const isOdd = isArrayLengthOdd(array)

    expect(isOdd).false
  })

  it('Example 1', () => {
    const array1 = [1, 3]
    const array2 = [2]

    const median = findMedianSortedArrays(array1, array2)

    expect(median).equal(2)
  })

  it('Example 2', () => {
    const array1 = [1, 2]
    const array2 = [3, 4]

    const median = findMedianSortedArrays(array1, array2)

    expect(median).equal(2.5)
  })

  it('Error 1', () => {
    const array1 = [3]
    const array2 = [-2, -1]

    const median = findMedianSortedArrays(array1, array2)

    expect(median).equal(-1)
  })
})
