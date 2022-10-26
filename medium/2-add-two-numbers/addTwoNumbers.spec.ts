import { 
  convertLinkedListToArray, 
  reverseArray, 
  convertArrayNumberToBigInt,
  convertBigIntToArrayNumber,
  convertArrayToLinkedList,
  addTwoNumbers,
} from "./addTwoNumbers"
import { expect } from "chai"
import ListNode from "./ListNode";

describe('2. add two numbers', () => {
  it('1', () => {
    const linkedList = new ListNode(2, new ListNode(4, new ListNode(3)))

    const array = convertLinkedListToArray(linkedList);

    expect(array).deep.equal([2, 4, 3])
  });

  it('2', () => {
    const array = [2, 4, 3]

    const reversedArray = reverseArray(array);

    expect(reversedArray).deep.equal([3, 4, 2])
  })

  it('3', () => {
    const array = [3, 4, 2]

    const arrayValue = convertArrayNumberToBigInt(array)

    expect(arrayValue).equal(342n)
  })

  it('Error 4', () => {
    const array = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]

    const arrayValue = convertArrayNumberToBigInt(array)

    expect(arrayValue).equal(1000000000000000000000000000001n)
  })

  it('5', () => {
    const bigInt = 807n

    const convertedArray = convertBigIntToArrayNumber(bigInt)

    expect(convertedArray).deep.equal([8, 0, 7])
  })

  it('6', () => {
    const array = [7, 0, 8]

    const linkedList = convertArrayToLinkedList(array)

    expect(linkedList).deep.equal(new ListNode(7, new ListNode(0, new ListNode(8))))
  })

  it('Example 1', () => {
    const number1 = new ListNode(2, new ListNode(4, new ListNode(3)))
    const number2 = new ListNode(5, new ListNode(6, new ListNode(4)))

    const result = addTwoNumbers(number1, number2)

    expect(result).deep.equal(new ListNode(7, new ListNode(0, new ListNode(8))))
  })

  it('Example 2', () => {
    const number1 = new ListNode(0)
    const number2 = new ListNode(0)

    const result = addTwoNumbers(number1, number2)

    expect(result).deep.equal(new ListNode(0))
  })

  it('Example 3', () => {
    const number1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))))
    const number2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))

    const result = addTwoNumbers(number1, number2)

    expect(result).deep.equal(new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))))
  })

  it('Error 1', () => {
    const number1 = new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))))))))))))))))))))))))))
    const number2 = new ListNode(5, new ListNode(6, new ListNode(4)))

    const result = addTwoNumbers(number1, number2)

    expect(result).deep.equal(new ListNode(6, new ListNode(6, new ListNode(4, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))))))))))))))))))))))))))))
    
  })
});
