# 풀이

**Runtime Beats 27.83%**  
![66_runtime](https://user-images.githubusercontent.com/109533678/234867253-ea3c2e6e-71f9-4815-9ee2-b06188539812.svg)

**Memory Beats 46.15%**  
![66_memory](https://user-images.githubusercontent.com/109533678/234867290-9ebf99bc-7ae5-4072-948d-9539ff6a0608.svg)


## 문제 이해하기

### INPUT
- number[] digits

### 설명

배열에 있는 숫자에 1을 더하는 간단한 문제


## 문제 풀이
~~~javascript

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let plusNum = 1;
    for(let i = digits.length-1;i>=0;i--){
        digits[i] += plusNum;
        if(digits[i]<10){
            plusNum = 0;
            break;
        }
        else{
            digits[i] = 0;
            plusNum = 1;
        }
    }
    if(plusNum === 1){
        digits.unshift(1);
    }
    return digits;
};

~~~

1. 뒤에서 부터 1을 더하고
2. 만약 10이넘으면 그자리숫자는 0으로 합니다
3. 그리고 그전자리수에 1을 더하는걸 반복하고
4. 마지막까지 10을 넘기면 맨앞에 1을 unshift로 추가합니다
