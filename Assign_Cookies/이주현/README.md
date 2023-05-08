# 풀이

**Runtime Beats 93.51%**  
![445-runtime](https://user-images.githubusercontent.com/64972038/236742867-87a8fca1-c31e-4a03-a4af-bc41b9d3956e.svg)


**Memory Beats 13.22%**  
![445-memory](https://user-images.githubusercontent.com/64972038/236742873-b41b6617-626b-4634-8e63-5f9690998d86.svg)


## 문제 이해하기

### INPUT

- `g` 그리드 요소
- `s` 쿠키의 사이즈

### 설명

- 각 아이들(`i`)은 `g[i]`의 쿠키를 원한다.
- 각 쿠키(`j`)는 `s[j]`의 사이즈가 주어진다.
- 자식 수를 최대화하여 요구에 맞는 아이의 수를 구한다.

**문제 요약**

## 문제 풀이

```javascript
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = 0;
  for (const cookie of s) {
    if (cookie >= g[child]) child++;
  }

  return child;
};
```

**풀이 방법 기입**

- 작은 사이즈부터 순환하기 위해서 `g` 배열과 `s` 배열을 내림차순으로 정렬한다.
- 여기서 요구 적합한 것은 가지고 있는 한 쿠키의 사이즈가 아이가 요구하는 쿠키의 사이즈 이상인가? 이다.
- 요구에 적합한 아이의 수를 구하기위해 `child`를 정의합니다.
- 내림차순으로 정렬한 `s`를 순환하면서 요구에 맞는 아이의 수 `child` 를 증가시킵니다.
- 가지고 있는 쿠키를 모두 순환했으면 `child`를 반환합니다.
