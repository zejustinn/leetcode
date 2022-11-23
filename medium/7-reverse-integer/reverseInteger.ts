/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If
 * reversing x causes the value to go outside the signed 32-bit integer range
 * [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed
 * or unsigned).
 */
function reverse(x: number): number {
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

function isA32BitInteger(number: number): boolean {
  return number <= 2147483647 && number >= -2147483648
}

function isASignedInteger(number: number): boolean {
  return number < 0
}

export {
  reverse,
  isA32BitInteger,
  isASignedInteger
}
