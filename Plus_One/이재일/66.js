var plusOne = function(digits) {

  /* 입력 받은 숫자 배열의 마지막 자리에 +1 하기 */
  let toNum = Number( digits.join('') ) + 1; 
  let toStr = toNum.toString();
  
  /* 빈 배열 생성 */
  const newArr = new Array(toStr.length).fill();
  
  /* 문자를 하나씩 따개서 다시 배열에 입력 */
  for (let i = 0; i < toStr.length; i++) {
    newArr[i] = Number(toStr[i]);
  }

  /* 리턴 */
  return newArr;
};

// 시도
console.log(plusOne([9]));

