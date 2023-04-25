/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // bracket by current index `i`
    const current = s[i];

    /* case of bracket type */
    // open bracket
    if (bracketMap[current]) {
      stack.push(bracketMap[current]);
    }
    // close bracket
    else if (current !== stack.pop()) {
      return false;
    }
  }

  if (stack.length > 0) return false;

  return true;
};
