/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  const value = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let current = value[s[i]];
    let next = value[s[i + 1]];

    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }

  return result;
};
