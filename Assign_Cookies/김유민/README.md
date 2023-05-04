# 풀이

**Runtime Beats 98.36%**  
![runtime](https://user-images.githubusercontent.com/55650732/236082265-9c0d37ab-bf39-49e0-88f2-a7c7265b2943.svg)

**Memory Beats 40.38%**  
![memory](https://user-images.githubusercontent.com/55650732/236082275-81676355-ca41-4013-8a88-182b1915fab3.svg)


## 문제 이해하기

### INPUT
- 그리드 요소 `g`, 사이즈 `s`

### 설명
- 각 아이에게 최대 하나의 쿠키만 주어질 수 있습니다.
- 각 어린이 i에는 어린이가 만족할 수 있는 쿠키의 최소 크기인 탐욕 계수 `g[i]`가 있고,
  각 쿠키 j에는 크키 `s[j]`가 있습니다.
- `s[j] >= g[i]`이면 쿠키 j를 자식 i에 할당할 수 있고, 자식 i는 만족하게 됩니다.
- 자식 수를 최대화하여 최대 개수를 출력합니다.


**문제 요약**

## 문제 풀이

~~~javascript
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);

  let content = 0;
  let index = 0;

  for (let cookie = 0; cookie < s.length; cookie++) {
    for (let greed = index; greed < g.length; greed++) {
      if (s[cookie] >= g[greed]) {
        content++;
        index = greed + 1;
        break;
      }
    }
  }

  return content;
};

~~~

**풀이 방법 기입**
- `g`와 `s`를 내림차순으로 정렬한 후, 어린이의 수만큼 반복하면서 해당 어린이가 받을 수 있는 가장 큰 쿠키를 찾습니다.
- 만약, 쿠키의 크기가 어린이의 greed factor보다 크거나 같으면 해당 어린이는 쿠키를 받을 수 있습니다.
- 이 때, 이미 사용된 쿠키는 다른 어린이가 사용할 수 없으므로, `index` 변수를 사용하여 이미 사용된 쿠키는 건너뛰도록 합니다.
- 마지막으로 쿠키를 받은 어린이의 수를 반환합니다.