# 풀이

**Runtime Beats 11.69%**  

![runtime](https://user-images.githubusercontent.com/55650732/226921455-c9c82ac3-e4e7-4e37-bd3a-79fe72f6632d.svg)


**Memory Beats 8.31%**  

![memory](https://user-images.githubusercontent.com/55650732/226921508-b1c0077a-dc74-4d36-a8f1-3f21b8e79590.svg)



## 문제 이해하기

### INPUT

- LinkedList l1, l2


### 설명

음수가 아닌 정수 두 개를 나타내는 비어 있지 않은 링크된 목록 두 개가 주어집니다. 숫자는 역순으로 저장되며 각 노드에는 단일 숫자가 포함됩니다. 두 숫자를 더하고 그 합을 연결된 목록으로 반환합니다.

두 숫자에는 숫자 0 자체를 제외하고 선행 0이 포함되어 있지 않다고 가정할 수 있습니다.


## 문제 풀이
~~~javascript
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

~~~

LinkedList 문제로 `l1` 리스트와 `l2` 리스트의 `value`를 뒤집은 값을 더해 다시 뒤집은 형태로 담으면 되는 단순한 로직의 문제입니다.
