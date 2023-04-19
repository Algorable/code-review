# 풀이

**Runtime Beats 47.93%**

![6_runtime](https://user-images.githubusercontent.com/109533678/232200779-e907448b-3abb-4cd7-9c88-31d361729610.svg)

**Memory Beats 74.72%**

![6_memory](https://user-images.githubusercontent.com/109533678/232200788-ac4535bb-b34d-445b-91f7-53f1751a580f.svg)



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
 
1. 입력받은 numRows만큼의 빈 배열을 생성한다.
2. 문자열 s 를 i번째 배열에 집어넣는다.
3. 만약 첫번째나 마지막배열에 다다르면 다시 반대방향으로 움직이며 집어넣는다.
4. 모든 배열을 하나로.
