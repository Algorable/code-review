/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const palindromeNumber = x.toString().split("").reverse().join("");
  return x == palindromeNumber ? true : false;
};
