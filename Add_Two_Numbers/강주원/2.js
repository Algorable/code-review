/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function (l1, l2) {

    // ListNode의 노드의 value를 String 값을 역순으로 가져오기
    const getVal = function (ListNode) {
        let node = ListNode.val;
        let value = String(node);
  
        // 마지막 노드까지 접근해 연산
        if (ListNode.next != null) {
            value = getVal(ListNode.next) + value;
        }
  
        return value;
    }
  
    // ListNode로 바꿔주기
    const toListNode = function (array) {
        array = String(array).split("");
        let prevNode;
  
        for (let i = 0; i < array.length; i++) {
            const value = Number(array[i]);
            // 처음으로 생성하는 노드라면 array, null 값을 넣고 이후의 노드는 array[i], prevNode 넣어주기 -> 마지막 노드부터 생성
            const Node = !i ? new ListNode(value, null) : new ListNode(value, prevNode);
  
            // 마지막 인덱스에서 Node값 반환
            if (i == array.length - 1) {
                return Node;
            };
  
            // 이전 노드 생성
            prevNode = Node;
        };
    };
  
    const sum = BigInt(getVal(l1)) + BigInt(getVal(l2));
  
    return toListNode(sum);
  };