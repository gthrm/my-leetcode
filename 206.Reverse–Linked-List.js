/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// T O(n), M O(1)
const reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    const { next } = current;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
