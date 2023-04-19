/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let v = x > 0 ? 1 : -1;
  x = String(Math.abs(x)).split("").reverse().join("") * v;
  return x >= 2 ** 31 - 1 || x <= -(2 ** 31) ? 0 : x;
};
