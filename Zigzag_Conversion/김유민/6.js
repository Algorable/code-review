/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  // 사이클의 크기 계산
  const cycleSize = 2 * numRows - 2;
  const arr = new Array(numRows).fill("");

  // 사이클에 맞게 각 배열에 문자 삽입
  for (let i = 0; i < s.length; i++) {
    let cycleIdx = i % cycleSize;
    let rIdx = cycleIdx < numRows ? cycleIdx : 2 * numRows - cycleIdx - 2;
    arr[rIdx] += s[i];
  }

  return arr.join("");
};

/*
var convert = function (s, numRows) {
  if (s.length <= numRows || numRows < 2) return s;

  const len = s.length;
  const num = 2 * (numRows - 1);
  let res = Array(numRows).fill("");
  let tmp = 0;

  for (let i = 0; i < len; i++) {
    tmp = i % num;
    if (tmp < numRows) {
      res[tmp] += s[i];
    } else {
      res[num - tmp] += s[i];
    }
  }

  return res.join("");
};
*/
