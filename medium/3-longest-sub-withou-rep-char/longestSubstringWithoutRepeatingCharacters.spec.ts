import { expect } from "chai"
import {
  lengthOfLongestSubstring,
  convertStringToArrayString,
  getSubstringFromStartIndex,
} from "./longestSubstringWithoutRepeatingCharacters"

describe('3. Longest Substring Without Repeating Characters', () => {
  it('1', () => {
    const string = 'abcabcbb'

    const stringArray = convertStringToArrayString(string)

    expect(stringArray).deep.equal(['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b'])
  })

  it('2', () => {
    const startIndex = 0
    const stringArray = ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b']

    const substringArray = getSubstringFromStartIndex(startIndex, stringArray)

    expect(substringArray).deep.equal(['a', 'b', 'c'])
  })

  it('Example 1', () => {
    const string = 'abcabcbb'

    const longestSubstringLength = lengthOfLongestSubstring(string)

    expect(longestSubstringLength).equal(3)
  })

  it('Example 2', () => {
    const string = 'bbbbb'

    const longestSubstringLength = lengthOfLongestSubstring(string)

    expect(longestSubstringLength).equal(1)
  })

  it('Example 3', () => {
    const string = 'pwwkew'

    const longestSubstringLength = lengthOfLongestSubstring(string)

    expect(longestSubstringLength).equal(3)
  })
})
