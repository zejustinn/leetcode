const assert = require('node:assert')

/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given
 * number of rows like this: (you may want to display this pattern in a fixed
 * font for better legibility) and then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows
 */
const convert = (s, numRows) => {
  let matrix = []
  let line = 0
  let column = 0
  let shouldWriteLine = true

  if (numRows === 1) return s

  for (let i = 0; i < s.length; i += 1) {
    if (!shouldWriteLine) {
      line -= 1
      column += 1
    }

    if (line === 0 || shouldWriteLine) {
      matrix[line] === undefined ? matrix[line] = [s.charAt(i)] : matrix[line][column] = s.charAt(i)

      if (line < numRows - 1) {
        line += 1
        shouldWriteLine = true
      } else
        shouldWriteLine = false
    } else {
      matrix[line][column] = s.charAt(i)

      if (line === 0) shouldWriteLine = true
    }
  }

  let result = ''

  for (let i = 0; i < matrix.length; i += 1)
    for (let j = 0; j < matrix[i].length; j += 1)
      if (matrix[i][j] !== undefined) result += matrix[i][j]

  return result
}

assert.equal(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR')
assert.equal(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI')
assert.equal(convert('A', 1), 'A')
assert.equal(convert('AB', 1), 'AB')
