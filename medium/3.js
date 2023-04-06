const assert = require('node:assert')

/**
 * Given a string s, find the length of the longest substring(A substring is a
 * contiguous non-empty sequence of characters within a string) without
 * repeating characters.
 */
const convertStringToArrayString = (string) => {
  return string.split('')
}

assert.deepEqual(convertStringToArrayString('abcabcbb'), ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b'])

const getSubstringFromStartIndex = (startIndex, stringArray) => {
  const result = []

  for (let i = startIndex; i < stringArray.length; i++) {
    if (i === startIndex) {
      result.push(stringArray[i])
    } else {
      if (result.includes(stringArray[i])) {
        i = stringArray.length
      } else {
        result.push(stringArray[i])
      }
    }
  }

  return result
}

assert.deepEqual(getSubstringFromStartIndex(0, ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b']), ['a', 'b', 'c'])

const lengthOfLongestSubstring = (s) => {
  let result = []
  const stringArray = convertStringToArrayString(s)

  for (let i = 0; i < stringArray.length; i++) {
    const currentSubstring = getSubstringFromStartIndex(i, stringArray)

    if (currentSubstring.length > result.length) result = currentSubstring
  }

  return result.length
};

assert.equal(lengthOfLongestSubstring('abcabcbb'), 3)
assert.equal(lengthOfLongestSubstring('bbbbb'), 1)
assert.equal(lengthOfLongestSubstring('pwwkew'), 3)
