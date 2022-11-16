import {
  convert,
} from "./ZigzagConversion";
import { expect } from "chai";

describe('6. Zigzag Conversion', () => {
  it('Example 1', () => {
    const s = 'PAYPALISHIRING'
    const numRows = 3

    const result = convert(s, numRows);

    expect(result).equal('PAHNAPLSIIGYIR')
  })

  it('Example 2', () => {
    const s = 'PAYPALISHIRING'
    const numRows = 4

    const result = convert(s, numRows);

    expect(result).equal('PINALSIGYAHRPI')
  })

  it('Error 1', () => {
    const s = 'A'
    const numRows = 1

    const result = convert(s, numRows);

    expect(result).equal('A')
  })

  it('Error 2', () => {
    const s = 'AB'
    const numRows = 1

    const result = convert(s, numRows);

    expect(result).equal('AB')
  })
})
