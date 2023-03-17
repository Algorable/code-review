# 풀이

## 문제 이해하기

### INPUT
- 정수의 배열 `nums`
- 정수 `target`

### 설명

배열 `nums` 요소 중 두 숫자의 합이 `target` 과 일치하는 인덱스를 찾아야 합니다.

각 입력에 정확히 하나의 해가 있다고 가정할 수 있으며, 같은 요소를 두 번 사용할 수 없습니다.

어떤 순서로든 답을 반환할 수 있습니다.

## 문제 풀이
~~~javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const firstNumber = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const secondNumber = nums[j];

      if (firstNumber + secondNumber === target) {
        return [i, j];
      }
    }
  };
}
~~~
`firstNumber` 는 배열에서 제 1 피연산자입니다.  
`secondNumber` 는 배열에서 제 2 피연산자입니다.

배열에서 2개의 요소의 합이 `target` 과 일치하는 인덱스를 찾아야 합니다.  

반드시 해는 있고 같은 요소가 두번 사용되지 않는다면, 제 1 피연산자는 제 2 피연산자와 같은 요소를 검색할 필요가 없습니다.

제 1 피연산자는 그대로 배열을 1번 순환하게 되고,  
제 2 피연산자는 제 1 피연산자가 인덱스가 하나씩 증가할 때마다,  
제 1 피연산자의 인덱스의 앞 요소를 잡고 순환하면 됩니다.

그러면 요소를 중복으로 검사하지않고, 같은 요소를 잡을 걱정이 없습니다.
