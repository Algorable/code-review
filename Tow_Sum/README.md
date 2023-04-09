# 풀이

**Runtime Beats ~%**  
![runtime]()

**Memory Beats ~%**  
![memory]()


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
    for (let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};


~~~

이중"for"으로 각 배열 인덱스의 값을 배교해가면서 "target"값을 찾는다.