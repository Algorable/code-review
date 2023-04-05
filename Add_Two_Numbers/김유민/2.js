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
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let link = result;
  let l1tmp = "";
  let l2tmp = "";
  let sum;

  while (l1 !== null) {
    l1tmp += l1.val;
    l1 = l1.next;
  }
  while (l2 !== null) {
    l2tmp += l2.val;
    l2 = l2.next;
  }

  l1tmp = l1tmp.split("").reverse().join("");
  l2tmp = l2tmp.split("").reverse().join("");

  sum = BigInt(l1tmp) + BigInt(l2tmp);
  sum = sum.toString().split("").reverse();
  sum.forEach((v) => {
    link.next = new ListNode(Number(v));
    link = link.next;
  });

  return result.next;
};
