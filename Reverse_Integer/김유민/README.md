# 풀이

**Runtime Beats 96.24%**  
![runtime](https://user-images.githubusercontent.com/55650732/233050281-a7ac999d-449c-4ad7-932f-d374ae5dd94e.svg)

**Memory Beats 59.4%**  
![memory](https://user-images.githubusercontent.com/55650732/233050265-3a38a187-a5e0-4033-808b-da1ffa2c9d85.svg)


## 문제 이해하기

### INPUT
- 32-bit integer `x`

### 설명
- 부호 있는 32비트 정수 `x`가 주어지면 자릿수가 반전된 `x`를 반환합니다. 
- `x`를 반전시키면 값이 부호 있는 32비트 정수 범위[-231, 231 - 1]를 벗어나면 0을 반환합니다.


**문제 요약**

## 문제 풀이

~~~javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let v = x > 0 ? 1 : -1
  x = String(Math.abs(x)).split('').reverse().join('') * v
  return x >= (2 ** 31-1) || x <= -(2 ** 31) ? 0 : x
};

~~~

**풀이 방법 기입**
- `x` 를 절대값 -> 문자열 -> 한 문자씩 끊어 배열로 치환 -> 거꾸로 뒤집기 -> 배열 합치기