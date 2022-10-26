import ListNode from "./ListNode"

/**
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a linked
 * list. You may assume the two numbers do not contain any leading zero, except
 * the number 0 itself.
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const number1 = convertArrayNumberToBigInt(reverseArray(convertLinkedListToArray(l1)))
  const number2 = convertArrayNumberToBigInt(reverseArray(convertLinkedListToArray(l2)))
  const result = number1 + number2

  return convertArrayToLinkedList(reverseArray(convertBigIntToArrayNumber(result)))
};

function convertLinkedListToArray(listNode: ListNode): number[] {
  const result = []

  while(listNode != null) {
    result.push(listNode.val)

    listNode = listNode.next
  }

  return result
}

function reverseArray(array: any[]): any[] {
  return array.reverse()
}

function convertArrayNumberToBigInt(array: number[]): bigint {
  return BigInt(array.join(""))
}

function convertBigIntToArrayNumber(bigint: bigint): number[] {
  const stringArray = (''+bigint).split('')
  
  const numberArray = stringArray.map((stringNumber) => +stringNumber)

  return numberArray 
}

function convertArrayToLinkedList(array: number[]): ListNode {
  let result: ListNode

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

export {
  addTwoNumbers,
  convertLinkedListToArray,
  reverseArray,
  convertArrayNumberToBigInt,
  convertBigIntToArrayNumber,
  convertArrayToLinkedList,
}
