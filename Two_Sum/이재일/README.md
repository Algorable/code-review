# 풀이    

**Runtime Beats 6.72%**    
![runtime1](https://user-images.githubusercontent.com/108773192/226819214-8bc1d667-4728-44d2-95bc-b6d2d72d460b.svg)

**Memory Beats 75.19%**  
![memory1](https://user-images.githubusercontent.com/108773192/226819248-333ed1ac-4afc-4a3f-9aa4-1578d542be19.svg)

**Memory Beats 75.19%**  
![memory1](https://user-images.githubusercontent.com/108773192/226819248-333ed1ac-4afc-4a3f-9aa4-1578d542be19.svg)


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
  
  // Variables
  const array = nums;   
  const copyArray = array;  
  const newArray=[] ;
  

  // 1. array
  for (let first = 0; first < array.length; first++) {
    // 2. copyArray
    for (let second = 0; second < copyArray.length; second++) {
      if (first===second) {
         continue;
        }else{
          if ( target === array[first] + copyArray[second]) {
          newArray.push(first) // 3. newArrayに追加
        }
      }
    } 
  }; 
  console.log(newArray);
  return newArray
 
};
twoSum([3,2,4] , 6);
~~~
