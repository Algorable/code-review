/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // join후 숫자로 바꿔 + 1
  let output = BigInt(digits.join("")) + 1n;
  // 문자로 바꿔 split
  return String(output).split("")
};