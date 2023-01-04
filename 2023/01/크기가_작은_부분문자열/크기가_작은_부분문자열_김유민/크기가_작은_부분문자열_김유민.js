function solution(t, p) {
  const numberP = Number(p);
  let count = 0;

  for (let i = 0; i < t.length - p.length + 1; i++) {
    const slicedT = t.slice(i, i + p.length);
    const numberT = Number(slicedT);

    if (numberT <= numberP) {
      count += 1;
    }
  }

  return count;
}

console.log(solution("3141592", "271")); // output: 2
console.log(solution("500220839878", "7")); // output: 8
console.log(solution("10203", "15")); // output: 3
