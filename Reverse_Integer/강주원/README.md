# 풀이

**Runtime Beats 80.91%**  

![7_run](https://user-images.githubusercontent.com/102473964/236682478-07c00e38-4b1f-4ab7-8c62-a8417b35a7b3.svg)


**Memory Beats 11.21%**

![7_memory](https://user-images.githubusercontent.com/102473964/236682473-cd5ebc25-9a0d-4320-b605-ee18d265af0a.svg)


## 문제 이해하기

### INPUT
- int `x`

### 설명
- 입력된 정수`x` 의 반전된 값 반환.
- 반전된 값이 32비트 범위를 넘으면 0 반환.

**문제 요약**

## 문제 풀이

~~~javascript
/**
 * @param {number} x
 * @return {number}
 */
/**
 * @param {number} x
 * @return {number}
 */

const reverse = function(x) {
    let isNagative = x < 0 ? true : false; // 음수인지 확인

    const ALLOWED = 2 ** 31 // 허용되는 크기

    let output = ("" + Math.abs(x)).split('').reverse(); // 정수 문자열 변환하고 배열로 만들기

    while (output[0] == '0') output.shift(); // 0 거르기

    output = isNagative ? '-' + output.join('') : output.join('');

    let isAllowed = Math.abs(output) < ALLOWED ? true : false; // 제한된 범위를 넘는지 확인

    return isAllowed ? output : 0
}
~~~

**풀이 방법 기입**
- 입력받은 `x` 값의 부호에 상관없이 처리하기 위해 절댓값을 취하여 문자열로 변환 후, 인덱스 역순으로 처리한 `output` 배열 생성.
- 문자열로 합칠 시에 0을 없애주기 위해 `output` 배열의 첫번째 요소가 0이 아니도록 처리.
- 제한된 범위 `ALLOWED`를 넘을 경우 0, 그렇지 않은 경우 역순으로 처리한 배열의 원소들을 합친 문자열 `output` 반환.
