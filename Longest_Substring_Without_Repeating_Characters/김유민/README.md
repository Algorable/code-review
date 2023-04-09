# 풀이

**Runtime Beats 97.95%**  
![runtime](https://user-images.githubusercontent.com/55650732/228427830-d20978c2-add1-4efb-8db8-1b3e67004ae8.svg)

**Memory Beats 28%**  
![memory](https://user-images.githubusercontent.com/55650732/228427841-259f3020-b62d-4dd6-a3bd-6f5bc4719ba2.svg)


## 문제 이해하기

### INPUT
- 문자열 `s`

### 설명

문자열 s에서 반복되는 문자 없이 가장 긴 substring을 찾고 길이를 반환해야 합니다.

**문제 요약**

## 문제 풀이
~~~javascript

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let bucket = []; // 문자 저장
  let maxLength = 0;

  // bucket 안에 s[i]가 있을 경우, i 다음부터 끝까지 잘라서 bucket에 다시 넣고 push
  // 없다면 별다른 조치없이 push
  for (let i = 0; i < s.length; i++) {
    if (bucket.includes(s[i])) {
      const index = bucket.findIndex((value) => value === s[i]);
      bucket = bucket.slice(index + 1);
      bucket.push(s[i]);
    } else {
      bucket.push(s[i]);
    }

    // 리턴값 갱신
    maxLength = Math.max(maxLength, bucket.length);
  }

  return maxLength;
};

~~~

**풀이 방법 기입**

문자를 담을 `bucket` 배열을 만들어서 그 안에 하나씩 추가하게 하였습니다.
`bucket` 안에 문자가 있을 때, 그 문자의 인덱스를 찾아 그 다음부터 끝까지 잘라서 `bucket`에 다시 넣어주고 그 문자를 push 했습니다.
만약 포함이 안 되어 있다면 그냥 push 했습니다.
그리고 최대길이를 갱신해주면 됩니다.