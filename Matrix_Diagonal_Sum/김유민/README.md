# 풀이

**Runtime Beats 80.16%**  
![runtime](https://user-images.githubusercontent.com/55650732/236771382-8de1d525-0a76-4282-83b6-cdd43f65ba7a.svg)

**Memory Beats 33.80%**
![memory](https://user-images.githubusercontent.com/55650732/236771364-04d4b8d5-b0d5-4e28-9543-16f1cde4c6dc.svg)

## 문제 이해하기

### INPUT
- 정사각형 행렬 `mat`

### 설명
- 정사각형 행렬 `mat`가 주어지면 행렬 대각선의 합을 반환합니다.
- 주 대각선에 있는 모든 요소와 주 대각선에 속하지 않는 보조 대각선에 있는 모든 요소의 합만 포함합니다.


**문제 요약**

## 문제 풀이

~~~javascript
/**
 * @param {number[][]} mat
 * @return {number}
 */

var diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    sum += mat[mat.length - 1 - i][i];
  }

  if (mat.length % 2 === 1) {
    sum = sum - mat[~~((mat.length - 1) / 2)][~~((mat.length - 1) / 2)];
  }

  return sum;
};

~~~

**풀이 방법 기입**
- `for`　루프로 돌리면서 `length`가 짝수면 그대로 `return`, `length`가 홀수면 중간값 빼기