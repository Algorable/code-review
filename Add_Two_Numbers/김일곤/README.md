# 풀이

**Runtime Beats ~%**  
![2_runtime](https://user-images.githubusercontent.com/73512015/232475052-fddb2288-0f75-47cf-b382-9a427cbf960b.svg)

**Memory Beats ~%**  
![2_memory](https://user-images.githubusercontent.com/73512015/232475081-8d04da1d-ec75-4c16-99b0-af235cdf7712.svg)

## 문제 이해하기

Linked List 자료구조를 가지는 LinkNode 객체의 요소들을 더한 값을 리턴한다.
### INPUT

- LinkedList l1, LinkedList l2

### 설명

Input으로 들어온 l1, l2의 value를 더해주고 더해준 값을 역순으로 리턴

## 문제 풀이
~~~javascript

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 문제 풀이 1. 변수 선언 참고
    let sum = 0;
    let current = new ListNode(0);
    let result = current;
    // 문제 풀이 2. 반복문 선언 참고
    while(l1 || l2) {
        // 2.~ if문 참고
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        current.next = new ListNode(sum % 10);
        current = current.next;

        sum = sum > 9 ? 1 : 0;
    }
    // 문제 풀이 3. if(sum) 참고
    if(sum) {
        current.next = new ListNode(sum);
    }
    // 문제 풀이 4. return 참고
    return result.next;
};

~~~

1. 변수 선언
   - sum 변수 선언(노드 요소별의 합을 넣을 변수)
   - current 변수 선언(노드별 요소를 지정해줄 변수)
   - result 변수 선언(return 값으로 반환할 변수)
2. 반복문
   - l1과 l2 둘중 하나라도 존재(!undefined)하면 반복문 실행
   - if문
     - 각 노드 별로 sum 변수에 현재 노드의 요소를 더함
   - 다음 노드의 값을 1의 자리수만 저장(sum % 10 : 10으로 나눴을때 나머지값으로 저장)
   - current값으 다음 노드(.next)를 가르키도록 바꿈
   - 현재 sum값이 10이상일떄 다음 노드의 값을 1추가(초기값을 1로 설정)
3. if(sum)
    - 탈출한 while문에서 sum값이 1이 남았을때 다음 노드를 추가
4. return
    - result 자식 node를 반환
