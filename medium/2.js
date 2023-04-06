const assert = require('node:assert')

/**
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a linked
 * list. You may assume the two numbers do not contain any leading zero, except
 * the number 0 itself.
 */
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const convertLinkedListToArray = (listNode) => {
  const result = []

  while(listNode != null) {
    result.push(listNode.val)

    listNode = listNode.next
  }

  return result
}

assert.deepEqual(convertLinkedListToArray(new ListNode(2, new ListNode(4, new ListNode(3)))), [2, 4, 3])

const reverseArray = (array) => {
  return array.reverse()
}

assert.deepEqual(reverseArray([2, 4, 3]), [3, 4, 2])

const convertArrayNumberToBigInt = (array) => {
  return BigInt(array.join(""))
}

assert.deepEqual(convertArrayNumberToBigInt([3, 4, 2]), 342n)
assert.deepEqual(convertArrayNumberToBigInt([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 1000000000000000000000000000001n)

const convertBigIntToArrayNumber = (bigint) => {
  const stringArray = (''+bigint).split('')
  
  const numberArray = stringArray.map((stringNumber) => +stringNumber)

  return numberArray 
}

assert.deepEqual(convertBigIntToArrayNumber(807n), [8, 0, 7])

const convertArrayToLinkedList = (array) => {
  let result

  for(let i = 0; i < array.length; i++ ) {
    if(i === 0)
      result = new ListNode(array[i])
    else  {
      let lastListNode = result

      while(lastListNode.next !== null) {
        lastListNode = lastListNode.next
      }

      lastListNode.next = new ListNode(array[i])
    }
  }

  return result
}

assert.deepEqual(convertArrayToLinkedList([7, 0, 8]), new ListNode(7, new ListNode(0, new ListNode(8))))

const addTwoNumbers = (l1, l2) => {
  const number1 = convertArrayNumberToBigInt(reverseArray(convertLinkedListToArray(l1)))
  const number2 = convertArrayNumberToBigInt(reverseArray(convertLinkedListToArray(l2)))
  const result = number1 + number2

  return convertArrayToLinkedList(reverseArray(convertBigIntToArrayNumber(result)))
};

assert.deepEqual(
  addTwoNumbers(
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4)))
  ),
  new ListNode(7, new ListNode(0, new ListNode(8)))
)

assert.deepEqual(
  addTwoNumbers(new ListNode(0), new ListNode(0)),
  new ListNode(0)
)

assert.deepEqual(
  addTwoNumbers(
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))),
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
  ),
  new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))))
)
assert.deepEqual(
  addTwoNumbers(
    new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))))))))))))))))))))))))))),
    new ListNode(5, new ListNode(6, new ListNode(4)))
  ),
  new ListNode(6, new ListNode(6, new ListNode(4, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))))))))))))))))))))))))))
)
