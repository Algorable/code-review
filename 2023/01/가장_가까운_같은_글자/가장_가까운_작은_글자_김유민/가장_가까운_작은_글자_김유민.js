function solution(s) {
  const answer = [];
  const map = new Map();

  // v는 s의 글자, i는 글자의 index다.
  [...s].map((v, i) => {
    if (!map.has(v)) answer.push(-1);
    else answer.push(i - map.get(v));
    map.set(v, i);
  });

  return answer;
}
