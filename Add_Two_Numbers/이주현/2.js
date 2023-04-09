function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const result = plusmergeNode(l1, l2);

  return result;
};

/**
 * Plus merge two ListNodes
 * @param {ListNode} node1 
 * @param {ListNode} node2 
 * @param {number} carry 
 * @return {ListNode}
 */
function plusmergeNode(node1, node2, carry = 0) {
  if (!node1 && !node2 && !carry) return null;

  const val1 = node1 ? node1.val : 0;
  const val2 = node2 ? node2.val : 0;
  const sum = val1 + val2 + carry;

  const node = new ListNode(sum % 10);
  node.next = plusmergeNode((node1 && node1.next), (node2 && node2.next), Math.floor(sum / 10));

  return node;
}