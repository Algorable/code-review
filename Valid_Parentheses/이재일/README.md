# 풀이

**Runtime Beats 96.95%**  
![1](https://user-images.githubusercontent.com/108773192/230758198-5a486693-e1d1-4f9a-8311-5b95e5723d41.svg)

**Memory Beats 77.30%**  
![2](https://user-images.githubusercontent.com/108773192/230758226-b4d3a649-10ad-4fcc-8afc-ab7c998a6361.svg)


## 문제 이해하기

- stack의 원리를 이해하며 앞에들어온 문자와 뒤에 들어온 문자를 비교한다

### INPUT

- s `비교할 괄호 문자`

### 설명

- 입력 받은 문자(괄호)를 하나씩 따갠다
- 따개 놓은 괄호를 기준으로  braketBox 안에 있는 key : value 값고 비교한다


## 문제 풀이
~~~javascript
function isValid(s) {
  const array = []; // array 생성
  const braketBox = {  '(' : ')'  ,  '{' : '}'  ,  '[' : ']'  };
  
  // 문자열 따개기
  for (let index = 0; index < s.length; index++) {

    // 비교할 시작 브라켓 (기준점) = frontBraket
    const frontBraket = s[index]; 

    // 1. 시작 괄호 - array에 추가
    if (braketBox[frontBraket]) {
      
      array.push(braketBox[frontBraket]);

    // 2. 끝 괄호 - array에서 마지막 요소와 비교
    } else if (frontBraket !== array.pop()) {
      return false;
    }
  }
  // array에 아무것도 없으면 true , 있으면 false
  return array.length === 0;
}
~~~


1. 처음에 input `s`로 입력받은 문자(괄호)를 index별로 따개 비교할 수 있도록 만들었습니다.
2. 시작하는 괄호(key)를 기준으로 잡고 해당 괄호의 끝괄호(key)를 array에 추가
3. 끝나는 괄호가 나오면 스택에서 마지막 요소와 비교하여 일치하면 삭제

솔직하게 말씀드리면 문제를 제스스로 완전히 풀지 못해서, gpt의 도움을 참조하여 코드를 작성하였습니다
