// 24.04.2023
// Mstyslav Dmytryk
// https://leetcode.com/problems/middle-of-the-linked-list/

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
var middleNode = function (head) {
  let once = head;
  let twice = head;

  while (twice && twice.next) {
    once = once.next;
    twice = twice.next.next;
  }

  return once;
};
