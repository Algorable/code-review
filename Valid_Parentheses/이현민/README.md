# 풀이

**Runtime Beats ~%**  

**Memory Beats ~%**  


## 문제 이해하기

### INPUT
**Input 요소**
String s
### 설명
s요소에 bracket`(), {}, []`을 넣어주면 제대로 열고 닫혔는지 판단하여 오픈 브라켓이 클로즈 브라켓과 서로 짝이 맞으면 true 안맞으면 false 를 출력한다.

**문제 요약**

## 문제 풀이
~~~javascript
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    let map = new Map();
    map.set('(',')');
    map.set('{','}');
    map.set('[',']');
    let b = [];
    for(let i = 0; i < s.length; i++) {
        if(map.has(s.charAt(i))) {
            b.push(s.charAt(i));
        } else {
            let pop = b.pop();
            if(map.get(pop) !== s.charAt(i)) {
                return false;
            }
        }
    }
    return b.length === 0;
};

~~~
isValid 함수에 `String s` 를 내보낸다.
map변수에` Map`을 생성한다.
map.set으로 각각 ` '(','{','[' `을 key로 주고 ` ')','}',']' `을 각각 value를 가지게 한다.
`b` 배열 변수를 생성한다.

for문으로 `i가 s배열길이 보다 작을 때` if문 `map.has로 s.charAt(i)값을 가지고 있는지` 물어본다.
true 일시, `b 배열 안에 s.charAt(i)` 값을 넣는다.
false 일시, `pop 변수에 b배열 값을 pop` 시킨다.
다시 for문으로 반복한다.

if문으로 `map 배열 pop키가 s.charAt(i)` 번째 와 다를 경우
`false`를 return한다.
b배열 길이가 0인 경우에 `true`를 return한다.