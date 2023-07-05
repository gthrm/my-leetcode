/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//

function toPretty(value) {
  return JSON.stringify(value);
}

var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let dummy = result;
  let sum = 0;
  let carry = 0;

  while (l1 || l2 || sum > 0) {
    console.log("--------------- 1 ---------------");
    console.table([
      ["l1", toPretty(l1)],
      ["l2", toPretty(l2)],
      [("sum", sum)],
      ["result", toPretty(result)],
      ["dummy", toPretty(dummy)],
    ]);
    if (l1) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    console.log("--------------- 2 ---------------");
    console.table([
      ["l1", toPretty(l1)],
      ["l2", toPretty(l2)],
      ["sum", sum],
      ["result", toPretty(result)],
      ["dummy", toPretty(dummy)],
    ]);

    if (l2) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    console.log("--------------- 3 ---------------");
    console.table([
      ["l1", toPretty(l1)],
      ["l2", toPretty(l2)],
      ["sum", sum],
      ["result", toPretty(result)],
      ["dummy", toPretty(dummy)],
    ]);

    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    }
    console.log("--------------- 4 ---------------");
    console.table([
      ["l1", toPretty(l1)],
      ["l2", toPretty(l2)],
      ["sum", sum],
      ["result", toPretty(result)],
      ["dummy", toPretty(dummy)],
    ]);
    dummy.val = sum;
    sum = carry;
    carry = 0;
    console.log("--------------- 5 ---------------");
    console.table([
      ["l1", toPretty(l1)],
      ["l2", toPretty(l2)],
      ["sum", sum],
      ["result", toPretty(result)],
      ["dummy", toPretty(dummy)],
    ]);

    if (l1 || l2 || sum > 0) {
      console.log("--------------- 6 ---------------");
      console.table([
        ["l1", toPretty(l1)],
        ["l2", toPretty(l2)],
        ["sum", sum],
        ["result", toPretty(result)],
        ["dummy", toPretty(dummy)],
      ]);
      dummy.next = new ListNode(0);
      dummy = dummy.next;
    }
  }
  return result;
};

const createLinkedList = (number) =>
  number
    ? { val: number % 10, next: createLinkedList((number / 10) | 0) }
    : null;

console.log("243", createLinkedList(243));
console.log("564", createLinkedList(564));
console.log(addTwoNumbers(createLinkedList(243), createLinkedList(564)));
