# 풀이

**Runtime Beats 26.3%**  
![runtimeBeats](https://user-images.githubusercontent.com/102473964/230701873-c53d11c1-07d5-421f-9855-43f87cf46843.svg)

**Memory Beats 41.53%**  
![memoryBeats](https://user-images.githubusercontent.com/102473964/230701914-05a789a1-4d49-4e3d-875b-872dd1c4ae7d.svg)


## 문제 이해하기

### INPUT

- String s

### 설명

입력된 문자열 s 안에서 서로 다른 문자들로만 이뤄진 가장 긴 `subString`을 찾는 문제입니다.

**문제 요약**

## 문제 풀이
~~~javascript
/**
 * @param {string} s
 * @return {number}
 */

// 다른 값이 연속되는 부분이 제일 많은 부분의 길이를 반환
const lengthOfLongestSubstring = function (s) {

  let answer = 0;

  // 전체 요소에 대한 순회
  for (let i = 0; i < s.length; i++) {
    let subString = "";
    // 한 요소씩 얼마나 다른 수들이 이어지는 지 확인
    for (let j = i; j < s.length; j++) {
      const currentValue = s[j];
      const isIn = subString.includes(currentValue);
      // 들어 있으면 종료
      if (isIn) {
        break
      }
      subString += currentValue;
    }
    // 답보다 subString 이 길면 새로운 답으로 등록 
    answer = answer < subString.length ? subString.length : answer;
  }
  return answer
};
~~~

**풀이 방법 기입**

다른 문자들로만 이뤄진 `subString`을 찾습니다. 기존의 subString 보다 더 긴 문자열일 경우 새롭게 찾은 `subString`의 길이를 `answer`로 설정합니다.
