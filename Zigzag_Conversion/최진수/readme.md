# 풀이

![6_runtime](https://user-images.githubusercontent.com/109533678/232199814-14ee98b3-5e19-460a-b8ea-ac0856a371e6.svg)


![6_memory](https://user-images.githubusercontent.com/109533678/232199847-f14fe1cd-45c0-480c-99f4-d6bfcc43c183.svg)



## 문제 이해하기

### INPUT
-문자열 s
-정수 rumRows

### 설명

문자열 s 가 지그재그로 출력되는것을 한줄로 표시하는 문제

## 문제 풀이
~~~javascript

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let step = numRows === 1 ? 0 : -1;
    const inputArray = new Array(numRows).fill('');
    let i = 0;
    
    for (let j of s) {
      inputArray[i] += j;
      if (i === 0 || i === numRows - 1) {
        step = -step; // 방향전환
      }
      i += step;
    }
    
    return inputArray.join('');
};

~~~

입력받은 numRows만큼의 빈 배열을 생성한다
문자열 s 를 i번째 배열에 집어넣는다
만약 첫번째나 마지막배열에 다다르면 다시 반대방향으로 움직이며 집어넣는다
모든 배열을 하나로 
