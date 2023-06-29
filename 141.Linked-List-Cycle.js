/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// T O(n) M O(n)
// var hasCycle = function (head, hash = new Set()) {
//     if (!head) {
//         return false
//     }
//     if (hash.has(head)) {
//         return true
//     }
//     hash.add(head)
//     return hasCycle(head.next, hash)
// };

// T O(n) M O(1)
var reverseList = function (head) {
    let prev = null
    let current = head
    while (current) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
};