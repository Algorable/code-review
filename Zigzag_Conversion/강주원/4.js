var convert = function (s, numRows) {
  let answer = "";
  const standardIndex = (numRows - 1) * 2;
  let sArray = s.split("");

  for (let row = 0; row < numRows; row++) {
    // 규칙에 맞는 인덱스의 값을 찾는다
    for (let index = 0 ; index < s.length; index += standardIndex) {
      let indexA = index + row; // standardIndex + row 
      let indexB = index + standardIndex - row; // standardIndex - row

      for (const findIndex of [indexA, indexB]) {
        // 해당 인덱스가 존재한다면
        if (sArray[findIndex]) {
          // 해당 값을 answer에 더해준다
          answer += sArray[findIndex];
          sArray[findIndex] = false;
        }
      }
    }
  }

  return answer
};

console.log(convert("PAYPALISHIRING", 4));