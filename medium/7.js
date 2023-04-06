const assert = require('node:assert')

/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If
 * reversing x causes the value to go outside the signed 32-bit integer range
 * [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed
 * or unsigned).
 */
const isA32BitInteger = (number) => {
  return number <= 2147483647 && number >= -2147483648
}

assert.equal(isA32BitInteger(10), true)
assert.equal(isA32BitInteger(-10), true)
assert.equal(isA32BitInteger(9646324351), false)

const isASignedInteger = (number) => {
  return number < 0
}

assert.equal(isASignedInteger(10), false)
assert.equal(isASignedInteger(0), false)
assert.equal(isASignedInteger(-10), true)

const reverse = (x) => {
  if(!isA32BitInteger(x)) return 0

  if(isASignedInteger(x)) {
    const reversedInteger = Number(String(Math.abs(x)).split('').reverse().join(''))

    if(!isA32BitInteger(-reversedInteger)) return 0

    return -reversedInteger
  } else {
    const reversedInteger = Number(String(x).split('').reverse().join(''))

    if(!isA32BitInteger(reversedInteger)) return 0

    return reversedInteger
  }
};

assert.equal(reverse(123), 321)
assert.equal(reverse(-123), -321)
assert.equal(reverse(120), 21)
