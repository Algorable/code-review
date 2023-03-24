# 풀이

**Runtime Beats 20.22%**  
![Two Sum_Runtime_beats](https://user-images.githubusercontent.com/102473964/227411247-dea94281-2221-4446-ba36-1ef34c2ccca6.svg)


**Memory Beats 75.10%**  
![Two Sum_Memory_beats](https://user-images.githubusercontent.com/102473964/227411266-a890bd8a-4ced-4fb8-b920-abbc55388328.svg)

## 문제 이해하기

- 정수로 구성된 배열을 순회하여 element 두 개의 합이 target과 같은 경우 해당 element들의 index 값을 배열로 반환합니다.
- 반환되는 index는 다른 값이어야 합니다.

### INPUT

- array nums, number target

### 설명

- Input으로 nums 배열을 순회합니다.
- target에서 현재 index i의 element 값을 빼준 값을 newTarget으로 설정 합니다.
- newTarget 값을 만족하는 index를 찾습니다.
- newTarget 과 같은 element를 가진 index를 i와 같이 배열에 담아 반환합니다.

## 문제 풀이
~~~javascript

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let newTarget = 0;

    for (let i = 0; i < nums.length; i++) {
        newTarget = target - nums[i];
        if (nums.includes(newTarget))

        if (nums.lastIndexOf(newTarget) > i)

        return [i, nums.lastIndexOf(newTarget)];
    };
};

~~~


1. 배열 nums 를 순회합니다.

2. target에서 현재 element값을 빼준 newTarget을 설정합니다.

3. newTarget 값이 nums 배열에 있는지 확인합니다.
<br>  - nums의 마지막 요소부터 순회하며 newTarget과 같은 element의 index를 찾습니다.
<br>  - index의 값이 1. 순회의 index i 보다 크다면 두 index를 배열에 담아 반환합니다.
