# 풀이

**Runtime Beats **  
![runtimeBeats](https://user-images.githubusercontent.com/102473964/230701873-c53d11c1-07d5-421f-9855-43f87cf46843.svg)

**Memory Beats **  
![memoryBeats](https://user-images.githubusercontent.com/102473964/230701914-05a789a1-4d49-4e3d-875b-872dd1c4ae7d.svg)


## 문제 이해하기

### INPUT

- 문자열 `s`
- 정수 `numRows`

### 설명

```
P   A   H   N
A P L S I I G
Y   I   R
```
문자열을 주어진 numRows에 영향을 받는 특정 규칙을 따라 지그재그 패턴으로 표현됩니다.

`"PAHNAPLSIIGYIR"`
이 때 지그재그 패턴의 첫 번째 행부터 문자를 구성한 값을 반환합니다 

**문제 요약**

## 문제 풀이
~~~javascript
var convert = function (s, numRows) {
  let answer = "";
  const standardIndex = (numRows - 1) * 2;
  let sArray = s.split("");

  for (let row = 0; row < numRows; row++) {
    // 규칙에 맞는 인덱스의 값을 찾는다
    for (let index = 0 ; index < s.length; index += standardIndex) {
      let indexA = index + row; // standardIndex + row 
      let indexB = index + standardIndex - row; // standardIndex - row

      for (const findIndex of [indexA, indexB]) {
        // 해당 인덱스가 존재한다면
        if (sArray[findIndex]) {
          // 해당 값을 answer에 더해준다
          answer += sArray[findIndex];
          sArray[findIndex] = false;
        }
      }
    }
  }

  return answer
};

~~~

**풀이 방법 기입**

입력값에 따라 특정 규칙이 있다고 생각하여 standardIndex 라는 변수를 하나 생성하여 행 별로 standardIndex 값에서 행의 값을 뺀 인덱스, 행의 값을 더한 인덱스에 접근하여 해당 엘리먼트들을 answer 에 담아 반환합니다.
3중 for문을 사용해 시간 복잡도가 커서 통과하지 못했습니다.
숫자를 이용해 특정 규칙을 찾다보니 가독성이 떨어집니다.