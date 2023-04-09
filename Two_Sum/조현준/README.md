# 풀이

**Runtime Beats 47.58%**  
![sample](https://user-images.githubusercontent.com/93760720/229011751-ee82e7c5-29dd-49d1-8b78-118d781f1346.svg)

**Memory Beats 61.65%**  
![sample2](https://user-images.githubusercontent.com/93760720/229011771-40f94921-5e1c-4b79-9f9f-27b5d88b1c75.svg)


## 문제 이해하기
- `nums`배열에서 배열넘버 indexN + indexN === `target` 때 indexN을 구하라

### INPUT
- (정수 배열) `nums`
- (정수) `target`

### 설명

- 이중반복문을 이용해 하나의 요소와 [N]요소를 합한다. (0,1), (0,2), (0,3)......(N,N)
- 합한 값을 `target`값과 비교한다.

## 문제 풀이
~~~javascript

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} 
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++ ) {
        for(let j = i + 1; j < nums.length; j++ ) {
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

~~~

- (if) nums[N] + nums[N] === `target` 이면
  - 그 떄의 nums[N], nums[N]의 index를 반환한다.
