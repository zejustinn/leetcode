import TwoSumTest from "./test/TwoSumTest"

describe('1. two sum', () => {
  let twoSumTest: TwoSumTest

  beforeEach(() => {
    twoSumTest = new TwoSumTest()
  })

  it('Example 1', () => {
    twoSumTest.givenAnArrayOfIntegersNumsAndAnIntegerTarget([2, 7, 11, 15], 9)

    twoSumTest.thenReturnIndicesOfTheTwoNumbersSuchThatTheyAddUpToTarget([0, 1])
  })

  it('Example 2', () => {
    twoSumTest.givenAnArrayOfIntegersNumsAndAnIntegerTarget([3, 2, 4], 6)

    twoSumTest.thenReturnIndicesOfTheTwoNumbersSuchThatTheyAddUpToTarget([1, 2])
  })

  it('Example 3', () => {
    twoSumTest.givenAnArrayOfIntegersNumsAndAnIntegerTarget([3, 3], 6)

    twoSumTest.thenReturnIndicesOfTheTwoNumbersSuchThatTheyAddUpToTarget([0, 1])
  })
})
