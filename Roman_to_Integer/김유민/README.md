# 풀이

**Runtime Beats 18.13%**  


**Memory Beats 58.41%**


## 문제 이해하기

### INPUT
- 정수 `x`

### 설명
- 정수 `x`가 주어졌을 때, `x`가 `팔린드롬`이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.


**문제 요약**

## 문제 풀이

~~~javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  const value = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let current = value[s[i]];
    let next = value[s[i + 1]];

    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }

  return result;
};


~~~

**풀이 방법 기입**
- 일단 각 로마숫자에 대해 MAP를 만들어 해당 문자에 값을 저장합니다.
- 그 후, 입력받은 문자열에 대해 계산을 수행하는데,
    - 현재 글자보다 다음 글자가 값이 더 크다면 결과값에서 빼주고, (IV => I는 V보다 작음)
    - 현재 글자보다 다음 글자가 값이 더 작다면 결과값에서 더해줍니다.(VI => V는 I보다 큼)