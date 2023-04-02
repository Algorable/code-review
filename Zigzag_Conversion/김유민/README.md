# 풀이

**Runtime Beats 77.73%**

![runtime](https://user-images.githubusercontent.com/55650732/229334628-e5625940-4b2e-42e6-9e52-229861dff43c.svg)

**Memory Beats 79.15%**

![memory](https://user-images.githubusercontent.com/55650732/229334624-bf193954-043f-43ab-9ee8-35cd8851fb23.svg)


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


## 문제 풀이
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

`numRows`에 의한 사이클이 `(numRows - 1) * 2`이므로 각 행마다 들어가야 할 문자열을 사이클에 맞춰 넣어주면 됩니다.