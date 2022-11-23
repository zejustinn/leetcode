import { expect } from "chai";
import { resourceUsage } from "process";
import {
  reverse,
  isA32BitInteger,
  isASignedInteger
} from './reverseInteger'

describe('7. Reverse Integer', () => {
  it('', () => {
    const number = 10

    const result = isA32BitInteger(number)

    expect(result).true
  })

  it('', () => {
    const number = -10

    const result = isA32BitInteger(number)

    expect(result).true
  })

  it('', () => {
    const number = 9646324351

    const result = isA32BitInteger(number)

    expect(result).false
  })

  it('', () => {
    const number = 10

    const result = isASignedInteger(number)

    expect(result).false
  })

  it('', () => {
    const number = 0

    const result = isASignedInteger(number)

    expect(result).false
  })

  it('', () => {
    const number = -10

    const result = isASignedInteger(number)

    expect(result).true
  })

  it('Example 1', () => {
    const number = 123

    const result = reverse(number)

    expect(result).equal(321)
  })

  it('Example 2', () => {
    const number = -123

    const result = reverse(number)

    expect(result).equal(-321)
  })

  it('Example 3', () => {
    const number = 120

    const result = reverse(number)

    expect(result).equal(21)
  })
})
