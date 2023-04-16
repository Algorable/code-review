
//   Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let fir = nodeToNum(l1);
    let sec = nodeToNum(l2);
    let sum = fir + sec;
    return numToNode(sum);
    
};
var nodeToNum = function(headNode) {
    let node = headNode;
    let toNum = 0;
    let i = 0;
    while (node != null) {
        toNum += (node.val * (10 ** i));
        node = node.next;
        i++
    }
    return toNum;
}

var numToNode = function(num) {
    let node = new ListNode(num % 10);
    let head = node;
    if(num == 0){
        return 0;
    }
    while (true){
        num = num/10;
        const newNode = new ListNode(num % 10);
        node.next = newNode;
        node = newNode;
        if (num == 0){
            break;
        }
    }
    return head;
}