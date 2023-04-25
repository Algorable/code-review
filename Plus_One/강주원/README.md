# 풀이

**Runtime Beats **  
![runtimeBeats](https://user-images.githubusercontent.com/102473964/230701873-c53d11c1-07d5-421f-9855-43f87cf46843.svg)

**Memory Beats **  
![memoryBeats](https://user-images.githubusercontent.com/102473964/230701914-05a789a1-4d49-4e3d-875b-872dd1c4ae7d.svg)


## 문제 이해하기

### INPUT

- int[] digits

### 설명

정수로 이루어진 배열의 원소들을 정수화하여 1을 더한 후 다시 배열로 만듭니다.

**문제 요약**

## 문제 풀이
~~~javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // join후 숫자로 바꿔 + 1
  let output = BigInt(digits.join("")) + 1n;
  // 문자로 바꿔 split
  return String(output).split("")
};
~~~

**풀이 방법 기입**

배열안의 정수들을 이으면 Number로 표현할 수 있는 bit 수를 넘어버립니다. 따라서 BigInt 형으로 정수들을 이은 값을 얻고 bigInt 리터럴 값 1n을 더한 후 배열로 만들어 반환합니다.