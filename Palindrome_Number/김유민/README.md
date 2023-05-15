# 풀이

**Runtime Beats 18.13%**  
![runtime](https://github.com/devYuMinKim/devYuMinKim/assets/55650732/7ee89701-e1c7-4224-b89c-0c55f706fed2)

**Memory Beats 58.41%**
![memory](https://github.com/devYuMinKim/devYuMinKim/assets/55650732/f158541d-772e-4eb1-b040-01e1410f40ab)

## 문제 이해하기

### INPUT
- 정수 `x`

### 설명
- 정수 `x`가 주어졌을 때, `x`가 `팔린드롬`이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.


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
- `Input 값`을 뒤집은 후에 `reverse`한 숫자와 `Input 값`이 같은지 비교해서 같으면 `true`, 다르면 `false` 반환