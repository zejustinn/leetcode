import twoSum from "../twoSum"
import { expect } from "chai"

export default class TwoSumTest {
  nums: number[]
  target: number

  givenAnArrayOfIntegersNumsAndAnIntegerTarget(nums: number[], target: number) {
    this.nums = nums
    this.target = target    
  }

  thenReturnIndicesOfTheTwoNumbersSuchThatTheyAddUpToTarget(resultIndices: number[]) {
    expect(twoSum(this.nums, this.target)).deep.equal(resultIndices)
  }
}
