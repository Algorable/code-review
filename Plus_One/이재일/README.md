# 풀이

**Runtime Beats 27.83%**  
![runtime](https://user-images.githubusercontent.com/108773192/236736475-cbe5b948-8ead-444e-b886-dd9842e8e212.svg)

**Memory Beats 46.15%**  
![memory](https://user-images.githubusercontent.com/108773192/236736486-05416759-cabd-4419-b531-0d70ac4ffa8e.svg)

## 문제 이해하기

### INPUT
- number[] digits

### 설명
🚩배열로 받은 값을 하나의 숫자로 만든 후 1을 추가 
🚩(배열 메서드를 사용하지 않고 최대한 원시적으로 구현 해보려 하였음)


## 문제 풀이
~~~javascript

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  /* 입력 받은 숫자 배열의 마지막 자리에 +1 하기 */
  let toNum = Number( digits.join('') ) + 1; 
  let toStr = toNum.toString();
  
  /* 빈 배열 생성 */
  const newArr = new Array(toStr.length).fill();
  
  /* 문자를 하나씩 따개서 다시 배열에 입력 */
  for (let i = 0; i < toStr.length; i++) {
    newArr[i] = Number(toStr[i]);
  }

  
};

// 시도
console.log(plusOne([9]));

~~~

1. 입력 받은 배열을 하나의 숫자형으로 만든 후 1추가
2. 1번의 결과를 다시 문자열로 변환 
3. 빈 배열 생성 
4. for반복문으로 index를 이용해 문자열을 하나씩 추출 후 빈 배열에 추가
