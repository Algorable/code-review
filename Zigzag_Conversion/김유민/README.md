# 풀이

<!-- **Runtime Beats 77.73%** -->
**Runtime Beats 70.80%**

<!-- ![runtime](https://user-images.githubusercontent.com/55650732/229334628-e5625940-4b2e-42e6-9e52-229861dff43c.svg) -->
![runtime1](https://user-images.githubusercontent.com/55650732/230018188-b890fc92-75ce-4fc1-9f5c-1a34826add60.svg)

<!-- **Memory Beats 79.15%** -->
**Memory Beats 95.38%**

<!-- ![memory](https://user-images.githubusercontent.com/55650732/229334624-bf193954-043f-43ab-9ee8-35cd8851fb23.svg) -->
![memory1](https://user-images.githubusercontent.com/55650732/230018170-84a7a3f6-8347-427e-80f8-557627d34add.svg)


## 문제 이해하기

### INPUT
- 문자열 `s`
- 정수 `numRows`

### 설명

문자열 "PAYPALISHIRING"은 다음과 같이 지정된 행 수에 지그재그 패턴으로 작성됩니다(가독성을 높이려면 이 패턴을 고정 글꼴로 표시하는 것이 좋습니다).

```
P   A   H   N
A P L S I I G
Y   I   R
```

그런 다음 한 줄씩 읽습니다: `"PAHNAPLSIIGYIR"`.

행의 개수가 주어지면 문자열을 받아 이 변환을 수행하는 코드를 작성합니다:

~~~
string convert(string s, int numRows);
~~~


<!-- ## 문제 풀이 1
~~~javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length <= numRows || numRows < 2) return s;

    const len = s.length;
    const num = 2 * (numRows - 1);
    let res = Array(numRows).fill('');
    let tmp = 0;

    for (let i = 0 ; i < len ; i++) {
        tmp = i % num;
        if (tmp < numRows) {
            res[tmp] += s[i];
        } else {
            res[num - tmp] += s[i];
        }
    }

    return res.join('');
};
~~~

`numRows`에 의한 사이클이 `(numRows - 1) * 2`이므로 각 행마다 들어가야 할 문자열을 사이클에 맞춰 넣어주면 됩니다. -->

## 문제 풀이
~~~javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 ) {
        return s;
    }

    // 사이클의 크기 계산
    const cycleSize =  2 * numRows - 2;
    const arr = new Array(numRows).fill('');

    // 사이클에 맞게 각 배열에 문자 삽입
    for (let i = 0 ; i < s.length ; i++) {
        let cycleIdx = i % cycleSize;
        let rIdx = (cycleIdx < numRows) ? cycleIdx : 2 * numRows - cycleIdx - 2;
        arr[rIdx] += s[i]; 
    }
    
    return arr.join('');
};
~~~

1. `numRows` 크기의 `배열`을 생성합니다.
2. 사이클의 크기를 계산합니다.
3. 사이클에 맞게 각 `배열`에 문자를 삽입합니다.
4. 각 `배열`의 문자를 합친 후 반환합니다.