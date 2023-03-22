# 풀이

**Runtime Beats 39.57%**

![runtime](https://user-images.githubusercontent.com/55650732/226774904-879e2e2f-1014-4203-8bbd-7a92f55016fb.svg)


**Memory Beats 47.42%**

![memory](https://user-images.githubusercontent.com/55650732/226775018-38f5fc2c-f615-4c1c-ad0f-5483a3f5f866.svg)



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
var twoSum = function(nums, target) {
    for (let i = 0 ; i < nums.length - 1 ; i++) {
        for (let j = i + 1 ; j < nums.length ; j++) {
            if (target === nums[i] + nums[j]) return [i, j];
        }
    }
};
~~~

이중 반복문을 통해 2개의 인덱스를 순차적으로 선택하여 더하면서 `target`과 일치한다면 `인덱스값`을 리턴합니다.
