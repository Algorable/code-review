# 풀이

**Runtime Beats 80.96%**  
![runtime2](https://user-images.githubusercontent.com/64972038/227514523-c505c525-97b0-44eb-8a01-c19f4f915d17.svg)


**Memory Beats 76.12%**  
![memory2](https://user-images.githubusercontent.com/64972038/227514535-77cfa8d4-c60e-46e2-b7bc-93b282b7205c.svg)



## 문제 이해하기

### INPUT
- ListNode `l1`
- ListNode `l2`

### 설명

매개변수로 정수로 이루어진 `ListNode` 형식의 객체가 2개 주어진다.

숫자는 역순으로 저장된다.

두 객체의 각각의 순서의 노드를 더하여 1개의 `ListNode` 으로 반환하여야 한다.

## 문제 풀이

### 첫번째 풀이
~~~javascript
var addTwoNumbers = function (l1, l2) {
  const { longer, shorter } = longerShorter(l1, l2);
  return plusmergeNode(longer, shorter);
};

/**
 * Measure the length of a ListNode
 * @param {ListNode} someList 
 * @return {number} length;
 */
function getNodeLength(someList) {
  const next = (someList.next) ? getNodeLength(someList.next) : 0;
  return 1 + next;
}

function plusmergeNode(longer, shorter, carry = 0) {
  if (!longer && carry === 1) return new ListNode(1);
  else if (!longer) return null;
  const shorterVal = (shorter) ? shorter.val : 0;
  const shorterNext = (shorter) ? shorter.next : new ListNode(0);
  const sum = longer.val + shorterVal + carry;
  const currentVal = sum % 10;
  const nextCarry = Math.floor(sum / 10);

  return new ListNode(currentVal, plusmergeNode(longer.next, shorterNext, nextCarry));
}

function longerShorter(l1, l2) {
  const l1Length = getNodeLength(l1);
  const l2Length = getNodeLength(l2);

  const [longer, shorter] = (l1Length > l2Length) ?
    [l1, l2] : [l2, l1];

  return { longer, shorter };
}
~~~
일단 함수를 3개를 정의했습니다.

1. ListNode 형의 객체의 길이를 재기위한 `getNodeLength()`
2. 두 ListNode의 깊이를 비교하고 `{ longer, shorter }` 를 반환하는 `longerShorter()`
3. 두 ListNode를 더하기 병합하기 위한 `plusmergeNode()`

흐름순으로 설명하겠습니다.
1. 두 리스트의 모든 노드들을 조회하려면, 가장 긴 노드를 기준으로 돌아야 합니다.
    - 그래서 `NodeList`의 길이를 구하는 `getNodeList`를 만들게 되었고,
    - 두 리스트를 비교하여 긴 노드와 짧은 노드인 `{ longer, shorter }` 를 반환하는 `longerShorter`를 만들게 되었습니다.
2. 그리고 두 노드를 순환하면서 더하기 병합을 실시하게 되는 `plusmergeNode`라는 함수를 만들었습니다.  
    - 각 `ListNode`의 `node.val`와 이전 노드에서 자리올림으로 들어온 `carry`를 더하고 **1의 자리수**는 `currentVal`에 저장하고 **10의 자리수**는 자리올림을 역할을 하는 `nextCarry`에 저장합니다.
    - 새로운 `ListNode` 만들어 `node.val`에 `currentVal`을 넣습니다.
    - 그리고 다음 node의 `node.val`을 찾기 위해 `node.next`는 `plusmergeNode(longer.next, shorterNext, nextCarry)`로 합니다. 이는 재귀함수로 이루어졌습니다.
    - 마지막 노드까지 찾을 때까지 2번을 반복하게 됩니다.

해당 코드는 **Runtime Beats 47.30%**, **Memory Beats 81.81%** 가 나왔습니다.  
그러나 뭔가 `getNodeLength`와 `longerShorter` 가 없이도 돌릴 수 있을 것 같다는 예감이 들어 코드를 정리하는 겸 수정해보고자 했습니다.  

그렇게 해서 만들어진 두 번째 코드입니다.  

### 두 번째 풀이
~~~javascript
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
~~~
위의 코드에서 모든 노드를 조회하려면, 가장 긴 노드를 구했어야 했습니다.  
이 코드에서는 그 과정이 사라져서 오직 병합하기 위한 `plusmergeNode` 만을 사용합니다.

1. node1, node2이 `null`이 아니라면(`ListNode`라면) 각 `node.val`을 `val1`, `val2`에 넣음
    - `null`이면 0을 넣어서 긴 노드에 맞춰서 순환할 수 있도록 함
    - 둘다 `null`인 경우는 `null`을 반환하는 구문이 있기 때문에 괜찮다.
2. 각 `val`과 이전 노드의 자리 올림 `carry`를 더하여 합계를 구합니다.
3. `ListNode`를 생성함과 동시에 `node.val`를 1의 자리수를 구하기 위한 `sum % 10` 값을 넣습니다.
4. 그리고 다음 노드의 `node.val`을 찾기 위해 `plusmergeNode`를 이용합니다.
5. 찾을 때까지 반복하게 됩니다.

해당 코드는 **Runtime Beats 80.96%**, **Memory Beats 76.12%** 가 나왔습니다.  

