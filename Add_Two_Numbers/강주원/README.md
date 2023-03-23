# 풀이

**Runtime Beats 66.75%**  
![Runtime](svg)

**Memory Beats 93.14%**  
![Memory](svg)


## 문제 이해하기

Linked List 자료구조를 가지는 LinkNode 객체의 요소들을 더한 값을 리턴한다.

### INPUT

- LinkedList l1, LinkedList l2

### 설명
Input으로 들어온 l1, l2의 value를 더해주고 더해준 값을 역순으로 리턴


## 문제 풀이
~~~javascript

**
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
  **

~~~


1. 입력된 l1, l2 의 Node마다 value를 문자형으로 추출
  - l1, l2는 ListNode 객체로 단일 연결 리스트
  - 단일 연결 리스트는 마지막 노드의 포인터가 null을 가짐
  - 포인터가 null 값을 가지는 Node까지 재귀방식으로 접근하여 가져옴

2. 문자형으로 추출한 값들을 정수형으로 전환하여 더하기

3. 마지막 Node부터 만들어 역순의 Node를 가지는 ListNode 리턴
  - i = 0 Node 만드는 경우에는 포인터를 null로 구성한다
  - Node prevNode에 담아준다.
  - i > 0 Node 만들 때 부터는 prevNode의 포인터에 넣어준다.
  - 마지막 노드의 경우에는 값을 담아준 후 Node를 리턴
