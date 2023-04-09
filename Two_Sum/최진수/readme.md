# 풀이

**Runtime Beats 19.74%**  
![1_runtime](https://user-images.githubusercontent.com/109533678/227707982-0b0a6e90-0582-4c9e-8447-bf2a8d331af9.svg)


**Memory Beats 61.57%**  
![1_memory](https://user-images.githubusercontent.com/109533678/227708071-a55562b7-948b-4e47-aaa3-dcbda20cfb8e.svg)



## 문제 이해하기
-  정수로 이루어진 배열을 돌면서 두 원소의 합이 target과 같은경우에 두 원소의 인덱스값을 배열로 반환합니다.
-  반환되는 인덱스값은 다른 값이어야합니다.

### INPUT
- array nums , number target

### 설명

- input으로 nums의 배열을 반복문을 이용하여 인덱스 i 의 값을 구합니다.
- target에서 i를 빼서 Ntarget값을 설정합니다
- Ntarget값과 같은 인덱스를 찾습니다
- 특정 인덱스 i에서 Ntarget값과 같은 인덱스는 반드시 있으므로 배열에 담아 반환합니다. 
 
## 문제 풀이
~~~javascript

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let Ntarget = 0;
    for(let i = 0;i<nums.length;i++){
        Ntarget = target - nums[i];
        if(nums.includes(Ntarget))

        if(nums.lastIndexOf(Ntarget)>i){
            return [ i, nums.lastIndexOf(Ntarget)]
        }

    }
};
~~~

1. 배열 nums를 반복문으로 인덱스 i값을 구합니다.

2. target에서 i를 빼서 Ntarget값을 설정합니다.

3. 반복문을 돌리면서 Ntarget값으로 특정 인덱스 i 를 구합니다.

4. i 와 Ntarget값을 배열로 반환합니다.
 
