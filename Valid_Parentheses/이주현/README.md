# 풀이

**Runtime Beats 99.75%**  
![runtime20](https://user-images.githubusercontent.com/64972038/230782827-e0459699-1b08-44ff-871d-98a458cdd3dc.svg)

**Memory Beats 71.25%**  
![memory20](https://user-images.githubusercontent.com/64972038/230782835-2b6be4f7-82ad-406c-9e4c-25c2a05ffaf8.svg)


## 문제 이해하기

### INPUT

- 문자열 `s`

### 설명

**개략**  
bracket이 올바르게 닫히는 문자열인가를 찾는 함수이다.

**상세**  
`current` 다음에는 _open bracket_ 인 `bracketMap`의 `key`만이 들어오거나,  
해당 _close bracket_ 인 `bracketMap[current]`이(가) 와야 한다.  

그런것을 모두 만족한 상태에서 `stack`의 길이가 `0` 이어야,  
_close bracket_ 이 마지막에 닫힌 것으로 알 수 있다.

## 문제 풀이
~~~javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // bracket by current index `i`
    const current = s[i];

    /* case of bracket type */
    // open bracket
    if (bracketMap[current]) {
      stack.push(bracketMap[current]);
    }
    // close bracket
    else if (current !== stack.pop()) {
      return false;
    }
  }

  if (stack.length > 0) return false;

  return true;
};
~~~
- `bracketMap`은 _open bracket_, _close bracket_ 를 `key`, `value`로 하는 **HashMap**이다.  

- `stack`은 _close bracket_ 을 담아 놓는 **Stack** 배열이다.  

- `current`는 현재 인덱스의 bracket이다.  

현재 값이 _open bracket_ 이면,  
해당 bracket의 _close bracket_ 인 `bracketMap[current]`이(가) `stack`에 담기게 된다.

현재 값이 _close bracket_ 이고, `stack`의 마지막 요소와 같지 않다면,  
결국 bracket의 쌍이 맞지 않다는 의미기 때문에 `false`를 반환한다.

이를 반복하여 마지막 요소까지 검사한다.    

`stack`에 요소가 남겨져 있으면, _close bracket_ 이 다 닫히지 않아서 `false`를 리턴한다.

마지막까지 `false`를 반환하지 않고 모두 순환하였으면,  
`true`를 반환한다.
