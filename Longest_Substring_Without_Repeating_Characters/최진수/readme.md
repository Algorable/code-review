# 풀이

**Runtime Beats 64.60%**




**Memory Beats 37.72%**





## 문제 이해하기

### INPUT
- 문자열 s

### 설명

같은 문자가 겹치지않는 가장긴 문자열을 찾느것

## 문제 풀이
~~~javascript

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let keep = [];

    for (let i = 0; i < s.length; i++) {
      if (keep.includes(s[i])) {
        maxLen = Math.max(maxLen, keep.length);
        if (s[i] == s[i-1]) {
          keep = [];
        } else {
          keep = keep.slice(keep.indexOf(s[i])+1);
        }
      }
      keep.push(s[i]);
    }
    return Math.max(maxLen, keep.length);
};

~~~

**풀이 방법 기입**
1. 일단 중복되는 문자가 없다면 keep에 저장합니다
2. 만약 keep에 중복되는 문자열이 나온다면 현재까지의 문자열 길이를 mexlen에 저장합니다
3. 그 이전 문자열들을 slice로 자르고 다시 현재 문자열을 붙입니다
4. 반복하여 마지막에 현재 keep과 maxlen의 길이를 비교하여 큰수를 반환합니다
