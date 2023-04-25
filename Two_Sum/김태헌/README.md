# 풀이

**Runtime Beats ~%**  
![1_rutime](https://user-images.githubusercontent.com/78538708/228210430-4edbc4a4-8a7a-407b-a1b7-9a1e86c9f2a3.svg)

**Memory Beats ~%**
![1_memory](https://user-images.githubusercontent.com/78538708/230798724-873133af-eb58-43f2-8028-582634b7594c.svg)

## 문제 이해하기

정수로 구성된 배열의 요소 2개를 선택, 두 요소의 합이 target과 동일한 경우, 해당 요소들을 return.

### INPUT

- array of integers `nums`
- integer `target`

### 설명

배열 `nums` 요소 중 두 숫자의 합이 `target` 과 일치하는 인덱스를 찾아야 합니다.

각 입력에 정확히 하나의 해가 있다고 가정할 수 있으며, 같은 요소를 두 번 사용할 수 없습니다.

어떤 순서로든 답을 반환할 수 있습니다.

## 문제 풀이

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; ++i)
    for (let j = i + 1; j < nums.length; ++j)
      if (nums[i] + nums[j] === target) return [i, j];
};
```

배열의 요소 두 개를 고릅니다. 이때 첫 번째 선택과 두 번째 선택은 동일하지 않으며, 첫 번째 선택과 두 번째 선택의 순서는 상관 없습니다.
수학적으로 n개의 요소 중, 순서 상관 없이 2개를 고르는 nC2의 경우의 수 가 있습니다.

배열의 요소를 중복 없이, 전체의 선택의 경우의 수를 구하고 싶을때, 위의 코드와 같이 사용합니다. i가 탐색한 것은, j가 탐색하지 않고, 전체의 경우를 다 확인하고, 반복문을 종료합니다.

해당 방식은 기본적인 정렬 알고리즘에 적용할 수 있으며, 추후 two pointer algorithm -> merge sort 에도 적용할 수 있으므로, 편하게 풀 수 있도록 합시다!
