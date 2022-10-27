/**
 * Given a string s, find the length of the longest substring(A substring is a
 * contiguous non-empty sequence of characters within a string) without
 * repeating characters.
 */
function lengthOfLongestSubstring(s: string): number {
  let result = []
  const stringArray = convertStringToArrayString(s)

  for (let i = 0; i < stringArray.length; i++) {
    const currentSubstring = getSubstringFromStartIndex(i, stringArray)

    if (currentSubstring.length > result.length) result = currentSubstring
  }

  return result.length
};

function convertStringToArrayString(string: string): string[] {
  return string.split('')
}

function getSubstringFromStartIndex(startIndex: number, stringArray: string[]): string[] {
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

export {
  lengthOfLongestSubstring,
  convertStringToArrayString,
  getSubstringFromStartIndex
}
