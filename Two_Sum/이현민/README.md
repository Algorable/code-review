# 풀이

**Runtime Beats ~%**  

**Memory Beats ~%**  


## 문제 이해하기

### INPUT
- **Input 요소**
- 정수 배열 `nums`
- 정수 `target`
### 설명
배열 `nums` 요소 중 두 숫자의 합이 `target` 과 일치하는 인덱스를 찾아야 합니다.

각 입력에 정확히 하나의 해가 있다고 가정할 수 있으며, 같은 요소를 두 번 사용할 수 없습니다.

어떤 순서로든 답을 반환할 수 있습니다.

**문제 요약**

## 문제 풀이
~~~javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      const firstNumber = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
          const secondNumber = nums[j];
          if ( target == firstNumber + secondNumber ) {
              return [i, j];
          }
      }
  }
};
~~~
`firstNumber` 변수에 nums배열 i번째 값을 넣는다.
`secondNumber` 변수에 nums배열 j번째 값을 넣는다.

i 와 j 값을 nums배열 길이 만큼 반복한다.
if문으로 `target` 이 `firstNumber` 와 `secondNumber` 값의 합과 같은지 확인한다.

false일 경우 i 와 j 값을 1씩 증가 시킨다.
true일 경우 i 와 j 값을 반환한다. 
